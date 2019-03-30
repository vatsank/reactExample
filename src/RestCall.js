import React, { Component } from 'react';
import DataTableRow from './DataTableRow';


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
                   
                       this.state.items.map(item=>
                        
                            <DataTableRow data={item}></DataTableRow>
                                           
                
               ))

}
    }

export default RestCall;

