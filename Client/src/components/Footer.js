import React from 'react';
import './Footer.css'
import { getAuth, signOut } from 'firebase/auth';


const Footer = () => {
  const auth = getAuth()
  async function handleSignOut(){
    try{
      await signOut(auth);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <footer className="footer">
      <p>Made by Ammar Ahmad</p>
      <div className="social-icons">
      <a href="https://github.com/ammarahmad1" target="_blank" rel="noopener noreferrer">
      <i class="fa fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/ammar-ahmed-027b08217" target="_blank" rel="noopener noreferrer">
      <i class="fa fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/ammarahmad111" target="_blank" rel="noopener noreferrer">
      <i class="fa fa-instagram"></i>
      </a>

      </div>
      </footer>
  );
};

export default Footer;
