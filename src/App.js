import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Headers from './components/layouts/Header/Header';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Courses from './Pages/Courses/Courses';
import Exam from './Pages/Exam/Exam';
import Login from './Pages/Login/Login';
import Practice from './Pages/Practice/Practice';
import Quest from './Pages/Quest/Quest';
import Errors from './Pages/Error/Error';


const App = () => {
    return (
      <Router>
          <Headers />
          <div>
            <Switch>
              <Route exact path='/'> 
                  <Home /> 
              </Route>
              <Route exact path='/contact'> 
                  <Contact /> 
              </Route>
              <Route exact path='/exam'> 
                  <Exam /> 
              </Route>
              <Route exact path='/courses'> 
                  <Courses /> 
              </Route>
              <Route exact path='/login'> 
                  <Login /> 
              </Route>
              <Route exact path='/practice'> 
                  <Practice />
              </Route>
              <Route exact path='/quest'>
                  <Quest/> 
              </Route>
              <Route exact path='/:something'>
                  <Errors /> 
              </Route>
            </Switch>
        </div>
      </Router>
    )
}
export default App;
