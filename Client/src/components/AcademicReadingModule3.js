import React from 'react';
import './AcademicReadingModule3.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import quepic from './images/academicreadingmodule3.png'


const AcademicReadingModule3 = () => {
  const [answers, setAnswers] = useState({
    question28: '',
    question29: '',
    question30: '',
    question31: '',
    question32: '',
    question33: '',
    question34: '',
    question35: '',
    question36: '',
    question37: '',
    question38: '',
    question39: '',

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
        question28: 'FALSE',
        question29: 'TRUE',
        question30: 'NOT GIVEN',
        question31: 'TRUE',
        question32: 'TRUE',
        question33: 'FALSE',
        question34: 'past actions',
        question35: 'inconsistencies',
        question36: 'Hugh Everett',
        question37: 'alternative pathway',
        question38: 'non-existence theory',
        question39: 'historical identity',
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
        <div className='module-3-reading-academic'>
            <h2>Academic Reading - section 3 practice test</h2>
            <p>This is the third section of your IELTS Academic Reading test. You should spend about 20 minutes on Questions 28–39, which are based on Reading Passage 3 below.</p>
            <div className='reading-section-container'>
                <h2>Time Travel</h2>
                <p>Time travel took a small step away from science fiction and toward science recently when physicists discovered that sub-atomic particles known as neutrinos – progeny of the sun’s radioactive debris – can exceed the speed of light. The unassuming particle – it is electrically neutral, small but with a “non-zero mass” and able to penetrate the human form undetected – is on its way to becoming a rock star of the scientific world.

</p>
                <p>Researchers from the European Organisation for Nuclear Research (CERN) in Geneva sent the neutrinos hurtling through an underground corridor toward their colleagues at the Oscillation Project with Emulsion-Tracing Apparatus (OPERA) team 730 kilometres away in Gran Sasso, Italy. The neutrinos arrived promptly – so promptly, in fact, that they triggered what scientists are calling the unthinkable – that everything they have learnt, known or taught stemming from the last one hundred years of the physics discipline may need to be reconsidered. </p>

                <p>The issue at stake is a tiny segment of time – precisely sixty nanoseconds (which is sixty billionths of a second). This is how much faster than the speed of light the neutrinos managed to go in their underground travels and at a consistent rate (15,000 neutrinos were sent over three years). Even allowing for a margin of error of ten billionths of a second, this stands as proof that it is possible to race against light and win. The duration of the experiment also accounted for and ruled out any possible lunar effects or tidal bulges in the earth’s crust.</p>
            
                <p>Nevertheless, there’s plenty of reason to remain sceptical. According to Harvard University science historian Peter Galison, Einstein’s relativity theory has been “pushed harder than any theory in the history of the physical sciences”. Yet each prior challenge has come to no avail, and relativity has so far refused to buckle. </p>
            
                <p>So is time travel just around the corner? The prospect has certainly been wrenched much closer to the realm of possibility now that a major physical hurdle – the speed of light – has been cleared. If particles can travel faster than light, in theory travelling back in time is possible. How anyone harnesses that to some kind of helpful end is far beyond the scope of any modern technologies, however, and will be left to future generations to explore.</p>

                <p>Certainly, any prospective time travellers may have to overcome more physical and logical hurdles than merely overtaking the speed of light. One such problem, posited by René Barjavel in his 1943 text Le Voyageur Imprudent is the so-called grandfather paradox. Barjavel theorised that, if it were possible to go back in time, a time traveller could potentially kill his own grandfather. If this were to happen, however, the time traveller himself would not be born, which is already known to be true. In other words, there is a paradox in circumventing an already known future; time travel is able to facilitate past actions that mean time travel itself cannot occur. </p>
            
                <p>Other possible routes have been offered, though. For Igor Novikov, astrophysicist behind the 1980s’ theorem known as the self-consistency principle, time travel is possible within certain boundaries. Novikov argued that any event causing a paradox would have zero probability. It would be possible, however, to “affect” rather than “change” historical outcomes if travellers avoided all inconsistencies. Averting the sinking of the Titanic, for example, would revoke any future imperative to stop it from sinking – it would be impossible. Saving selected passengers from the water and replacing them with realistic corpses would not be impossible, however, as the historical record would not be altered in any way. </p>
            
                <p>A further possibility is that of parallel universes. Popularised by Bryce Seligman DeWitt in the 1960s (from the seminal formulation of Hugh Everett), the many-worlds interpretation holds that an alternative pathway for every conceivable occurrence actually exists. If we were to send someone back in time, we might therefore expect never to see him again – any alterations would divert that person down a new historical trajectory. </p>

                <p>A final hypothesis, one of unidentified provenance, reroutes itself quite efficiently around the grandfather paradox. Non-existence theory suggests exactly that – a person would quite simply never exist if they altered their ancestry in ways that obstructed their own birth. They would still exist in person upon returning to the present, but any chain reactions associated with their actions would not be registered. Their “historical identity” would be gone.</p>

                <p>So, will humans one day step across the same boundary that the neutrinos have? World-renowned astrophysicist Stephen Hawking believes that once spaceships can exceed the speed of light, humans could feasibly travel millions of years into the future in order to repopulate earth in the event of a forthcoming apocalypse.  This is because, as the spaceships accelerate into the future, time would slow down around them (Hawking concedes that bygone eras are off limits – this would violate the fundamental rule that cause comes before effect). </p>
            
                <p>Hawking is therefore reserved yet optimistic. “Time travel was once considered scientific heresy, and I used to avoid talking about it for fear of being labelled a crank. These days I’m not so cautious.”</p>
            </div>

            <div className='questions-container'>
                <h2>Questions 28–33</h2>
                <p>Do the following statements agree with the information given in Reading Passage 3?
                <br></br>
In boxes 28–33 on your answer sheet, write  </p>

<p>
            <h2>TRUE</h2> <p> if the statement agrees with the information</p>  
            <h2>FALSE</h2> <p> if the statement contradicts the information</p>  
            <h2>NOT GIVEN</h2> <p> if there is no information on this</p>  
          </p>  
          <p>28. It is unclear where neutrinos come from. <input type="text" className="question-input" value={answers.question28} onChange={e => handleChange(e, 'question28')} /></p>
            <p>29. Neutrinos can pass through a person’s body without causing harm. <input type="text" className="question-input" value={answers.question29} onChange={e => handleChange(e, 'question29')} /></p>
            <p>30. It took scientists between 50-70 nanoseconds to send the neutrinos from Geneva to Italy. <input type="text" className="question-input" value={answers.question30} onChange={e => handleChange(e, 'question30')} /></p>
            <p>31. Researchers accounted for effects the moon might have had on the experiment. <input type="text" className="question-input" value={answers.question31} onChange={e => handleChange(e, 'question31')} /></p>
            <p>32. The theory of relativity has often been called into question unsuccessfully. <input type="text" className="question-input" value={answers.question32} onChange={e => handleChange(e, 'question32')} /></p>
            <p>33. This experiment could soon lead to some practical uses for time travel. <input type="text" className="question-input" value={answers.question33} onChange={e => handleChange(e, 'question33')} /></p>
            <h2>Questions 34–39</h2>
            <p>
            Complete the table below.
            <br></br>
            Choose NO MORE THAN THREE WORDS from the passage for each answer.
            <br></br>
            Write your answers in boxes 34–39 on your answer sheet.
            </p>
            <img src={quepic} />
            <p>34.  <input type="text" className="question-input" value={answers.question34} onChange={e => handleChange(e, 'question34')} /></p>
            <p>35.  <input type="text" className="question-input" value={answers.question35} onChange={e => handleChange(e, 'question35')} /></p>
            <p>36.  <input type="text" className="question-input" value={answers.question36} onChange={e => handleChange(e, 'question36')} /></p>
            <p>37.  <input type="text" className="question-input" value={answers.question37} onChange={e => handleChange(e, 'question37')} /></p>
            <p>38.  <input type="text" className="question-input" value={answers.question38} onChange={e => handleChange(e, 'question38')} /></p>
            <p>39.  <input type="text" className="question-input" value={answers.question39} onChange={e => handleChange(e, 'question39')} /></p>
            </div>
            <button className="check-button" onClick={handleCheckAnswers}>Check Answers</button>
            {score !== null && (
          <>
            <h2>Results</h2>
            <p>You got {score} out of 10 questions correct. Make sure to remember your score. Click on Move to next section</p>
         
          </>
        )}
        </div>
    );
  };
  


export default AcademicReadingModule3;