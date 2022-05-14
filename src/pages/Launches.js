import React, { useEffect, useState } from 'react';

export const Launches = ({ rockets }) => {
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

  useEffect(() => {
    fetch('https://api.spacex.land/graphql/', {
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
    <div>
      {launches.map((launch) => (
        <div key={launch.id} className='launch-wrapper'>
          <h3>{launch.mission_name}</h3>
          <p>{launch.launch_year}</p>
          <img src={launch.links.flickr_images} className='launch-img'></img>
        </div>
      ))}
    </div>
  );
};
