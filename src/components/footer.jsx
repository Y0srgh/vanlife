import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <p><FontAwesomeIcon icon={faCopyright} className="fa-light" /> 2022 #VANLIFE
        </p>
      </div>
    );
  }
}

export default Footer;
