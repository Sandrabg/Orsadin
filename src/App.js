import React from 'react';

import {
  BrowserRouter as Route,
  Switch
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';

import CounterButtons from './components/CounterButtons';

function App() {
  return (
    <>
      <header>
      <Route>
        <Switch>
          <Route path = "/"><Home></Home></Route>
          <Route path = "/"><About></About></Route>
        </Switch>
      </Route>         
      </header>
      <div>
        <CounterButtons></CounterButtons>
      </div>
    </>
  );
}

export default App;
