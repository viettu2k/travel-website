import React, { useContext, useState } from 'react';

import ModelContext from '../context/ModelContext';
import { OPEN_MODEL } from '../context/types/ModelTypes';

const Register = ({ currentModel }) => {
  const { dispatch } = useContext(ModelContext);
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerForm = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={registerForm}>
      <div className='model__heading'>
        <h3>Create new account</h3>
      </div>
      <div className='group'>
        <input
          type='text'
          name=''
          className='group__control'
          placeholder='Enter name'
          onChange={(e) => setState({ ...state, name: e.target.value })}
          value={state.name}
        />
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
          placeholder='Create password'
          onChange={(e) => setState({ ...state, password: e.target.value })}
          value={state.password}
        />
      </div>
      <div className='group flex space-between y-center'>
        <input type='submit' name='' className='btn-dark ' value='Register' />
        <span
          onClick={() => dispatch({ type: OPEN_MODEL, payload: currentModel })}
        >
          Already have an account?
        </span>
      </div>
    </form>
  );
};

export default React.memo(Register);
