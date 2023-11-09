import React from 'react';
import './Signinform.css'
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { getAuth } from "firebase/auth";




const SignInForm = () => {
  
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/');
      })
      
  }
  return (
    <div className="background">
      <div className="form-container">
        <h1>Online Ielts Test</h1>
        <h2>Sign in</h2>
        <form onSubmit={signIn}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;

