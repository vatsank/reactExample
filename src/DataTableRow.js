import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (<tr key={this.props.data.id}>
        <td>{this.props.data.username}</td>
        <td>{this.props.data.email}</td>
    </tr>
);

  }
}
