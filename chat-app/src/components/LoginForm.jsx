import React, { useState, useRef } from 'react';
import authenticationApi from '../apis/authenticationApi';

function LoginForm() {
  let [isLoginForm, setLoginForm] = useState(true);
  let usernameEl = useRef('');
  let passwordEl = useRef('');

  let toggleLogin = function() {
    setLoginForm(!isLoginForm);
  };
  let handleLogin = function(e) {
    e.preventDefault();
    if (isLoginForm) {
      authenticationApi
        .login({
          username: usernameEl.current.value,
          password: passwordEl.current.value,
        })
        .then(function(err, data) {
          console.log(err);
        });
    }
  };
  return (
    <div className="chatapp__form--modal">
      <button id="toggle-login" onClick={toggleLogin}>
        {isLoginForm ? 'Register' : 'Login'}
      </button>
      <form>
        <input
          type="text"
          name="username"
          label="Username"
          placeholder="Username"
          ref={usernameEl}
        />
        <input
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          ref={passwordEl}
        />
        <button onClick={handleLogin}>
          {isLoginForm ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
