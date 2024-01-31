import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer">
        <p><FontAwesomeIcon icon={faCopyright} /> 2024 #VANLIFE
        </p>
      </footer>
    );
  }
}

export default Footer;
