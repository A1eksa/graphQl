import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';

export const Header = () => {
  return (
    <header className='header-wrapper'>
      <a className='spacex-home' href='https://www.spacex.com/'>
        <img src={logo} alt='spacex-img' className='logo' />
      </a>

      <div className='icon-wrapper'>
        <Link to='/launches' className='launch-link'>
          LAUNCHES
        </Link>
        <Link to='/launchpads' className='launch-link'>
          LAUNCHPADS
        </Link>
        <div className='links-wrapper'>
          <a href='https://twitter.com/elonmusk'>
            <img src={twitter} alt='twitter-img' className='twitter' />
          </a>
          {/* <a href='https://twitter.com/elonmusk'>
            <img src={linkedin} alt='twitter-img' className='twitter' />
          </a> */}
        </div>
      </div>
    </header>
  );
};
