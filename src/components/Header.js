import React from 'react';

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
        <a href='https://twitter.com/elonmusk'>
          <img src={twitter} alt='twitter-img' className='twitter' />
        </a>
        <a href='https://twitter.com/elonmusk'>
          <img src={linkedin} alt='twitter-img' className='twitter' />
        </a>
      </div>
    </header>
  );
};
