//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//Assets
import logo from './images/logo.svg';

class Header extends Component {
    static propTypes={
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    }
  render() {
      const {title,items} = this.props
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {title}</h1>
          
          
          
          <ul className="Menu">
              {items && items.map((item,key) =>{
              
                return <li key={key}>
                            <Link to={item.url}>
                            {item.title}
                            </Link>
                            </li>
                    }
              
                )}
            </ul> 
        </header>
  
    );
  }
}

export default Header;