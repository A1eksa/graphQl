import React from 'react';
import { VscRocket } from 'react-icons/vsc';

import logo from '../images/logo.png';

export const Header = () => {
  const style = { fill: 'white', fontSize: '1.5em' };
  return (
    <header className='header-wrapper'>
      <img src={logo} className='logo' />
      <a className='spacex-home' href='https://www.spacex.com/'>
        <VscRocket value={style} />
      </a>
    </header>
  );
};
