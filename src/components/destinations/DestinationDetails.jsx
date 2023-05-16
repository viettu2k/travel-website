import React from 'react';

const DestinationDetails = ({ title, text }) => (
  <div className='destinationInfo__details'>
    <div className='destinationInfo__details__head animation'>{title}</div>
    <div className='destinationInfo__details__text animation'>{text}</div>
  </div>
);

export default React.memo(DestinationDetails);
