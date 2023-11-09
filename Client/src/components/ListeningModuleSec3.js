import React, { useState } from 'react';
import './ListeningModuleSec3.css';
import audioSection3 from './Listening_audios/Section3.mp3';
import { Link } from 'react-router-dom';




const ListeningModuleSec3 = () => {
    const [answers, setAnswers] = useState({
      question21: '',
      question22: '',
      question23: '',
      question24: '',
      question25: '',
      question26: '',
      question27: '',
      question28: '',
      question29: '',
      question30: '',
    });
    const [score, setScore] = useState(null);
    const handleChange = (event, question) => {
      const { value } = event.target;
      setAnswers(prevAnswers => ({
        ...prevAnswers,
        [question]: value,
      }));
    };
  
    const handleCheckAnswers = () => {
      const correctAnswers = {
        question21: 'A',
        question22: 'C',
        question23: 'B',
        question24: 'A',
        question25: 'B',
        question26: 'D',
        question27: 'A',
        question28: 'B',
        question29: 'C',
        question30: 'D',
      };
      
      
      let userScore = 0;

      for (const question in answers) {
        if (answers[question] === correctAnswers[question]) {
          userScore++;
        }
      }
  
      setScore(userScore);
  
      };
    
  
    return (
        <div className='listening-test-container'>
        <h1 className="test-title">IELTS Listening: Section 3</h1>
        <audio controls className="audio-player">
          <source src={audioSection3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="questions-container">
        <div>
        <p>21. The course has improved the environment since</p>
        <input
          type="radio"
          name="question21"
          value="A"
          checked={answers.question21 === 'A'}
          onChange={e => handleChange(e, 'question21')}
        />
        A. it was regulated by law.
        <br />
        <input
          type="radio"
          name="question21"
          value="B"
          checked={answers.question21 === 'B'}
          onChange={e => handleChange(e, 'question21')}
        />
        B. more students were involved.
        <br />
        <input
          type="radio"
          name="question21"
          value="C"
          checked={answers.question21 === 'C'}
          onChange={e => handleChange(e, 'question21')}
        />
        C. more species were brought from other places.
      </div>

      <div>
        <p>22. What is the biggest reason why the organization improved greatly?</p>
        <input
          type="radio"
          name="question22"
          value="A"
          checked={answers.question22 === 'A'}
          onChange={e => handleChange(e, 'question22')}
        />
        A. It was funded by a private investor.
        <br />
        <input
          type="radio"
          name="question22"
          value="B"
          checked={answers.question22 === 'B'}
          onChange={e => handleChange(e, 'question22')}
        />
        B. It sold out its shares.
        <br />
        <input
          type="radio"
          name="question22"
          value="C"
          checked={answers.question22 === 'C'}
          onChange={e => handleChange(e, 'question22')}
        />
        C. It got the governmental fund in the first year.
      </div>

      <div>
        <p>23. What is suggested from the reports?</p>
        <input
          type="radio"
          name="question23"
          value="A"
          checked={answers.question23 === 'A'}
          onChange={e => handleChange(e, 'question23')}
        />
        A. Resources still need management.
        <br />
        <input
          type="radio"
          name="question23"
          value="B"
          checked={answers.question23 === 'B'}
          onChange={e => handleChange(e, 'question23')}
        />
        B. Teachers and the students have benefitted from the field trips.
        <br />
        <input
          type="radio"
          name="question23"
          value="C"
          checked={answers.question23 === 'C'}
          onChange={e => handleChange(e, 'question23')}
        />
        C. The environment has been terribly damaged.
      </div>

      <div>
        <p>24. Who did obtain the special experience from the field trip carried out by the organization?</p>
        <input
          type="radio"
          name="question24"
          value="A"
          checked={answers.question24 === 'A'}
          onChange={e => handleChange(e, 'question24')}
        />
        A. students
        <br />
        <input
          type="radio"
          name="question24"
          value="B"
          checked={answers.question24 === 'B'}
          onChange={e => handleChange(e, 'question24')}
        />
        B. teachers
        <br />
        <input
          type="radio"
          name="question24"
          value="C"
          checked={answers.question24 === 'C'}
          onChange={e => handleChange(e, 'question24')}
        />
        C. researchers
      </div>
      <div>
      <p>25-26. Choose TWO letters A-E. <br></br> What TWO problems does the report focus on? <input  type="text" value={answers.question25} onChange={e => handleChange(e, 'question25')}/> <input  type="text" value={answers.question26} onChange={e => handleChange(e, 'question26')}/> </p>
      A. air pollution
      <br />
      B. soil erosion
      <br />
      C. overgrazing
      <br />
      D. forest exploitation
      <br />
      E. water pollution
    </div>

    <div>
      <p>27-28. Choose TWO letters A-E. Which TWO benefits of this activity to the students are mentioned by the professor?<input  type="text" value={answers.question27} onChange={e => handleChange(e, 'question27')}/> <input  type="text" value={answers.question28} onChange={e => handleChange(e, 'question28')}/> </p>
      A. they become more punctual
      <br />
      B. they feel more confident
      <br />
      C. they get practical experience
      <br />
      D. they learn how to collect data
      <br />
      E. they know the importance of environment protection
    </div>

    <div>
      <p>29-30. Choose TWO letters A-E. What TWO things will the woman do in the rest of the time when no activities are going on? <input  type="text" value={answers.question29} onChange={e => handleChange(e, 'question29')}/> <input  type="text" value={answers.question30} onChange={e => handleChange(e, 'question30')}/>  </p>
      A. read more reference books
      <br />
      B. study in the library
      <br />
      C. interview some teachers
      <br />
      D. participate in one of fun hobbies
      <br />
      E. join in some tutorials
    </div>
    </div>

      <button className="check-button" onClick={handleCheckAnswers}>Check Answers</button>
      <Link to="/ListeningModuleSec4" className="next_button">Move to next section</Link>
      <div className="result-container">
        {score !== null && (
          <>
            <h2>Results</h2>
            <p>You got {score} out of 10 questions correct. Make sure to remember your score. Click on Move to next section</p>
         
          </>
        )}
      </div>
    </div>
  );
};
export default ListeningModuleSec3;