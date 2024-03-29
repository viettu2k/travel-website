import { useReducer } from 'react';

import SharedContext from '../SharedContext';
import SharedReducer from '../reducers/SharedReducer';
import services from '../../data/services';
import reviews from '../../data/reviews';

const SharedProvider = ({ children }) => {
  const [sharedData, dispatch] = useReducer(SharedReducer, {
    servicesData: services,
    reviews: reviews,
  });

  return (
    <SharedContext.Provider value={{ sharedData, dispatch }}>
      {children}
    </SharedContext.Provider>
  );
};

export default SharedProvider;
