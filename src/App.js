import React from 'react';
import './styles/index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import About from './routes/about';

const App = () => (
  <Router>
    <div className="App">
      <small>
        Simple React + Express Starter. Go <Link to='/about'>About</Link>. <Link to='/'>home</Link>
      </small>
      <Route exact path="/about" component={About}/>
    </div>
  </Router>
)

export default App;
