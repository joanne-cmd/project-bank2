import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from "./components/student/Header";
import Contact from './components/contact/Contact';
import Landingpage from './components/landingpage/landingpage';
import AddProject from './components/Addproject/addprojectform'
import Project from './components/Projects/project';
import Cohorts from './components/Cohorts/cohorts';
import Login from './components/Login/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login/>} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/cohorts" element={<Cohorts />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/add-project" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;