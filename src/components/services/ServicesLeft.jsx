import React from 'react';

const ServicesLeft = ({ heading, subHeading }) => (
  <div className='services__left'>
    <h1 className='services__left__heading animation'>{heading}</h1>
    <p className='services__left__paragraph animation'>{subHeading}</p>
  </div>
);

export default React.memo(ServicesLeft);
