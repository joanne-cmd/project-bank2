import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from "./components/student/Header";
import Contact from './components/contact/Contact';
import Landingpage from './components/landingpage/landingpage';

import Project from './components/Projects/project';
import Cohorts from './components/Cohorts/cohorts';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/landingpage" element={<Landingpage/>}/>
        <Route path="/cohorts" element={<Cohorts/>}/>
        <Route path="/project" element={<Project/>}/>
        

      </Routes>
      
    </BrowserRouter>
  );
}
export default App;