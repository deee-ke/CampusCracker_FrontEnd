import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Landingpage from './Pages/Landingpage';
import ArithmeticApt from './Sections/ArithmeticApt';
import OnlineArithapt from './Sections/OnlineArithApt';
import VbRsng from './Sections/VbRsng'
import VerbalAblty from './Sections/VerbalAblty'
import LogicalRsng from './Sections/LogicalRsng'
import NonVbRsng from './Sections/NonVbRsng'
import VbabtyTest from './Sections/VbAbtyTest'
import LogiRsngTest from './Sections/LogiRsngTest'
import SubtopicsHome from './Pages/SubtopicsHome';
import PoTFormulas from './SubTopics/PoTFormulas';
import GeneralExam from './Exams/GeneralExam';
import GeneralQns from './SubTopics/GeneralQns';
import Result from './Exams/Result';
import UserControls from './Pages/UserControls';
import ManageAccount from './Pages/ManageAccount';




function App() {
  // js code need to enter here
  return (
    // jsx code need to enter here
<> {/* Empty tag  jsx expression Every element inside return must be in a single parent element */}
 {/*  jsx expression Every element inside return must be in a single parent element */}
      
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Login register/>} /> {/* Conditional  Rendering Step1*/}
        <Route path="/login" element={<Login />} />
        <Route path="/arithmetic" element={<ArithmeticApt/>}/>
        <Route path="/arithtest" element={<OnlineArithapt/>}/>
        <Route path="/verbalability" element={<VerbalAblty/>}/>
        <Route path='/logicalreasoning' element={<LogicalRsng/>}/>
        <Route path='/nonvbrsng' element={<NonVbRsng/>}/>
        <Route path='/arithtest' element={<OnlineArithapt/>}/>
        <Route path='/vbrsng' element={<VbRsng/>}/>
        <Route path='/vbabtytest' element={<VbabtyTest/>}/>
        <Route path='/logirsngtest' element={<LogiRsngTest/>}/>
        <Route path='/subtopicshome' element={<SubtopicsHome/>}/>
        <Route path='/potformulas' element={<PoTFormulas/>}/>
        <Route path='/generalqns' element={<GeneralQns/>}/>
        <Route path='/generalexam' element={<GeneralExam/>}/>
        <Route path='/examresults' element={<Result/>}/>
        <Route path='/usercontrols' element={<UserControls/>}/>
        <Route path='/manageaccounts' element={<ManageAccount/>}/>
      </Routes >
     
  
</>
  );
}

export default App;
