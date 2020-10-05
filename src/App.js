import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './css/App.css';
import Home from './pages/Home';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Directors from './pages/Directors';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/students' component={Students}></Route>
        <Route exact path='/teachers' component={Teachers}></Route>
        <Route exact path='/directors' component={Directors}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
