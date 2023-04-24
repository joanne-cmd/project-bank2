// import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import Header from "./components/student/Header";
// import Contact from './components/contact/Contact';
// import Cohorts from './components/Cohorts/cohorts';


// function App() {
//   return (
//     <BrowserRouter>
      
//       <Routes>
//         <Route path="/" element={<Header/>}/>
//         <Route path="/contact" element={<Contact/>}/>
//         <Route path="/Cohorts" element={<Cohorts/>}/>
     
//       </Routes>
      
//     </BrowserRouter>
//   );
// }
// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingpage from './components/landingpage/landingpage';
import Project from './components/Projects/project';
import About from './components/About/about'
// import other components as needed

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About us />} />
        {/* Add other routes for your application */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
