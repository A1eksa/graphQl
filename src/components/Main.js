import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FaRocket } from 'react-icons/fa';

export const Main = () => {
  const [rockets, setRockets] = useState([]);

  const ROCKETS_QUERY = `
  {
    rockets {
      name
      description
      wikipedia
      id
    }
    company {
        ceo
      }
  }
    `;

  useEffect(() => {
    fetch('https://api.spacex.land/graphql/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: ROCKETS_QUERY,
      }),
    })
      .then((res) => res.json())
      .then((data) => setRockets(data.data.rockets));
  }, [ROCKETS_QUERY]);
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
            spacecraft.
          </h4>
        </div>
        <div className='right-main'>
          {rockets.map((rocket) => (
            <div key={rocket.id} className='rocket'>
              <h3 className='rocket-title'>{rocket.name}</h3>
              {/* <p>{rockets.company.ceo}</p> */}
              <p>{rocket.description}</p>
              <a href={rocket.wikipedia}>
                <FaRocket />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
