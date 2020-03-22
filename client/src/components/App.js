import React, {Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="container">
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
