import React, { Component } from 'react';
import './App.css';

class CityList extends Component {


    
    render(props){

        return(
            <div>
            <ul>{this.props.city}</ul>

            </div>
        );
    }
}

export default CityList;
