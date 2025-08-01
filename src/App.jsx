import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task.jsx'
import Profile from './components/portfolio/Portfolio.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Enquery from './pages/Enquiry/Enquiry.jsx';
import EnqueryUncontrolled from './pages/Enquiry/EnqueryUncontrolled.jsx';
import EnqueryOptimization from './pages/Enquiry/EnquiryOptimization.jsx';

function App() {
  //const [count, se  tCount] = useState(0)
  
  return (
    
    <div>
       <Enquery />
       <EnqueryUncontrolled />
       <EnqueryOptimization />
    </div>
      )
  }
  export default App;
