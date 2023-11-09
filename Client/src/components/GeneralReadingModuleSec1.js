import React, { useState } from 'react';
import './GeneralReadingModuleSec1.css';

import { Link } from 'react-router-dom';


const GeneralReadingModuleSec1 = () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
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
      question1: 'send a messenger',
      question2: 'short bell rings',
      question3: 'nearest staircase/stairs',
      question4: '(paved) quadrangle (area)/quad',
      question5: '(all) support staff/personnel',
      question6: 'the (class) roll',
      question7: 'all clear (signal)',
      question8: '(their) home-room groups',
      question9: 'TRUE',
      question10: 'FALSE',
      question11: 'NOT GIVEN',
      question12: 'NOT GIVEN',
      question13: 'FALSE',
      question14: 'TRUE',
    };
    
  
    let score = 0;
  

    for (const question in answers) {
      if (answers[question] === correctAnswers[question]) {
        score++;
      }
    }
    
    let userScore = 0;

    for (const question in answers) {
      if (answers[question] === correctAnswers[question]) {
        userScore++;
      }
    }

    setScore(userScore);
  };

  return (
    <div className='Reading-test-container'>
      <h1 className="test-title">IELTS General Reading: Section 1</h1>
      
      <div className='general_question_description'>
        This is the first section of the IELTS General Training Reading test. It contains two pieces of writing. Read each piece and answer the questions.
        <br></br>
        <h3> Questions 1 - 8 </h3>
        Read the following text and answer questions 1-8.
        <br></br>
        Emergency procedures
        
        <br></br>Revised July 2011
        <br></br>
        <br></br>This applies to all persons on the school campus:
        <br></br>
        <br></br>In cases of emergency (e.g. fire), find the nearest teacher who will send a messenger at full speed to the Office or inform the Office via phone ext. 99.

        <br></br> <h3> Procedure for evacuation </h3>
        <ul>
        <li> Warning of an emergency evacuation will be marked by a number of short bell rings. (In the event of a power failure, this may be a hand-held bell or siren.) </li>
        <li> All class work will cease immediately. </li>
        <li> Students will leave their bags, books and other possessions where they are. </li>
        <li> Teachers will take the class rolls. </li>
        <li> Classes will vacate the premises using the nearest staircase. If these stairs are inaccessible, use the nearest alternative staircase. Do not use the lifts. Do not run. </li>
        <li> Each class, under the teacher’s supervision, will move in a brisk, orderly fashion to the paved quadrangle area adjacent to the car park. </li>
        <li> All support staff will do the same. </li>
        <li> The Marshalling Supervisor, Ms Randall, will be wearing a red cap and she will be waiting there with the master timetable and staff list in her possession. </li>
        <li> Students assemble in the quad with their teacher at the time of evacuation. The teacher will do a head count and check the roll. </li>
        <li> Each teacher sends a student to the Supervisor to report whether all students have been accounted for. After checking, students will sit down (in the event of rain or wet pavement they may remain standing). </li>
        <li> The Supervisor will inform the Office when all staff and students have been accounted for. </li>
        <li> All students, teaching staff and support personnel remain in the evacuation area until the All Clear signal is given. </li>
        <li> The All Clear will be a long bell ring or three blasts on the siren. </li>
        <li> Students will return to class in an orderly manner under teacher guidance. </li>
        <li> In the event of an emergency occurring during lunch or breaks, students are to assemble in their home-room groups in the quad and await their home-room teacher.</li>
        </ul>
        Questions 1-8
        Complete the sentences below. Choose no more than three words from the text for each answer.
      </div>
      <div className="general-questions-container">
      <p>1. In an emergency, a teacher will either phone the office or <input type="text" value={answers.question1} onChange={e => handleChange(e, 'question1')} />.</p>
      <p>2. The signal for evacuation will normally be several <input type="text" value={answers.question2} onChange={e => handleChange(e, 'question2')} />.</p>
      <p>3. If possible, students should leave the building by the <input type="text" value={answers.question3} onChange={e => handleChange(e, 'question3')} />.</p>
      <p>4. They then walk quickly to the <input type="text" value={answers.question4} onChange={e => handleChange(e, 'question4')} />.</p>
      <p>5. <input type="text" value={answers.question5} onChange={e => handleChange(e, 'question5')} /> will join the teachers and students in the quad.</p>
      <p>6. Each class teacher will count up his or her students and mark <input type="text" value={answers.question6} onChange={e => handleChange(e, 'question6')} />.</p>
      <p>7. After the <input type="text" value={answers.question7} onChange={e => handleChange(e, 'question7')} /> , everyone may return to class.</p>
      <p>8. If there is an emergency at lunchtime, students gather in the quad in <input type="text" value={answers.question8} onChange={e => handleChange(e, 'question8')} /> and wait for their teacher.</p>
      </div>

      <div className='general_question_description'>
      <p>  
      <h3>Questions 9-14 </h3>
      <br></br> Read the text below and answer questions 9–14.

      <br></br> <h3> Community Education </h3>

      <br></br> Short Courses:  Business

      <br></br> Business Basics
      Gain foundation knowledge for employment in an accounts position with bookkeeping and business basics through to intermediate level; suitable for anyone requiring knowledge from the ground up.
      <br></br> Code B/ED011
      <br></br> 16th or 24th April 9am–4pm
      <br></br> Cost $420
      <br></br>
      <br></br> Bookkeeping
      <br></br>
      <br></br> This course will provide students with a comprehensive understanding of bookkeeping and a great deal of hands-on experience
      <br></br> Code B/ED020
      <br></br> 19th April 9am–2.30pm (one session only so advance bookings essential)
      <br></br> Cost $250
      <br></br>
      <br></br> New Enterprise Module 
      <br></br>
      <br></br> Understand company structures, tax rates, deductions, employer obligations, profit and loss statements, GST and budgeting for tax.
      <br></br> Code B/ED030
      <br></br> 15th or 27th May 6pm–9pm
      <br></br> Cost $105
      <br></br>
      <br></br> Social Networking – the Latest Marketing Tool 
      <br></br>
      <br></br> This broad overview gives you the opportunity to analyse what web technologies are available and how they can benefit your organisation.
      <br></br> Code B/ED033
      <br></br> 1st or 8th or 15th June 6pm–9pm
      <br></br> Cost $95
      <br></br>
      <br></br> Communication 
      <br></br>
      <br></br> Take the fear out of talking to large gatherings of people. Gain the public-speaking experience that will empower you with better communication skills and confidence.
      <br></br> Code B/ED401
      <br></br> 12th or 13th or 14th July 6pm–9pm
      <br></br> Cost $90
      <br></br>
      <br></br>  Questions 9-14
      <br></br> Do the following statements agree with the information given in the text? Answer True, False or Not given to questions 9–14.
      <br></br>
      <br></br> <h3> True:	if the statement agrees with the information </h3>
      <br></br> <h3> False:	if the statement contradicts the information </h3>
      <br></br> <h3> Not given:	if there is no information on this </h3>
      </p>
      </div>
      <div className= "general-questions-container">
      <p>9. Business Basics is appropriate for beginners. <input type="text" value={answers.question9} onChange={e => handleChange(e, 'question9')} /> </p>
      <p>10. Bookkeeping has no practical component. <input type="text" value={answers.question10} onChange={e => handleChange(e, 'question10')} /> </p>
      <p>11. Bookkeeping is intended for advanced students only. <input type="text" value={answers.question11} onChange={e => handleChange(e, 'question11')} /> </p>
      <p>12. The New Enterprise Module can help your business become more profitable. <input type="text" value={answers.question12} onChange={e => handleChange(e, 'question12')} /> </p>
      <p>13. Social Networking focuses on a specific website to help your business succeed. <input type="text" value={answers.question13} onChange={e => handleChange(e, 'question13')} /> </p>
      <p>14. The Communication class involves speaking in front of an audience. <input type="text" value={answers.question14} onChange={e => handleChange(e, 'question14')} /> </p>

      </div>
      <button className="check-button" onClick={handleCheckAnswers}>Check Answers</button>
      <Link to= {"/GeneralReadingModuleSec2"} className="next_button">Move to next section</Link>
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

export default GeneralReadingModuleSec1;
