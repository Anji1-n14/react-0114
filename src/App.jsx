import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task.jsx'
import Profile from './components/portfolio/Portfolio.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Enquery from './pages/Enquiry/Enquiry.jsx';

function App() {
  //const [count, setCount] = useState(0)
  const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
  { name: "David", age: 35 },
  { name: "Eva", age: 22 },
  { name: "Frank", age: 40 },
  { name: "Grace", age: 27 },
  { name: "Hannah", age: 24 },
  { name: "Ian", age: 31 },
  { name: "Jack", age: 29 }
];

  return (
    
<div
>
    {/* <h1>demo project</h1>
    <ul>{people.map((per,index)=>(
      <li key={index}>
           {per.name}-{per.age} years old
      </li>
      
    ))}
    </ul>
    <Task /> */}
    <div>
      <Profile />
    </div>
    {/* {
      <div>
      <AboutUs />
      </div>
  // }  */}
   <Enquery />
    </div>
  )
  }

export default App;
