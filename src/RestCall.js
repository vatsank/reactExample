import React, { Component } from 'react';
import DataTableRow from './DataTableRow';
import './App.css';


class RestCall extends Component{


    constructor() {
        super();
            this.state={items:[]};
    }
  
    componentDidMount(){
        fetch(`http://jsonplaceholder.typicode.com/users`)
        .then(result=>result.json())
        .then(items=>this.setState({items}))
        

    }

  
    render(props){

               return(
                      <table className='table table-striped'>
                      <tbody>
                        <DataTableRow data={this.state.items}></DataTableRow>
                        </tbody>
                        </table>
               )

               

}
    }

export default RestCall;

