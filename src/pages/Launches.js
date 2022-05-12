import React, { useEffect, useState } from 'react';

export const Launches = ({ rockets }) => {
  console.log(rockets, 'rockets');
  const [launches, setLaunches] = useState([]);

  const LAUNCHES_QUERY = `
  {
    launchesPast {
      launch_date_local
      launch_success
      rocket {
        rocket_name
      }
      ships {
        image
      }
    }
  }
  
    `;
  return <div>HERE ARE LAUNCHES</div>;
};
