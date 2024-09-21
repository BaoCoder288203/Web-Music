import {useState} from 'react'
import Content from './Content'

// 1. To Do List
// function App() {
//   const storageJobs = JSON.parse(localStorage.getItem('jobs'));
//   const [job, setJob] = useState('');
//   const [jobs, setJobs] = useState(storageJobs ?? []);

//   const handleChange = () => {
//     setJobs(prev => {
//       const newJob = [...prev,job];
//       const jsonJobs = JSON.stringify(newJob);
//       localStorage.setItem('jobs', jsonJobs);

//       return newJob;
//     });
//     setJob('')
//   }
//   const handleUpdate = () => {
//     setJobs(prev => {
//       const newJob = [...prev];
//       const jsonJobs = JSON.stringify(newJob);
//       localStorage.setItem('jobs', jsonJobs);
//       return newJob;
//     });
//     setJob('')
//   }
//   return (
//     <div className = "App" style={{padding:32}}>
//       <input 
//         value = {job} 
//         onChange = { e => setJob(e.target.value)} />
//       <button onClick={handleChange}>Add</button>
//       <button onClick={handleUpdate}>Remove</button>
//       <ul>
//         {jobs.map((job,index) => <li key={index}>{job}
//           <input 
//           type = {'checkbox'}
//           value = {job} 
//           onChange = { e => setJob(e.target.value)}
//           checked />
//         </li>)}
//       </ul>
//     </div>
//   )
// }

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div className = "App" style={{padding:32}}>
//       <button onClick={() => setShow(!show) }>
//         Toggle
//       </button>
//       {show && <Content/>}
//     </div>
//   )
// }

function App() {
  const [number,setNumer] = useState(0);
  const increate = ()=>{
    setNumer(prev => prev + 1);
  }
  return (
    <div className="App">
      <Content />
      {/* <h1>{number}</h1> */}
      {/* <button
      onClick={increate}>
      Click me!
      </button>  */}
    </div>
  );
}

export default App;
