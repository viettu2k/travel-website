import React from 'react';
import { BsCheck, BsX } from 'react-icons/bs';

const Facilities = ({ name, value }) => (
  <div className='cities__body__contents__facilities'>
    <div className='cities__body__contents__facilities__name'>{name}</div>
    <div className='cites__body__contents__facilities__value'>
      {value ? (
        <BsCheck size={20} color='#34D399' />
      ) : (
        <BsX size={20} color='#ff4d58' />
      )}
    </div>
  </div>
);

export default React.memo(Facilities);
