import React, { useState } from 'react';
import './GeneralReadingModuleSec3.css';



const GeneralReadingModuleSec3 = () => {
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
      question29: 'C',
      question30: 'E',
      question31: 'B',
      question32: 'H',
      question33: 'A',
      question34: 'F',
      question35: 'D',
      question36: 'functional strength',
      question37: 'mass monsters',
      question38: 'injuries',
      question39: 'weight training',
      question40: 'cardiovascular health',
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
      <h1 className="test-title">IELTS General Reading: Section 3</h1>
      
      <div className='general_question_description'>
      
        <p>The world’s oldest form of resistance training</p>

        <p>A) From the very first caveman to scale a tree or hang from a cliff face, to the mighty armies of the Greco-Roman empires and the gymnasiums of modern American high schools, calisthenics has endured and thrived because of its simplicity and utility. Unlike strength training which involves weights, machines or resistance bands, calisthenics uses only the body’s own weight for physical development.</p>

        <p>B) Calisthenics enters the historical record at around 480 B.C., with Herodotus’ account of the Battle of Thermopolylae. Herodotus reported that, prior to the battle, the god-king Xerxes sent a scout party to spy on his Spartan enemies. The scouts informed Xerxes that the Spartans, under the leadership of King Leonidas, were practicing some kind of bizarre, synchronized movements akin to a tribal dance. Xerxes was greatly amused. His own army was comprised of over 120,000 men, while the Spartans had just 300. Leonidas was informed that he must retreat or face annihilation. The Spartans did not retreat, however, and in the ensuing battle, they managed to hold Xerxes’ enormous army at bay for some time until reinforcements arrived. It turns out their tribal dance was not a superstitious ritual but a form of calisthenics by which they were building awe-inspiring physical strength and endurance.</p>

        <p>C) The Greeks took calisthenics seriously not only as a form of military discipline and strength but also as an artistic expression of movement and an aesthetically ideal physique. Indeed, the term calisthenics itself is derived from the Greek words for beauty and strength. We know from historical records and images from pottery, mosaics, and sculptures of the period that the ancient Olympians took calisthenics training seriously. They were greatly admired – and still are, today – for their combination of athleticism and physical beauty. You may have heard a friend whimsically sigh and mention that someone ‘has the body of a Greek god’. This expression has traveled through centuries and continents, and the source of this envy and admiration is the calisthenics method.</p>

        <p>D) Calisthenics experienced its second golden age in the 1800s. This century saw the birth of gymnastics, an organized sport that uses a range of bars, rings, vaulting horses, and balancing beams to display physical prowess. This period is also when the phenomena of strongmen developed. These were people of astounding physical strength and development who forged nomadic careers by demonstrating outlandish feats of strength to stunned populations. Most of these men trained using hand balancing and horizontal bars, as modern weight machines had not yet been invented.</p>

        <p>E) In the 1950s, Angelo Siciliano – who went by the stage name Charles Atlas – was crowned “The World’s Most Perfectly Developed Man”. Atlas’s own approach stemmed from traditional calisthenics, and through a series of mail-order comic books, he taught these methods to hundreds of thousands of children and young adults through the 1960s and 1970s. But Atlas was the last of a dying breed. The tides were turning, fitness methods were drifting away from calisthenics, and no widely-regarded proponent of the method would ever succeed him.</p>

        <p>F) In the 1960s and 1970s calisthenics and the goal of functional strength combined with physical beauty were replaced by an emphasis on huge muscles at any cost. This became the sport of bodybuilding. Although bodybuilding’s pioneers were drawn from the calisthenics tradition, the sole goal soon became an increase in muscle size. Bodybuilding icons, people such as Arnold Schwarzenegger and Sergio Oliva were called mass monsters because of their imposing physiques. Physical development of this nature was only attainable through the use of anabolic steroids, synthetic hormones which boosted muscle development while harming overall health. These body builders also relied on free weights and machines, which allowed them to target and bloat the size of individual muscles rather than develop a naturally proportioned body. Calisthenics, with its emphasis on physical beauty and a balance in proportions, had little to offer the mass monsters.</p>

        <p>G) In this “bigger is better” climate, calisthenics was relegated to groups perceived to be vulnerable, such as women, people recuperating from injuries, and school students. Although some of the strongest and most physically developed human beings ever to have lived acquired their abilities through the use of sophisticated calisthenics, a great deal of this knowledge was discarded, and the method was reduced to nothing more than an easily accessible and readily available activity. Those who mastered the rudimentary skills of calisthenics could expect to graduate to weight training rather than advanced calisthenics.</p>

        <p>H) In recent years, however, fitness trends have been shifting back toward the use of calisthenics. Bodybuilding approaches that promote excessive muscle development frequently lead to joint pain, injuries, unbalanced physiques, and weak cardiovascular health. As a result, many of the newest and most popular gyms and programs emphasize calisthenics-based methods instead. Modern practices often combine elements from a number of related traditions such as yoga, Pilates, kettlebell training, gymnastics, and traditional Greco-Roman calisthenics. Many people are keen to recover the original Greek vision of physical beauty and strength and harmony of the mind-body connection.</p>
    
      </div>
      <div className="general-questions-container">
       <h3>Questions 29–35
       <br></br> The text has eight paragraphs, A–H. Which paragraph contains the following information? Choose the correct letter for questions 29–35.</h3> 
        <p>29) the origin of the word ‘calisthenics’ <input type="text" value={answers.question29} onChange={e => handleChange(e, 'question29')} /></p>
        <p>30) the last popular supporter of calisthenics <input type="text" value={answers.question30} onChange={e => handleChange(e, 'question30')} /></p>
        <p>31) the first use of calisthenics as a training method <input type="text" value={answers.question31} onChange={e => handleChange(e, 'question31')} /></p>
        <p>32) a multidisciplinary approach to all-round health and strength <input type="text" value={answers.question32} onChange={e => handleChange(e, 'question32')} /></p>
        <p>33) reasons for the survival of calisthenics throughout the ages <input type="text" value={answers.question33} onChange={e => handleChange(e, 'question33')} /></p>
        <p>34) medical substance to increase muscle mass and strength <input type="text" value={answers.question34} onChange={e => handleChange(e, 'question34')} /></p>
        <p>35) a reference to traveling showmen who displayed their strength for audiences <input type="text" value={answers.question35} onChange={e => handleChange(e, 'question35')} /></p>
      </div>

      <div className='general_question_description'>
      <p>  
      <h3>Questions 36-40 </h3>
      <br></br> Complete the summary below. Choose no more than two words from the text for each answer.
      </p>
      </div>
      <div className= "general-questions-container">
      <p> <input type="text" value={answers.question36} onChange={e => handleChange(e, 'question36')} /> or having an attractive-looking body. The first people to take up this new sport of body building had a background in calisthenics but the most famous practitioners became known as <input type="text" value={answers.question37} onChange={e => handleChange(e, 'question37')} /> on account of the impressive size of their muscles. Drugs and mechanical devices were used to develop individual muscles to a monstrous size.</p>
      <p>Calisthenics then became the domain of ‘weaker’ people: females, children and those recovering from <input type="text" value={answers.question38} onChange={e => handleChange(e, 'question38')} /> . Much of the advanced knowledge about calisthenics was lost and the method was subsequently downgraded to the status of a simple, user-friendly activity. Once a person became skilled at this, he would progress to <input type="text" value={answers.question39} onChange={e => handleChange(e, 'question39')} />.</p>
      <p>Currently a revival of calisthenics is under way as extreme muscle building can harm the body leaving it sore, out of balance, and in poor <input type="text" value={answers.question40} onChange={e => handleChange(e, 'question40')} /> .</p>

      </div>
      <button className="check-button" onClick={handleCheckAnswers}>Check Answers</button>
      
      <div className="result-container">
        {score !== null && (
          <>
            <h2>Results</h2>
            <p>You got {score} questions correct. </p>
          </>
        )}
      </div>
    </div>
  );

};

export default GeneralReadingModuleSec3;
