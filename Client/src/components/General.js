import React from 'react';
import './General.css';  
import {Link} from 'react-router-dom';
import Footer from './Footer';


const General = () => {
  return (
    <div className="general_home-page">
      <div className="general_background-image">
        <div className="general_content">
          <h1>Welcome to General section of IELTS TEST</h1>
          <div className='general_Ielts_section'>
            <div className="general_button-container">
                <Link to="/generallisteningins" className="button">Listening</Link>
                <Link to="/generalreadingins" className="button">Reading</Link>
                <Link to="/generalwritingins" className="button">Writing</Link>
                <Link to="/speakingholdingpage" className='button'>Speaking</Link>
               
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default General;
