import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Fade from 'react-reveal/Fade'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/login" element={<Fade duration={600}><Login /></Fade>} exact />
        <Route path="/signup" element={<Fade duration={600}><Signup /></Fade>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
