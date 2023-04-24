import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from "./components/student/Header";
import Contact from './components/contact/Contact';
import Cohorts from './components/Cohorts/cohorts';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Cohorts" element={<Cohorts/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;