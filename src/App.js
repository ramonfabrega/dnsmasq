import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Log from './components/Log';
import About from './components/About';

// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div id='App'>
      <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/log' component={Log} />
        <Route exact path='/about' component={About} />
      </Router>
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
