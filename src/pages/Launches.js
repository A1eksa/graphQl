import React, { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';

import { Launchpads } from './Launchpads';

export const Launches = () => {
  const [launches, setLaunches] = useState([]);

  console.log(launches, 'launches');

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
  }, []);

  return (
    <>
      <div className='launch-wrapper'>
        {launches.map((launch) => (
          <div key={launch.id} className='launch'>
            <h3>{launch.mission_name}</h3>
            <p>{launch.launch_date_local}</p>
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
      <Launchpads />
    </>
  );
};
