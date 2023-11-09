import React from 'react';
import './Academic.css';  
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Academic = () => {
  return (
    <div className="academic_home-page">
      <div className="academic_background-image">
        <div className="academic_content">
          <h1>Welcome to Academic section of IELTS TEST</h1>
          <div className='academic_Ielts_section'>
            <div className="academic_button-container">
                <Link to="/generallisteningins" className="button">Listening</Link>
                <Link to="/academicreadingins" className="button">Reading</Link>
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

export default Academic;
