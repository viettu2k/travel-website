import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GiPositionMarker } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const DestinationsList = ({ destination }) => (
  <div className='col-3 p-15'>
    <div className='destinations__card animation'>
      <div className='destinations__card__img'>
        <LazyLoadImage src={destination.image} alt={destination.image} />
      </div>
      <div className='destinations__card__layer'>
        <div className='destinations__card__layer__content'>
          <GiPositionMarker size={20} />
          <div className='destinations__card__layer__content__country'>
            {destination.name}
          </div>
        </div>
      </div>
      <div className='destinations__card__info'>
        <div className='destinations__card__info__text'>
          <Link className='btn-white' to={`/details/${destination.id}`}>
            Explore
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default React.memo(DestinationsList);
