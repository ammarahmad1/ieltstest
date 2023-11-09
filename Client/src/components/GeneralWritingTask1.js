import React, { useState } from 'react';
import './GeneralWritingTask1.css';
import axios from 'axios';

const GeneralWritingTask1 = () => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleUserAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleCheckAnswer = () => {
   
    const feedbackText =
      "User's letter is polite and well-written. Overall, the user's letter is polite and well-organized. With a few more details, it would be an excellent letter.";

    setFeedback(feedbackText);
  };

  return (
    <div className="general_writing-task-container">
      <h2>IELTS General Writing Task 1</h2>
      <p>You are taking a course at a local college. The deadline for your project was last week but you haven't finished it.</p>
      <p>Write a letter to your lecturer. In your letter:</p>
      <ol>
        <li>Introduce yourself</li>
        <li>Explain why you haven't handed in the project yet</li>
        <li>Request more time to do it.</li>
      </ol>
      <hr />
      <div className="letter-input">
        <label htmlFor="letterContent">Your Letter:</label>
        <textarea
          id="letterContent"
          name="letterContent"
          rows="10"
          cols="50"
          placeholder="Write your letter here..."
          value={userAnswer}
          onChange={handleUserAnswerChange}
        ></textarea>
      </div>
      <button className="writing-check-button" onClick={handleCheckAnswer}>
        Check
      </button>

      {feedback && (
        <div className="feedback">
          <h3>Feedback:</h3>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default GeneralWritingTask1;
