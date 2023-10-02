import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing pages
import AboutMe from './pages/aboutMe';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contacts from './pages/contacts';
import ProjectDisplay from './pages/projectDisplay';
// Improting components
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/project/:id' element={<ProjectDisplay />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
