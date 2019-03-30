import React, { Component } from 'react';

class MyButton extends Component{


    render(props){

        return (
            <button type="submit">{this.props.label}</button>
        );
    }


}

export default MyButton;