import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from "./components/student/Header";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Header/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;