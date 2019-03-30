import React, { Component } from 'react'

export default class DataTableRow extends Component {
  render() {

      return (
        this.props.data.map(( listValue, index ) => {
          return (
        <tr key={index}>
          <td>{listValue.id}</td>
          <td>{listValue.username}</td>
          <td>{listValue.email}</td>
        </tr>
          )

        }
      )
    )


  }
}
