// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {

  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    return(
      <p>
      {this.state.secondsLeft ? this.state.secondsLeft + " seconds left before I go boom!" : "Boom!"}
      </p>
    )
  }


}
