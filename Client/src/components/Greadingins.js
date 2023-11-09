import React from 'react';
import './Greadingins.css';  
import { Link } from 'react-router-dom';

const GeneralReadingTestInstructions = () => {
  return (
    <div className="instructions">
      <h2>Instruction Script for IELTS General Training Reading Test (Online)</h2>
      <p>Welcome to the IELTS General Training Reading Test. In this section, you will have the opportunity to demonstrate your reading skills. Please pay careful attention to the instructions provided.</p>
      <h1>Test Format:</h1>
      <ul>
        <li>The reading test consists of three sections.</li>
        <li>You will read three passages and answer questions based on them.</li>
        <li>The passages are taken from notices, advertisements, books, and newspapers.</li>
        <li>You will answer questions online based on the passages.</li>
      </ul>
      <h3>Instructions:</h3>
      <ol>
        <li>Before the test begins, ensure you have a stable internet connection and a compatible device.</li>
        <li>Read the instructions carefully for each section.</li>
        <li>For each passage, you will have time to read through the questions before you start reading.</li>
        <li>As you read the passages, focus on understanding the main ideas, details, and any specific information.</li>
        <li>Remember that you need to answer questions based on the passages.</li>
        <li>Select the correct answers online for each question. There will be options to choose from.</li>
      </ol>
      <h3>Important Reminders:</h3>
      <ul>
        <li>Keep a stopwatch with you.</li>
        <li>Make sure your device's screen is comfortable for reading.</li>
        <li>Keep your focus on the passages and questions during the test.</li>
        <li>Do not open any other tabs or applications during the test.</li>
        <li>Follow the instructions provided on the test platform.</li>
      </ul>
      <p>Thank you for your attention. Good luck with the IELTS General Training Reading Test!</p>
      <br />
      <Link to="/GeneralReadingModuleSec1" className="start-button">Start General Reading Test</Link>
      
    </div>
    

  );
}

export default GeneralReadingTestInstructions;
