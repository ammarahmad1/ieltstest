import React from 'react';
import './GeneralWritingIns.css'; 
import { Link } from 'react-router-dom';

const GeneralWritingInstructions = () => {
  return (
    <div className="general-writing-instructions">
      <h2>IELTS Writing Test Instructions</h2>
      <p>Welcome to the IELTS General Writing Test module. This section assesses your ability to write in response to various everyday situations or tasks. Please read the following instructions carefully before you begin:</p>

      <div className="task">
        <h3>Task 1: Letter Writing (20 minutes)</h3>
        <p>In Task 1, you are required to write a letter based on a given situation. You should spend about 20 minutes on this task. Your letter should be at least 150 words.</p>
        <h4>Types of Letters:</h4>
        <ol>
          <li>Formal Letter: Write a formal letter to a person or organization. You may be asked to make a complaint, request information, or apply for a job.</li>
          <li>Informal Letter: Write an informal letter to a friend, family member, or colleague. You may be asked to invite someone, express congratulations, or share personal experiences.</li>
        </ol>
      </div>

      <div className="task">
        <h3>Task 2: Essay Writing (40 minutes) (Coming Soon)</h3>
        <p>In Task 2, you are required to write an essay in response to a question or statement. You should spend about 40 minutes on this task. Your essay should be at least 250 words.</p>
        <h4>Types of Essays:</h4>
        <ol>
          <li>Opinion Essay: Express your opinion on a given topic. Provide reasons and examples to support your viewpoint.</li>
          <li>Discussion Essay: Discuss both sides of an issue or topic. Present arguments and counterarguments before expressing your opinion.</li>
        </ol>
        <Link to="/GeneralWritingTask1" className="start-button">Start Writing Test</Link>
      </div>
      

    </div>
  );
};

export default GeneralWritingInstructions;
