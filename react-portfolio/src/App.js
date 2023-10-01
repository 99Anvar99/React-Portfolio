import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing pages
import AboutMe from './pages/aboutMe';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contacts from './pages/contacts';
// Improting components
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
