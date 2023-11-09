import React from 'react';
import './AcademicReadingIns.css';
import { Link } from 'react-router-dom';

const AcademicReadingIns = () => {
    return (
      <div className="online-reading-instructions-container">
        <h1 className="module-title">IELTS Academic Reading Module</h1>
        <p className="instruction-text">
          Welcome to the IELTS Academic Reading Module. Please read the
          instructions carefully before starting the test.
        </p>
        <ol className="instructions-list">
          <li>
            You will have a total
            of three reading passages to complete.
          </li>
          <li>
             Each passage will be
            followed by a set of questions.
          </li>
          <li>
           You must answer the
            questions based on the information in the passages.
          </li>
          <li>
            The test is timed, and
            you are required to complete it within the allotted time.
          </li>
          <li>
             Use a computer or
            tablet with a stable internet connection to access the test.
          </li>
          <li>
            Ensure you are in a
            quiet and well-lit room to minimize distractions.
          </li>
          <li>
           Click on the "Start
            Test" button when you are ready to begin.
          </li>
          <li>
                You will be able to
            navigate between passages and questions as needed.
          </li>
          <li>
             Save your answers as
            you progress through the test.
          </li>
          <li>
             Review your answers
            before submitting the test.
          </li>
          <li>
            Once you have
            completed the test, click the "Submit" button to finalize your
            answers.
          </li>
          
        </ol>
        <Link to="/academicreadingmodule1" className="start-button">Start General Listening Test</Link>
      </div>
    );
  };
  
  export default AcademicReadingIns;