import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from "./components/student/Header";
import Contact from './components/contact/Contact';
import Login from './components/Login/login'
import AddProject from './components/Addproject/addprojectform'
import Logout from './components/Logout/logout';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;