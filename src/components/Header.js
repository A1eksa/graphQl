import React from 'react';
import { SiSpacex } from 'react-icons/si';

import logo from '../images/logo.png';

export const Header = () => {
  return (
    <header className='header-wrapper'>
      <SiSpacex className='space-x' />
    </header>
  );
};
