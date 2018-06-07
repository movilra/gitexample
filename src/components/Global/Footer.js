//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Assets



class Footer extends Component {
  static propTypes={
    copyright: PropTypes.string
}
  render() {
    const{copyright="Devf 2018"}=this.props
    console.log(this.props)
    return (
        <div className="Footer">
        <p>{copyright}</p>
        </div>
    );
  }
}

export default Footer;