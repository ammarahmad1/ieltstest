import React from 'react';
import './AcademicReadingModule1.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import sharkImage from './images/shark-image.png'

const AcademicReadingModule1 = () => {

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
        question11: '',
        question12: '',
        question13: '',
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
            question1: 'C',
            question2: 'G',
            question3: 'B',
            question4: 'A',
            question5: 'H',
            question6: 'D',
            question7: 'respiratory movements/signals',
            question8: 'tail',
            question9: 'electric currents',
            question10: 'olfactory organs',
            question11: 'electric signals',
            question12: 'sinewy muscle',
            question13: 'electric field',
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
    <div>
    <div className="reading-section-container">
      <p>You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.</p>  
      <h2 className="section-title">Electroreception</h2>
      <div className="paragraph">
        <p>
          A.Open your eyes in sea water and it is difficult to see much more
          than a murky, bleary green colour. Sounds, too, are garbled and
          difficult to comprehend. Without specialised equipment humans would
          be lost in these deep sea habitats, so how do fish make it seem so
          easy? Much of this is due to a biological phenomenon known as
          electroreception – the ability to perceive and act upon electrical
          stimuli as part of the overall senses. This ability is only found in
          aquatic or amphibious species because water is an efficient
          conductor of electricity.
        </p>
      </div>
      <div className="paragraph">
        <p>
          B.Electroreception comes in two variants. While all animals (including
          humans) generate electric signals, because they are emitted by the
          nervous system, some animals have the ability – known as passive
          electroreception – to receive and decode electric signals generated
          by other animals in order to sense their location.
        </p>
      </div>
      <div className="paragraph">
        <p>
          C.Other creatures can go further still, however. Animals with active
          electroreception possess bodily organs that generate special
          electric signals on cue. These can be used for mating signals and
          territorial displays as well as locating objects in the water. Active
          electroreceptors can differentiate between the various resistances
          that their electrical currents encounter. This can help them identify
          whether another creature is prey, predator or something that is best
          left alone. Active electroreception has a range of about one body
          length – usually just enough to give its host time to get out of the
          way or go in for the kill.
        </p>
      </div>


        <div className="paragraph">
        <p>
            D.One fascinating use of active electroreception – known as the Jamming Avoidance
            Response mechanism – has been observed between members of some species known as
            the weakly electric fish. When two such electric fish meet in the ocean using
            the same frequency, each fish will then shift the frequency of its discharge so
            that they are transmitting on different frequencies. Doing so prevents their
            electroreception faculties from becoming jammed. Long before citizens’ band radio
            users first had to yell “Get off my frequency!” at hapless novices cluttering
            the air waves, at least one species had found a way to peacefully and quickly
            resolve this type of dispute.
        </p>
        </div>

        <div className="paragraph">
        <p>
            E.Electroreception can also play an important role in animal defenses. Rays are
            one such example. Young ray embryos develop inside egg cases that are attached
            to the sea bed. The embryos keep their tails in constant motion so as to pump
            water and allow them to breathe through the egg’s casing. If the embryo’s
            electroreceptors detect the presence of a predatory fish in the vicinity,
            however, the embryo stops moving (and in so doing ceases transmitting electric
            currents) until the fish has moved on. Because marine life of various types is
            often traveling past, the embryo has evolved only to react to signals that are
            characteristic of the respiratory movements of potential predators such as sharks.
        </p>
        </div>

        <div className="paragraph">
        <p>
            F.Many people fear swimming in the ocean because of sharks. In some respects,
            this concern is well grounded – humans are poorly equipped when it comes to
            electroreceptive defense mechanisms. Sharks, meanwhile, hunt with extraordinary
            precision. They initially lock onto their prey through a keen sense of smell
            (two-thirds of a shark’s brain is devoted entirely to its olfactory organs). As
            the shark reaches proximity to its prey, it tunes into electric signals that
            ensure a precise strike on its target; this sense is so strong that the shark
            even attacks blind by letting its eyes recede for protection.
        </p>
        </div>

        <div className="paragraph">
        <p>
            G.Normally, when humans are attacked it is purely by accident. Since sharks cannot
            detect from electroreception whether or not something will satisfy their tastes,
            they tend to “try before they buy”, taking one or two bites and then assessing
            the results (our sinewy muscle does not compare well with plumper, softer prey
            such as seals). Repeat attacks are highly likely once a human is bleeding,
            however; the force of the electric field is heightened by salt in the blood
            which creates the perfect setting for a feeding frenzy. In areas where shark
            attacks on humans are likely to occur, scientists are exploring ways to create
            artificial electroreceptors that would disorient the sharks and repel them from
            swimming beaches.
        </p>
        </div>

        <div className="paragraph">
        <p>
            H. There is much that we do not yet know concerning how electroreception functions.
            Although researchers have documented how electroreception alters hunting, defense,
            and communication systems through observation, the exact neurological processes
            that encode and decode this information are unclear. Scientists are also exploring
            the role electroreception plays in navigation. Some have proposed that saltwater
            and magnetic fields from the Earth’s core may interact to form electrical currents
            that sharks use for migratory purposes.
        </p>
        </div>
    </div>
    <div className="questions-container">
    <p>
      1. how electroreception can be used to help fish reproduce
      <input
        type="text"
        className="question-input"
        value={answers.question1}
        onChange={e => handleChange(e, 'question1')}
      />
    </p>
    <p>
      2. a possible use for electroreception that will benefit humans
      <input
        type="text"
        className="question-input"
        value={answers.question2}
        onChange={e => handleChange(e, 'question2')}
      />
    </p>
    <p>
      3. the term for the capacity which enables an animal to pick up but not send out electrical signals
      <input
        type="text"
        className="question-input"
        value={answers.question3}
        onChange={e => handleChange(e, 'question3')}
      />
    </p>
    <p>
      4. why only creatures that live in or near water have electroreceptive abilities
      <input
        type="text"
        className="question-input"
        value={answers.question4}
        onChange={e => handleChange(e, 'question4')}
      />
    </p>
    <p>
      5. how electroreception might help creatures find their way over long distances
      <input
        type="text"
        className="question-input"
        value={answers.question5}
        onChange={e => handleChange(e, 'question5')}
      />
    </p>
    <p>
      6. a description of how some fish can avoid disrupting each other’s electric signals
      <input
        type="text"
        className="question-input"
        value={answers.question6}
        onChange={e => handleChange(e, 'question6')}
      />
    </p>

  </div>
  <div className="reading-section-container">
    <p>Label the diagram. <br></br> Choose NO MORE THAN TWO WORDS from the passage for each answer.</p>
    </div>
    
    <div className="questions-container">
  <p>
    7. Shark’s <input
      type="text"
      className="question-input"
      value={answers.question7}
      onChange={e => handleChange(e, 'question7')}
    /> alert the young ray to its presence.
  </p>
  <p>
    8. Embryo moves its <input
      type="text"
      className="question-input"
      value={answers.question8}
      onChange={e => handleChange(e, 'question8')}
    /> in order to breathe.
  </p>
  <p>
    9. Embryo stops sending <input
      type="text"
      className="question-input"
      value={answers.question9}
      onChange={e => handleChange(e, 'question9')}
    /> when a predator is close by.
  </p>
</div>
<img src={sharkImage} alt="Graph" className="shark-image" />
<div className='reading-section-container'>
     <p>Questions 10–13
<br></br> Complete the summary below.

<br></br> Choose NO MORE THAN THREE words from the passage for each answer.

<br></br> </p>           
</div>
<div className="questions-container">
  <p>
    A shark is a very effective hunter. Firstly, it uses its <input
      type="text"
      className="question-input"
      value={answers.question10}
      onChange={e => handleChange(e, 'question10')}
    /> to smell its target. When the shark gets close, it uses <input
      type="text"
      className="question-input"
      value={answers.question11}
      onChange={e => handleChange(e, 'question11')}
    /> to guide it toward an accurate attack. Within the final few feet, the shark rolls its eyes back into its head. Humans are not popular food sources for most sharks due to their <input
      type="text"
      className="question-input"
      value={answers.question12}
      onChange={e => handleChange(e, 'question12')}
    />. Nevertheless, once a shark has bitten a human, a repeat attack is highly possible as salt from the blood increases the intensity of the <input
      type="text"
      className="question-input"
      value={answers.question13}
      onChange={e => handleChange(e, 'question13')}
    />.
  </p>
</div>
<button className="check-button" onClick={handleCheckAnswers}>Check Answers</button>
<Link to= {"/academicreadingmodule2"} className="next_button">Move to next section</Link>

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

export default AcademicReadingModule1;
