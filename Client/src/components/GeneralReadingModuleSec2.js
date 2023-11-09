import React, { useState } from 'react';
import './GeneralReadingModuleSec2.css';

import { Link } from 'react-router-dom';


const GeneralReadingModuleSec2 = () => {
  const [answers, setAnswers] = useState({
    question15: '',
    question16: '',
    question17: '',
    question18: '',
    question19: '',
    question20: '',
    question21: '',
    question22: '',
    question23: '',
    question24: '',
    question25: '',
    question26: '',
    question27: '',
    question28: '',
  });

  const handleChange = (event, question) => {
    const { value } = event.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: value,
    }));
  };
  const [score, setScore] = useState(null);
  const handleCheckAnswers = () => {
    const correctAnswers = {
        question15: 'vi',
        question16: 'viii',
        question17: 'v',
        question18: 'x',
        question19: 'ii',
        question20: 'i',
        question21: 'iii',
        question22: 'final written warning',
        question23: 'formal appeal hearing',
        question24: 'B',
        question25: 'E',
        question26: 'D',
        question27: 'C',
        question28: 'A',
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
    <div className='Reading-test-container'>
      <h1 className="test-title">IELTS General Reading: Section 2</h1>
      
      <div className='general_question_description'>
      This is the second section of the IELTS General Training Reading test. It contains two pieces of writing. Read each piece and answer the questions.
        <br></br>
        <h3> Questions 15 - 21 </h3>
        Read the following text and answer questions 15-21.
        <br></br>
        
        <br></br> <h3> Beneficial work practices for the keyboard operator </h3>
        <ul>
        <li> A) Sensible work practices are an important factor in the prevention of muscular fatigue; discomfort or pain in the arms, neck, hands or back; or eye strain which can be associated with constant or regular work at a keyboard and visual display unit (VDU).</li>
        <li>B) It is vital that the employer pays attention to the physical setting such as workplace design, the office environment, and placement of monitors as well as the organisation of the work and individual work habits. Operators must be able to recognise work-related health problems and be given the opportunity to participate in the management of these. Operators should take note of and follow the preventive measures outlined below.</li>
  
        <li>C) The typist must be comfortably accommodated in a chair that is adjustable for height with a back rest that is also easily adjustable both for angle and height. The back rest and sitting ledge (with a curved edge) should preferably be cloth-covered to avoid excessive perspiration.</li>
        
        <li>D) When the keyboard operator is working from a paper file or manuscript, it should be at the same distance from the eyes as the screen. The most convenient position can be found by using some sort of holder. Individual arrangement will vary according to whether the operator spends more time looking at the VDU or the paper – whichever the eyes are focused on for the majority of time should be put directly in front of the operator.</li>
        
        <li>E) While keying, it is advisable to have frequent but short pauses of around thirty to sixty seconds to proofread. When doing this, relax your hands. After you have been keying for sixty minutes, you should have a ten minute change of activity. During this spell it is important that you do not remain seated but stand up or walk around. This period could be profitably used to do filing or collect and deliver documents.</li>
        
        <li>F) Generally, the best position for a VDU is at right angles to the window. If this is not possible then glare from the window can be controlled by blinds, curtains or movable screens. Keep the face of the VDU vertical to avoid glare from overhead lighting.</li>
        
        <li>G) Unsatisfactory work practices or working conditions may result in aches or pain. Symptoms should be reported to your supervisor early on so that the cause of the trouble can be corrected and the operator should seek medical attention.</li>

                
        </ul>
        The text above has seven sections, A–G. Choose the correct heading for each section from the list of headings below.
        <br></br>
        Select the correct number, i–x for questions 15–21.
      </div>
      <div className="general-questions-container">
       <h3>List of headings </h3>
        <p>i. How can reflection problems be avoided?</p>
        <p>ii. How long should I work without a break?</p>
        <p>iii. What if I experience any problems?</p>
        <p>iv. When is the best time to do filing chores?</p>
        <p>v. What makes a good seat?</p>
        <p>vi. What are the common health problems?</p>
        <p>vii. What is the best kind of lighting to have?</p>
        <p>viii. What are the roles of management and workers?</p>
        <p>ix. Why does a VDU create eye fatigue?</p>
        <p>x. Where should I place the documents?</p>
        <h3>Questions</h3>
        <p>15. Section A <input type="text" value={answers.question15} onChange={e => handleChange(e, 'question15')} /></p>
        <p>16. Section B <input type="text" value={answers.question16} onChange={e => handleChange(e, 'question16')} /></p>
        <p>17. Section C <input type="text" value={answers.question17} onChange={e => handleChange(e, 'question17')} /></p>
        <p>18. Section D <input type="text" value={answers.question18} onChange={e => handleChange(e, 'question18')} /></p>
        <p>19. Section E <input type="text" value={answers.question19} onChange={e => handleChange(e, 'question19')} /></p>
        <p>20. Section F <input type="text" value={answers.question20} onChange={e => handleChange(e, 'question20')} /></p>
        <p>21. Section G <input type="text" value={answers.question21} onChange={e => handleChange(e, 'question21')} /></p>

      </div>

      <div className='general_question_description'>
      <p>  
      <h3>Questions 22–28 </h3>
      <br></br> Read the text below and answer questions 22–28.

      <br></br> <h3> Workplace dismissals </h3>

      <br></br> Before the dismissal
      <br></br>
      <br></br> If an employer wants to dismiss an employee, there is a process to be followed. Instances of minor misconduct and poor performance must first be addressed through some preliminary steps. 
      
      <br></br>
      <br></br> Firstly, you should be given an improvement note. This will explain the problem, outline any necessary changes and offer some assistance in correcting the situation. Then, if your employer does not think your performance has improved, you may be given a written warning. The last step is called a final written warning which will inform you that you will be dismissed unless there are improvements in performance.  If there is no improvement, your employer can begin the dismissal procedure.
      <br></br>
      <br></br> The dismissal procedure begins with a letter from the employer setting out the charges made against the employee. The employee will be invited to a meeting to discuss these accusations. If the employee denies the charges, he is given the opportunity to appear at a formal appeal hearing in front of a different manager. After this, a decision is made as to whether the employee will be let go or not. 
      
      <br></br> Dismissals Of the various types of dismissal, a fair dismissal is the best kind if an employer wants an employee out of the workplace. A fair dismissal is legally and contractually strong and it means all the necessary procedures have been correctly followed. In cases where an employee’s misconduct has been very serious, however, an employer may not have to follow all of these procedures. If the employer can prove that the employee’s behaviour was illegal, dangerous or severely wrong, the employee can be dismissed immediately: a procedure known as summary dismissal.Cost $250
      <br></br>
      <br></br> Sometimes a dismissal is not considered to have taken place fairly. One of these types is wrongful dismissal and involves a breach of contract by the employer. This could involve dismissing an employee without notice or without following proper disciplinary and dismissal procedures. Another type, unfair dismissal, is when an employee is sacked without good cause. 
      <br></br>
      <br></br> There is another kind of dismissal, known as constructive dismissal, which is slightly peculiar because the employee is not actually openly dismissed by the employer. In this case the employee is forced into resigning by an employer who tries to make significant changes to the original contract. This could mean an employee might have to work night shifts after originally signing on for day work, or he could be made to work in dangerous conditions.
     
      
      <br></br>  <h3> Questions 22 and 23 </h3>
      <br></br> Complete the sentences below. Choose no more than three words from the text for each answer.
      <br></br>
      
      </p>
      </div>
      <div className= "general-questions-container">
        <h3> Questions </h3>
        <p>22. If an employee receives a <input type="text" value={answers.question22} onChange={e => handleChange(e, 'question22')} />, this means he will lose his job if his work does not get better.</p>
        <p>23. If an employee does not accept the reasons for his dismissal, a <input type="text" value={answers.question23} onChange={e => handleChange(e, 'question23')} /> can be arranged.</p>
      </div>
      <div className='general_question_description'>
        <h3>Questions 24–28</h3>
        <p>Look at the following descriptions (Questions 24–28) and the list of terms in the box below. Match each description with the correct term A–E. Choose the appropriate letter A–E for questions 24–28.</p>
        <ul>
        <li>A =	Fair dismissal</li>
        <li>B =	Summary dismissal</li>
        <li>C =	Unfair dismissal</li>
        <li>D =	Wrongful dismissal</li>
        <li>E =	Constructive dismissal</li>
        </ul>

      </div>          

      <div className='general-questions-container'>
      <div>
        <p>24. An employee is asked to leave work straight away because he has done something really bad. <input type="text" value={answers.question24} onChange={e => handleChange(e, 'question24')} /></p>
        <p>25. An employee is pressured to leave his job unless he accepts conditions that are very different from those agreed to in the beginning. <input type="text" value={answers.question25} onChange={e => handleChange(e, 'question25')} /></p>
        <p>26. An employer gets rid of an employee without keeping to conditions in the contract. <input type="text" value={answers.question26} onChange={e => handleChange(e, 'question26')} /></p>
        <p>27. The reason for an employee’s dismissal is not considered good enough. <input type="text" value={answers.question27} onChange={e => handleChange(e, 'question27')} /></p>
        <p>28. The reasons for an employee’s dismissal are acceptable by law and the terms of the employment contract. <input type="text" value={answers.question28} onChange={e => handleChange(e, 'question28')} /></p>
      </div>

      </div>
      <button className="check-button" onClick={handleCheckAnswers}>Check Answers</button>
      <Link to= {"/GeneralReadingModuleSec3"} className="next_button">Move to next section</Link>
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

export default GeneralReadingModuleSec2;
