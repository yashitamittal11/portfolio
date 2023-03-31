import './App.css';
//import Navigation from './components/Navigation';
import Navigation from './components/Navigation';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
       <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
