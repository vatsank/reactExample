import React, { Component } from 'react'
import './App.css';
export default class DataTable extends Component {
   
    render(){

        return (<table className="thead-default">
        <tr>
            <th>{this.props.headings[0]}</th>
            <th>{this.props.headings[1]}</th>
        </tr>
        </table>
        );
    }

    
}
