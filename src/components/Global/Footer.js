import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Footer.css';


class Footer extends Component {
static propTypes = {
  copyright: PropTypes.string.isRequiered
};

  render() {
		const {copyright = ' &copy; copyright default'} = this.props;
    return (
      <div className="Footer">
        <h1 dangerouslySetInnerHTML={{ __html: copyright }}/>
      </div>
    );
  }
}

export default Footer;
