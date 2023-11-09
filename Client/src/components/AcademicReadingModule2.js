import React from 'react';
import './AcademicReadingModule2.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AcademicReadingModule2 = () => {
  const [answers, setAnswers] = useState({
    question14: '',
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
      question14: 'E',
      question15: 'J',
      question16: 'I',
      question17: 'D',
      question18: 'B',
      question19: 'TRUE',
      question20: 'NOT GIVEN',
      question21: 'FALSE',
      question22: 'TRUE',
      question23: 'NOT GIVEN',
      question24: 'TRUE',
      question25: 'TRUE',
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
        <h1 className="module-title">Fair Games?</h1>
        <p>
          For seventeen days every four years the world is briefly arrested by
          the captivating, dizzying spectacle of athleticism, ambition, pride, and
          celebration on display at the Summer Olympic Games. After the last weary
          spectators and competitors have returned home, however, host cities are
          often left awash in high debts and costly infrastructure maintenance.
          The staggering expenses involved in a successful Olympic bid are often
          assumed to be easily mitigated by tourist revenues and an increase in
          local employment, but more often than not host cities are short-changed
          and their taxpayers for generations to come are left settling the debt.
        </p>
        <p>
          Olympic extravagances begin with the application process. Bidding alone
          will set most cities back about $20 million, and while officially
          bidding only takes two years (for cities that make the shortlist), most
          cities can expect to exhaust a decade working on their bid from the
          moment it is initiated to the announcement of voting results from
          International Olympic Committee members. Aside from the financial costs
          of the bid alone, the process ties up real estate in prized urban
          locations until the outcome is known. This can cost local economies
          millions of dollars of lost revenue from private developers who could
          have made use of the land, and can also mean that particular urban
          quarters lose their vitality due to the vacant lots. All of this can be
          for nothing if a bidding city does not appease the whims of IOC members
          – private connections and opinions on government conduct often hold sway
          (Chicago’s 2012 bid is thought to have been undercut by tensions over
          U.S. foreign policy).
        </p>
        <p>
          Bidding costs do not compare, however, to the exorbitant bills that come
          with hosting the Olympic Games themselves. As is typical with
          large-scale, one-off projects, budgeting for the Olympics is a
          notoriously formidable task. Los Angelinos have only recently finished
          paying off their budget-breaking 1984 Olympics; Montreal is still in
          debt for its 1976 Games (to add insult to injury, Canada is the only
          host country to have failed to win a single gold medal during its own
          Olympics). The tradition of runaway expenses has persisted in recent
          years. London Olympics managers have admitted that their 2012 costs may
          increase ten times over their initial projections, leaving taxpayers 20
          billion pounds in the red.
        </p>
        <p>
          Hosting the Olympics is often understood to be an excellent way to
          update a city’s sporting infrastructure. The extensive demands of Olympic
          sports include aquatic complexes, equestrian circuits, shooting ranges,
          beach volleyball courts, and, of course, an 80,000 seat athletic stadium.
          Yet these demands are typically only necessary to accommodate a brief
          influx of athletes from around the world. Despite the enthusiasm many
          populations initially have for the development of world-class sporting
          complexes in their hometowns, these complexes typically fall into disuse
          after the Olympic fervor has waned. Even Australia, home to one of the
          world’s most sportive populations, has left its taxpayers footing a $32
          million-a-year bill for the maintenance of vacant facilities.
        </p>
        <p>
          Another major concern is that when civic infrastructure developments are
          undertaken in preparation for hosting the Olympics, these benefits
          accrue to a single metropolitan center (with the exception of some
          outlying areas that may get some revamped sports facilities). In
          countries with an expansive landmass, this means vast swathes of the
          population miss out entirely. Furthermore, since the International
          Olympic Committee favors prosperous “global” centers (the United Kingdom
          was told, after three failed bids from its provincial cities, that only
          London stood any real chance at winning), the improvement of public
          transport, roads, and communication links tends to concentrate in places
          already well-equipped with world-class infrastructures. Perpetually
          bypassing minor cities creates a cycle of disenfranchisement: these
          cities never get an injection of capital, they fail to become
          first-rate candidates, and they are constantly passed over in favor of
          more secure choices.
        </p>
        <p>
          Finally, there is no guarantee that an Olympics will be a popular
          success. The “feel good” factor that most proponents of Olympic bids
          extol (and that was no doubt driving the 90 to 100 percent approval rates
          of Parisians and Londoners for their cities’ respective 2012 bids) can be
          an elusive phenomenon, and one that is tied to that nation’s standing on
          the medal tables. This ephemeral thrill cannot compare to the years of
          disruptive construction projects and security fears that go into
          preparing for an Olympic Games, nor the decades of debt repayment that
          follow (Greece’s preparation for Athens 2004 famously deterred tourists
          from visiting the country due to widespread unease about congestion and
          disruption).
        </p>
        <p>
          There are feasible alternatives to the bloat, extravagance, and wasteful
          spending that comes with a modern Olympic Games. One option is to
          designate a permanent host city that would be re-designed or built from
          scratch especially for the task. Another is to extend the duration of
          the Olympics so that it becomes a festival of several months. Local
          businesses would enjoy the extra spending and congestion would ease
          substantially as competitors and spectators come and go according to
          their specific interests. Neither the “Olympic City” nor the extended
          length options really get to the heart of the issue, however. Stripping
          away ritual and decorum in favor of concentrating on athletic rivalry
          would be preferable.
        </p>
        <p>
          Failing that, the Olympics could simply be scrapped altogether.
          International competition could still be maintained through world
          championships in each discipline. Most of these events are already held
          on non-Olympic years anyway – the International Association of
          Athletics Federations, for example, has run a biennial World Athletics
          Championship since 1983 after members decided that using the Olympics
          for their championship was no longer sufficient. Events of this nature
          keep world-class competition alive without requiring Olympic-sized
          expenses.
        </p>
        
    </div>        
        <div className='questions-container'>
            <p>
            Questions 14–18 <br></br>
            Complete each sentence with the correct ending, A–K, below.
              <br></br>
            Write the correct letter, A–K, in boxes 14–18 on your answer sheet.
            </p>
            
            <div className="questions-container">
            <p>4. Bids to become a host city <input
              type="text"
              className="question-input"
              value={answers.question4}
              onChange={e => handleChange(e, 'question4')}
            /></p>
            <p>15. Personal relationships and political tensions <input
              type="text"
              className="question-input"
              value={answers.question15}
              onChange={e => handleChange(e, 'question15')}
            /></p>
            <p>16. Cost estimates for the Olympic Games <input
              type="text"
              className="question-input"
              value={answers.question16}
              onChange={e => handleChange(e, 'question16')}
            /></p>
            <p>17. Purpose-built sporting venues <input
              type="text"
              className="question-input"
              value={answers.question17}
              onChange={e => handleChange(e, 'question17')}
            /></p>
            <p>18. Urban developments associated with the Olympics <input
              type="text"
              className="question-input"
              value={answers.question18}
              onChange={e => handleChange(e, 'question18')}
            /></p>
          </div>
          <div className="questions-container">
          <p>A. often help smaller cities to develop basic infrastructure.</p>
          <p>B. tend to occur in areas where they are least needed.</p>
          <p>C. require profitable companies to be put out of business.</p>
          <p>D. are often never used again once the Games are over.</p>
          <p>E. can take up to ten years to complete.</p>
          <p>F. also satisfy needs of local citizens for first-rate sports facilities.</p>
          <p>G. is usually only successful when it is from a capital city.</p>
          <p>H. are closely related to how people feel emotionally about the Olympics.</p>
          <p>I. are known for being very inaccurate.</p>
          <p>J. often underlie the decisions of International Olympic Committee members.</p>
          <p>K. are holding back efforts to reform the Olympics.</p>
        </div>
        <div className="questions-container">
          <h2>Questions 19–25</h2>     
          <p>Do the following statements agree with the information given in Reading Passage 2?
            <br></br>
          In boxes 19–25 on your answer sheet, write  </p>
          <p>
            <h2>TRUE</h2> <p> if the statement agrees with the information</p>  
            <h2>FALSE</h2> <p> if the statement contradicts the information</p>  
            <h2>NOT GIVEN</h2> <p> if there is no information on this</p>  
          </p>  
        </div>
        <div className="questions-container">
          <p>19. Residents of host cities have little use for the full range of Olympic facilities. <input type="text" className="question-input" value={answers.question19} onChange={e => handleChange(e, 'question19')} /></p>
          <p>20. Australians have still not paid for the construction of Olympic sports facilities. <input type="text" className="question-input" value={answers.question20} onChange={e => handleChange(e, 'question20')} /></p>
          <p>21. People far beyond the host city can expect to benefit from improved infrastructure. <input type="text" className="question-input" value={answers.question21} onChange={e => handleChange(e, 'question21')} /></p>
          <p>22. It is difficult for small cities to win an Olympic bid. <input type="text" className="question-input" value={answers.question22} onChange={e => handleChange(e, 'question22')} /></p>
          <p>23. When a city makes an Olympic bid, a majority of its citizens usually want it to win. <input type="text" className="question-input" value={answers.question23} onChange={e => handleChange(e, 'question23')} /></p>
          <p>24. Whether or not people enjoy hosting the Olympics in their city depends on how athletes from their country perform in Olympic events. <input type="text" className="question-input" value={answers.question24} onChange={e => handleChange(e, 'question24')} /></p>
          <p>25. Fewer people than normal visited Greece during the run up to the Athens Olympics. <input type="text" className="question-input" value={answers.question25} onChange={e => handleChange(e, 'question25')} /></p>
        </div>

        <button className="check-button" onClick={handleCheckAnswers}>Check Answers</button>
        <Link to= {"/academicreadingmodule3"} className="next_button">Move to next section</Link>
        <div className="result-container">
        {score !== null && (
          <>
            <h2>Results</h2>
            <p>You got {score} out of 10 questions correct. Make sure to remember your score. Click on Move to next section</p>
         
          </>
        )}
      </div>
        </div>

    </div>
    );
  };
  


export default AcademicReadingModule2;