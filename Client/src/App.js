import React, { useEffect, useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Router,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './config/firebase-config';
import Signin from './components/Signin';
import General from './components/General.js';
import Academic from './components/Academic';
import AcademicReadingIns from './components/AcademicReadingIns';
import AcademicReadingModule1 from './components/AcademicReadingModule1';
import AcademicReadingModule2 from './components/AcademicReadingModule2';
import AcademicReadingModule3 from './components/AcademicReadingModule3';
import GeneralReadingModuleSec1 from './components/GeneralReadingModuleSec1';
import GeneralReadingModuleSec2 from './components/GeneralReadingModuleSec2';
import GeneralReadingModuleSec3 from './components/GeneralReadingModuleSec3';
import GeneralWritingIns from './components/GeneralWritingIns';
import GeneralWritingTask1 from './components/GeneralWritingTask1';
import GeneralListeningIns from './components/Glisteningins';
import GeneralReadingIns from './components/Greadingins';
import ListeningModuleSec1 from './components/ListeningModuleSec1';
import ListeningModuleSec2 from './components/ListeningModuleSec2';
import ListeningModuleSec3 from './components/ListeningModuleSec3';
import ListeningModuleSec4 from './components/ListeningModuleSec4';
import SpeakingModuleHoldingPage from './components/SpeakingModuleHoldingPage';
import ScrollToTop from './components/ScrollToTop';



function App() {
  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth") === 'true');
  const [token, setToken] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        setAuth(true);
        window.localStorage.setItem("auth", "true");
        userCred.getIdToken().then((token) => {
          setToken(token);
        });
      } else {
        setAuth(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
       <ScrollToTop />
    <Routes>
      <Route path="/" element={auth ? <Home token={token} /> : <Signin setAuth={setAuth} setToken={setToken} />} />
      <Route path="/general" element={<General />} />
      <Route path="/academic" element={<Academic />} />
      <Route path="/academicreadingins" element={<AcademicReadingIns />} />
        <Route path="/academicreadingmodule1" element={<AcademicReadingModule1 />} />
        <Route path="/academicreadingmodule2" element={<AcademicReadingModule2 />} />
        <Route path="/academicreadingmodule3" element={<AcademicReadingModule3 />} />
        <Route path="/generalreadingmodulesec1" element={<GeneralReadingModuleSec1 />} />
        <Route path="/generalreadingmodulesec2" element={<GeneralReadingModuleSec2 />} />
        <Route path="/generalreadingmodulesec3" element={<GeneralReadingModuleSec3 />} />
        <Route path="/generalwritingins" element={<GeneralWritingIns />} />
        <Route path="/generalwritingtask1" element={<GeneralWritingTask1 />} />
        <Route path="/generallisteningins" element={<GeneralListeningIns />} />
        <Route path="/generalreadingins" element={<GeneralReadingIns />} />
        <Route path="/listeningmodulesec1" element={<ListeningModuleSec1 />} />
        <Route path="/listeningmodulesec2" element={<ListeningModuleSec2 />} />
        <Route path="/listeningmodulesec3" element={<ListeningModuleSec3 />} />
        <Route path="/listeningmodulesec4" element={<ListeningModuleSec4 />} />
        <Route path="/speakingholdingpage" element={<SpeakingModuleHoldingPage />} />
      
    </Routes>
  </div>
 
  );
}

export default App;
