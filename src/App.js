
import './App.css';
import sidebar from './Components/sidebar.jsx';
import HomePage from './Components/HomePage'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Route path="/"  exact component = {HomePage} />
        <Route path="/"  component = {sidebar} />
        <Route path="/projects" component = {Projects} />
        <Route path="/resume" component = {Resume} />
      
      </div>
    </Router>
  );
}

export default App;
