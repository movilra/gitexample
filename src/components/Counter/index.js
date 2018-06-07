// Dependencies
import React, { Component } from 'react';

class Counter extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.setState({
      count: 1
    })
  }

  CountClick = (event) => {
    if (event.target.id === "add") {
     this.setState({
        count: this.state.count + 1
      });
    } else if (event.target.id === "substract" && this.state.count > 0) {
     this.setState({
        count: this.state.count - 1
      });
    } else {
      this.setState({
        count: 0
      });
    }
  }

  render() {
    console.log("Renderizando esta funcion")
    return (
      <div>
        <h1> Counter: {this.state.count} </h1>
        <p>
          <button id="add" onClick={this.CountClick}> + </button>
          <button id="substract" onClick={this.CountClick} > - </button>
          <button id="reset" onClick={this.CountClick}> Reset </button>
        </p>
      </div>
    );
  }
}

export default Counter;