import React from 'react';

import noData from '../images/noData.png';

export const EmptyState = () => {
  return (
    <div className='empty-state'>
      <img className='empty-img' alt='no-data img' src={noData} />
    </div>
  );
};
