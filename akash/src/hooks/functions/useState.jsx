import React, { Component } from 'react'

export class useState extends Component {

    constructor(){
        super(props);

        this.state = {
            number: 0
        }
    }

    incrementNumber(){
        this.setState((prevstate) => ({number : prevstate.number+1}))
    }


  render() {
    return (
      <div>
        <div></div>
        <button onClick={this.incrementNumber}>Count : {this.state.number}</button>
      </div>
    )
  }
}

export default useState