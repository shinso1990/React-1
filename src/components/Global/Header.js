//depndencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//assets
import logo from './images/logo.svg';
import './css/Header.css';



class Header extends Component {
static propTypes = {
  title: PropTypes.string.isRequiered,
  itemsMenu: PropTypes.array.isRequiered
};

  render() {
      console.log(this.props);
      const {title, itemsMenu} = this.props;

    return (
      <div className="Header">
        <header>
          <img src={logo} className="Header-logo" alt="logo" />
          <p>
            {title}
          </p>
        </header>
        <ul className="menu">
            { itemsMenu && itemsMenu.map( (item, key)=> <li key={key}> <a href={item.url}> {item.title}</a></li>)}
        </ul>
      </div>
    );
  }
}

export default Header;
