import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';

import CounterButtons from './components/CounterButtons';

function App() {
  console.log("hola")
  return (
    <>
      <header>
      <Router>
        <Switch>
          <Route path = "/"><Home></Home></Route>
          <Route path = "/"><About></About></Route>
        </Switch>
      </Router>         
      </header>
      <div>
        <CounterButtons></CounterButtons>
      </div>
    </>
  );
}

export default App;
