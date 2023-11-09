import React from 'react';
import './Signin.css';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Signin = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/');
      })
      .catch((error) => {
        setError('Password or Email incorrect');
        console.log(error);
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        navigate('/');
      })
      .catch((error) => {
        setError('Google Sign-In Error');
        console.log(error);
      });
  };

  const resetError = () => {
    setError(null);
  };

  return (
    <div className="background">
      <div className="form-container">
        <h1>Online Ielts Test</h1>
        <h2>Sign in</h2>
        
        <button onClick={signInWithGoogle} className="google-sign-in-button"><i class="fa fa-google"></i> Sign In with Google</button>
        
       
      </div>
    </div>
  );
};

export default Signin;
