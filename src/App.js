import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './css/App.css';
import Home from './pages/Home';
import Students from './pages/Students';
import StudentPage from './pages/StudentPage';
import TeacherPage from './pages/TeacherPage';
import Teachers from './pages/Teachers';
import Directors from './pages/Directors';
import NotFound from './pages/NotFound';
import CreateUnit from './pages/CreateUnit'

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/students/:level' component={Students}></Route>
        <Route exact path='/teachers' component={Teachers}></Route>
        <Route exact path='/teacher/:id' component={TeacherPage}></Route>
        <Route exact path='/directors' component={Directors}></Route>
        <Route exact path='/student/:id' component={StudentPage}></Route>
        <Route exact path='/create/unit' component={CreateUnit}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
