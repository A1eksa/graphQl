import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';
import twitter from '../images/twitter.png';

export const Header = () => {
  return (
    <header className='header-wrapper'>
      <a className='spacex-home' href='https://www.spacex.com/'>
        <img src={logo} alt='spacex-img' className='logo' />
      </a>

      <a href='https://twitter.com/elonmusk'>
        <img src={twitter} alt='twitter-img' className='twitter' />
      </a>
    </header>
  );
};
