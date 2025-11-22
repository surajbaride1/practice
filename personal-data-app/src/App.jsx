import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Documents from './pages/Documents';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
