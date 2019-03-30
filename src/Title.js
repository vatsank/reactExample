import React, { Component } from 'react'
import "./App.css";
export default class Title extends Component {

    constructor() {
         super();
        this.state ={title :"Using React JS","className":'initial'};
        // this.change = this.change.bind(this);
    }

// Using arrow function this refers to enclosing class
    change = () => {
        this.setState({
          className: 'changed'
        });
    }

    // change (){

    //     console.log("event fired");
    //  this here refers callback function and not enclosing class
    //     this.setState({className:'changed'});
    // }
    render() {
        return ( <div>
            <h1 onClick={this.change} className={this.state.className}> { this.state.title } </h1> 
            </div>
        )
    }
}