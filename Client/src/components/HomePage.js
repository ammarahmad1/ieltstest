import React from 'react';
import './HomePage.css'; 

import {Link} from 'react-router-dom';


const HomePage = () => {
  
  return (
    <div className="home-page">
      <div className="background-image">
        <div className="content">
          <h1>Welcome to your Online IELTS TEST </h1>
          <div className='Ielts_section'>
            <div className="button-container">
              <Link to="/general" className="button">General Training</Link>
              <Link to="/academic" className="button">Academic Training</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
