import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main } from './components/Main';
import { Launches } from 'pages/Launches';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/launches' element={<Launches />} />
      </Routes>
    </BrowserRouter>
  );
};
