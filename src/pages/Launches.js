import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { EmptyState } from 'components/EmptyState';

import backIcon from '../images/backIcon.png';
// import ReactPlayer from 'react-player';

export const Launches = () => {
  const [launches, setLaunches] = useState([]);

  const navigate = useNavigate();

  const onButtBackClick = () => {
    navigate('/');
  };

  const LAUNCHES_QUERY = `
  {
    launchesPast(limit: 6, order: "asc") {
      launch_year
      mission_name
      launch_date_local
      id
      links {
        video_link
        flickr_images
      }
      details
    }
  }
  
  
    `;
  const apiURL = 'https://api.spacex.land/graphql/';

  useEffect(() => {
    fetch(apiURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: LAUNCHES_QUERY,
      }),
    })
      .then((res) => res.json())
      .then((data) => setLaunches(data.data.launchesPast));
  }, [LAUNCHES_QUERY]);

  return (
    <>
      <Link to='/' className='back-button' onClick={onButtBackClick}>
        <img className='back-icon' alt='back-icon' src={backIcon} />
        Back
      </Link>
      <h3 className='launches-title'>LATEST LAUNCHES</h3>
      <div className='launch-wrapper'>
        {launches.map((launch) => (
          <div key={launch.id} className='launch'>
            <h3>{launch.mission_name}</h3>
            <p>{launch.launch_date_local}</p>
            {launch.details ? <p>{launch.details}</p> : <EmptyState />}
            {/* <div>
              <ReactPlayer
                controls
                width='480px'
                height='240px'
                url={launch.links.video_link}
              />
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
};
