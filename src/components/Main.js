import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';

import { FaMarsStroke, FaRocket } from 'react-icons/fa';

export const Main = () => {
  const [rockets, setRockets] = useState([]);

  const ROCKETS_QUERY = `
  {
    rockets {
      name
      description
      wikipedia
      id
      mass {
        kg
      }
      height {
        meters
      }
      
    }
  }
    `;

  const apiURL = 'https://api.spacex.land/graphql/';

  const fetchRockets = useCallback(
    async (ROCKETS_QUERY) => {
      const rocketData = await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: ROCKETS_QUERY,
        }),
      });
      const parsedData = await rocketData.json();
      const myRockets = parsedData.data.rockets;
      setRockets(myRockets);
    },
    [setRockets]
  );

  useEffect(() => {
    fetchRockets(ROCKETS_QUERY);
  }, [fetchRockets, setRockets]);

  function sortByWeight() {
    return rockets
      .slice()
      .sort((rocketA, rocketB) => rocketB.mass.kg - rocketA.mass.kg);
  }

  function sortByHeight() {
    return rockets
      .slice()
      .sort(
        (rocketA, rocketB) => rocketB.height.meters - rocketA.height.meters
      );
  }

  function sortList(sorterValue) {
    if (sorterValue === 'byWeight') return sortByWeight();
    if (sorterValue === 'byHeight') return sortByHeight();
    else return;
  }

  async function handleSorting(e) {
    const sorterValue = e.target.value;
    const sortedList = await sortList(sorterValue);
    setRockets(sortedList);
  }

  const RocketList = rockets.map((rocket) => (
    <div key={rocket.id} className='rocket'>
      <h3 className='rocket-title'>{rocket.name}</h3>
      <p>{rocket.description}</p>
      {'byWeight' ? (
        <p>
          {rocket.mass.kg}
          kg
        </p>
      ) : (
        ''
      )}
      {/* <p>
        {rocket.mass.kg}
        kg
      </p>
      <p>
        {rocket.height.meters}
        meters
      </p> */}
      <a href={rocket.wikipedia}>
        <FaRocket />
      </a>
    </div>
  ));

  return (
    <>
      <Header />
      <div className='main-wrapper'>
        <div className='left-main'>
          <h1>TO MARS AND BEYOND</h1>
          <h3>
            <span className='quote'>
              'A future worth getting excited about'
            </span>{' '}
            <span className='author'>by Elon Musk</span>
          </h3>
          <h4>
            SpaceX designs, manufactures and launches advanced rockets and
            spacecraft. Sending humans and cargo into space.
          </h4>
          <Link to='/launches'>
            <button className='btn'>LATEST LAUNCHES</button>
          </Link>
        </div>
        <div className='right-main'>
          <section className='sorter'>
            <h4 className='sort-label'>Sort by:</h4>
            <div className='btn-sort byWeigth'>
              <button className='btn' value='byWeight' onClick={handleSorting}>
                Sort by weight
              </button>
            </div>
            <div className='btn-sort byHeight'>
              <button className='btn' value='byHeight' onClick={handleSorting}>
                Sort by height
              </button>
            </div>
          </section>
          {RocketList}
        </div>
      </div>

      <Footer />
    </>
  );
};
