import React, { Component } from 'react'

export class HookEffect extends Component {
    constructor(){
        super()

        this.state = { x:0, y:0}
    }
    

    logmoving = e => {
      this.setState({x : e.clientX, y : e.clientY})
    }

    componentDidMount(){
      window.addEventListener('mousemove', this.logmoving)

    }
    componentWillUnmount(){
      window.removeEventListener('mousemove', this.logmoving)
    }


  render() {
    return (
      <div>Hooks X : {this.state.x}, Y : {this.state.y}</div>
    )
  }
}

export default HookEffect