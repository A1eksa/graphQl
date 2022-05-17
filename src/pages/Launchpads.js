import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import backIcon from '../images/backIcon.png';

export const Launchpads = ({ rockets }) => {
  const [launchpads, setLaunchpads] = useState([]);
  //   console.log(launchpads, 'launcpads');

  const navigate = useNavigate();

  const onButtBackClick = () => {
    navigate('/');
  };

  const LAUNCHPADS_QUERY = `
  {
    launchpads {
       name
       id
       details
       location {
        name
         latitude
        longitude
       }
     }
   }

  
    `;
  const apiURL = 'https://api.spacex.land/graphql/';

  useEffect(() => {
    fetch(apiURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: LAUNCHPADS_QUERY,
      }),
    })
      .then((res) => res.json())
      .then((data) => setLaunchpads(data.data.launchpads));
  }, []);

  return (
    <>
      <Link to='/' className='back-button' onClick={onButtBackClick}>
        <img className='back-icon' src={backIcon} />
        Back
      </Link>
      <div className='launchpads-wrapper'>
        {launchpads.map((launchpad) => (
          <div key={launchpad.id} className='launchpad'>
            <h2>{launchpad.name}</h2>
            <h4>{launchpad.location.name}</h4>
            <p>{launchpad.details}</p>
            <p>{launchpad.location.longitude}</p>
            <p>{launchpad.location.latitude}</p>
          </div>
        ))}
      </div>
    </>
  );
};
