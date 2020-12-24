import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';

import './Login.scss';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://logos-marcas.com/wp-content/uploads/2020/05/WhatsApp-Logo.png'
          alt=''
        />
        <div className='login__text'>
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button type='submit' onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
