import React, { Component } from 'react';
import Button from './Button/Button.react';
import Input from './Input/Input.react';
import Select from './Select/Select.react';
import {  Link } from 'react-router-dom';

class Login extends Component {

    constructor(props){

        super(props);
        this.state = {
            newUser: {
              name: '',
              password: '',
              role:''
               },
               roles: ['admin', 'user', 'guest']

            };

               
    }

    onChange =(e)=> {
        this.setState({ name: e.target.value });
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();
        let userData = this.state.newUser;
        console.log(userData);
    }
    handleInput = (e) => {

        let value = e.target.value;
        let name = e.target.name;
    this.setState( prevState => ({ newUser : 
         {...prevState.newUser, [name]: value
         }
       }

       ), () => console.log(this.newUser))
 
    }
   render() {
      return (
         <div>
            <h2>Login</h2>
            <form className="container-fluid">
       
            <Input type={'text'}
                   title= {'Full Name'} 
                   name= {'name'}
                   value={this.state.newUser.name} 
                   placeholder = {'Enter your name'}
                   onChange ={this.handleInput}
                   />
                  <Input type={'password'}
                   title= {'Pass Word'} 
                   name= {'password'}
                   value={this.state.newUser.password} 
                   placeholder = {'Enter your password'}
                   onChange ={this.handleInput}
                   />
                   <Select title={'User In role'}
                   name={'role'}
                   options = {this.state.roles} 
                   value = {this.state.newUser.role}
                   placeholder = {'Select Role'}
                   handleChange = {this.handleInput}
                   /> 
 
                   <Button 
                   action = {this.handleFormSubmit}
                   type = {'primary'} 
                   title = {'Submit'} 
               />
                   </form>
                   <Link to={'/Register'}>Registration</Link>

         </div>
      );
   }
}
export default Login;
