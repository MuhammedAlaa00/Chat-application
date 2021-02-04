import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router , Switch , Route}from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Join}/>
        <Route path="/chat" component={Chat}/>
      </Switch>
    </Router>
  );
}

export default App;
