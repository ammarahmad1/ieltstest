import React from 'react';
import './Signupform.css'
import { useState } from 'react';
import { UserAuth } from '../Context/AuthContext';

import { getAuth } from "firebase/auth";
import firebase from "../firebase";

const auth = getAuth();

const SignUpForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 

  const {createUser} = UserAuth()

  const SignUp = async(e) => {
    e.preventDefault();
    setError('')
    try{
      await createUser(email, password)
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  return (
    <div className="background">
      <div className="form-container">
        <h1>Online Ielts Test</h1>
        <h2>Sign Up</h2>
        <form onSubmit={SignUp}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
