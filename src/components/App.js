import React from 'react';
import Signup from '../containers/SignUp';
import SignIn from '../containers/SignIn';
import MemeContainer from '../containers/MemeContainer';

export default function App() {
  return (
    <>
      <h2>Sign Up!!</h2>
      <Signup />
      <h2>Sign In!!!</h2>
      <SignIn />
      <h1>Meme Container</h1>
      <MemeContainer />
    </>
  );
}
