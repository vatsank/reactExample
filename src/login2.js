import React from 'react';

class CreditCardForm extends React.Component {
  constructor() {
    super()

    this.state = {
      userName: '',
      passWord: ''
       }
  }

  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  render() {
    return (
      <form>
        <h2>Enter your credit card details</h2>

        <label>
          Full Name
          <input type="name" onChange={this.handleChange.bind(this)} value={this.state.name} />
        </label>

        <label>
          Home address
          <input type="address" onChange={this.handleChange.bind(this)} value={this.state.address} />
        </label>


        <button type="submit">Pay now</button>
      </form>
    )
  }
}
