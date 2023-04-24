import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from "./components/student/Header";
import Contact from './components/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;