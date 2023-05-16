import React from 'react';
import { BsStopwatch } from 'react-icons/bs';
import Facilities from './Facilities';

const formate = (price) => `${price}.00`;

const CityContents = ({ city }) => (
  <div className='cities__body__contents'>
    <div className='cities__body__contents__top'>
      <div className='cities__body__contents__top__name'>{city.name}</div>
      <div className='cities__body__contents__top__duration'>
        <BsStopwatch size={18} color='#df2189' />
        <div className='cities__body__contents__top__duration__time'>
          {city.duration}
        </div>
      </div>
    </div>
    <div className='cities__body__contents__price'>
      <span className='cities__body__contents__price__dollor'>$</span>
      {formate(city.price)}
    </div>
    <Facilities name='room' value={city.room} />
    <Facilities name='food' value={city.food} />
    <div className='cities__body__contents__button'>
      <btn className='btn-dark-sm'>buy now</btn>
    </div>
  </div>
);

export default React.memo(CityContents);
