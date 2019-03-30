import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import RestCall from './RestCall';
import RegisterForm from './RegisterForm';

class App extends Component {
    render() {

        return ( <div className = "App">
            <header className = "App-header" >
            <img src = { logo } className = "App-logo" alt = "logo" />
            <h1 className = "App-title" > Welcome to React </h1> 

            </header> 
            <Router>
            <div>
               <h2>Welcome to React  Tutorial</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
                  <li><Link to={'/Users'}>Users</Link></li>
                  <li><Link to={'/Register'}>Registration</Link></li>

               </ul>
               <hr />
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/users' component={RestCall} />
                  <Route exact path='/register' component={RegisterForm} />

               </Switch>

            </div>
         </Router>

           
            </div>
        );
    }
}

export default App;