import React, { useState } from 'react';
import './ListeningModuleSec4.css';
import audioSection4 from './Listening_audios/Section4.mp3';
import { Link } from 'react-router-dom';
import scorecard from './images/scorecard.png'



const ListeningModuleSec4 = () => {
  

    const [answers, setAnswers] = useState({
      question31: '',
      question32: '',
      question33: '',
      question34: '',
      question35: '',
      question36: '',
      question37: '',
      question38: '',
      question39: '',
      question40: '',
    });
    const [score, setScore] = useState(null);
    const [showScorecard, setShowScorecard] = useState(false);
  
    const handleChange = (event, question) => {
      const { value } = event.target;
      setAnswers(prevAnswers => ({
        ...prevAnswers,
        [question]: value,
      }));
    };
  
    const handleCheckAnswers = () => {
      const correctAnswers = {
        question31: 'present',
        question32: 'new facts',
        question33: 'other planets',
        question34: 'future medicine',
        question35: 'traffic',
        question36: 'toys',
        question37: 'animals',
        question38: 'camera',
        question39: 'efficient',
      };
    
      
      let userScore = 0;

      for (const question in answers) {
        if (answers[question] === correctAnswers[question]) {
          userScore++;
        }
      }
  
      setScore(userScore);
    };

    const handleShowScorecard = () => {
      setShowScorecard(true);
    };
  
    return (
      <div className='listening-test-container'>
        <h1 className="test-title">IELTS Listening: Section 4</h1>
        <audio controls className="audio-player">
          <source src={audioSection4} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="questions-container">
        <div>
        <p>Complete notes below. Write NO MORE THAN TWO WORDS for each answer. ROBERTS COMPANY</p>
        <p>Founding</p>
        <p>The most important principle of the company is to improve the <input classname = "input" type="text" value={answers.question31} onChange={e => handleChange(e, 'question31')} /> camera technology.</p>
        
        <p>Aim</p>
        <ul>
          <li>It was founded by Dwayne Roberts in 1957 and mainly explores <input classname = "input" type="text" value={answers.question32} onChange={e => handleChange(e, 'question32')} />.</li>
        </ul>
        
        <p>Potential applications</p>
        <ul>
          <li>recording high-definition video</li>
          <li>discovering <input classname = "input" type="text" value={answers.question33} onChange={e => handleChange(e, 'question33')} />.</li>
          <li>searching plants in the rainforest to experiment <input classname = "input" type="text" value={answers.question34} onChange={e => handleChange(e, 'question34')} />.</li>
          <li>distributing more across the road network to control <input classname = "input" type="text" value={answers.question35} onChange={e => handleChange(e, 'question35')} />.</li>
        </ul>
        
        <p>At present</p>
        <ul>
          <li><input classname = "input" type="text" value={answers.question36} onChange={e => handleChange(e, 'question36')} /> are the best sellers in the company.</li>
          <li>They are designed to look like <input classname = "input" type="text" value={answers.question37} onChange={e => handleChange(e, 'question37')} />.</li>
          <li>The company is working on a tiny <input classname = "input" type="text" value={answers.question38} onChange={e => handleChange(e, 'question38')} />. Other applications</li>
          <li>Surgeries could be faster and more <input classname = "input" type="text" value={answers.question39} onChange={e => handleChange(e, 'question39')} />.</li>
        </ul>
        
        <p>development of</p>
        <p>to change the way people see photography.</p>
      </div>
        </div>
        <button className="check-button" onClick={handleCheckAnswers}>Check Answers</button>
        <Link to="/" className="next_button">Move to Home section</Link>
       

        <div className="result-container">
        {score !== null && (
          <>
            <h2>Results</h2>
            <p>You got {score} out of 10 questions correct. Make sure to remember your score. Add all the previous scores to this score. Click on Generate Result</p>
            <button className="scorecard-button" onClick={handleShowScorecard}>
              Generate Result
            </button>
          </>
        )}
      </div>

      {showScorecard && (
        <div className="scorecard-container">
          <img src={scorecard} alt="Scorecard" className="scorecard-image" />
        </div>
      )}

      </div>
    );
  
  };
  
  export default ListeningModuleSec4;
  