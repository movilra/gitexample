// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Body extends Component {

  static propTypes = {
  content: PropTypes.object.isRequired
  }
  
  render() {
    const {content} = this.props
    console.log("Renderizando esta funcion")
    return (
      <div>
        
       {content} 
      </div>
    );
  }
}

export default Body;


