import React from 'react';
import './Glisteningins.css';  
import {Link} from 'react-router-dom';

const OnlineListeningTestInstructions = () => {
  return (
    <div className="instructions">
      <h2>Instruction Script for IELTS General Training Listening Test (Online)</h2>
      <p>Welcome to the IELTS General Training Listening Test. In this section, you will have the opportunity to demonstrate your listening skills. Please pay careful attention to the instructions provided.</p>
      <h1>Test Format:</h1>
          <ul>
        <li>The listening test consists of four sections.</li>
        <li>You will listen to four audio recordings, each followed by a set of questions.</li>
        <li>The recordings are played only once.</li>
        <li>You will have some time to read the questions before each recording begins.</li>
        <li>As you listen, you should select the correct answers online.</li>
      </ul>
      <h3>Instructions:</h3>
      <ol>
        <li>Before the test begins, ensure you have a stable internet connection and a compatible device.</li>
        <li>Listen carefully to the instructions for each section.</li>
        <li>Look at the questions for the first section before the recording starts. You will have time to read through the questions.</li>
        <li>While listening to each recording, focus on understanding the main ideas, details, and any specific information.</li>
        <li>Remember that the recordings will be played only once. It's important to listen carefully.</li>
        <li>Select the correct answers online as you listen. There will be options to choose from.</li>
        <li>After each section, you will have a short time to review your answers before the next recording begins.</li>
        <li>When the recording for a section ends, you will have a little time to review and finalize your answers before the next section begins.</li>
      </ol>
      <h2>Important Reminders:</h2>
      <ul>
        <li>Check Result on each Section.</li>
        <li>Make sure to remember your score of each section. Grades are given on Last section.</li>
        <li>Make sure your device's volume is adjusted appropriately for listening.</li>
        <li>Keep your focus on the audio recordings during the test.</li>
        <li>Do not open any other tabs or applications during the test.</li>
        <li>Follow the instructions provided on the test platform.</li>
      </ul>
      <p>Thank you for your attention. Good luck with the IELTS General Training Listening Test!</p>
      <br></br>
      
      <Link to="/ListeningModuleSec1" className="start-button">Start General Listening Test</Link>
    </div>
  );
}

export default OnlineListeningTestInstructions;