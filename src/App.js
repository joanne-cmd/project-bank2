import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from "./components/student/Header";
import Login from './components/Login/login'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;