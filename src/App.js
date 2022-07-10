import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrijectDisplay from './pages/PrijectDisplay';
import Contact from './pages/Contact';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/project/:id' element={<PrijectDisplay/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Home/>} />
          
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
