import React from 'react';
import Signup from '../containers/SignUp';
import Signin from '../containers/SignIn';

export default function App() {
  return (
    <>
      <h2>Sign Up!!</h2>
      <Signup />
      <h2>Sign In!!!</h2>
      <Signin />
    </>
  );
}
