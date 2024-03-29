import React, { useContext, useState } from 'react';

import ModelContext from '../context/ModelContext';
import { OPEN_MODEL } from '../context/types/ModelTypes';

const Login = ({ currentModel }) => {
  const { dispatch } = useContext(ModelContext);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const loginForm = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={loginForm}>
      <div className='model__heading'>
        <h3>Login</h3>
      </div>
      <div className='group'>
        <input
          type='email'
          name=''
          className='group__control'
          placeholder='Enter email'
          onChange={(e) => setState({ ...state, email: e.target.value })}
          value={state.email}
        />
      </div>
      <div className='group'>
        <input
          type='password'
          name=''
          className='group__control'
          placeholder='Enter password'
          onChange={(e) => setState({ ...state, password: e.target.value })}
          value={state.password}
        />
      </div>
      <div className='group flex space-between y-center'>
        <input type='submit' name='' className='btn-dark ' value='Login' />
        <span
          onClick={() => dispatch({ type: OPEN_MODEL, payload: currentModel })}
        >
          Create new account?
        </span>
      </div>
    </form>
  );
};

export default React.memo(Login);
