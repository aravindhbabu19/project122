
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import Navigation from './Components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Faculty from './pages/Faculty';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div>
    <Router> 
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>  
    </div>
  );
}

export default App;
