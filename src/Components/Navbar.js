import React from "react"

import logo from "../Images/SebastianAldana.png"
import "./Styles/Navbar.css"

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
            <div className="container-fluid">
                <a className="Navbar__brand" href="/">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                    <span>Sebastian</span>
                    <span>__  </span>
                    <span>Aldana</span>
                </a>
            </div>
            </div>
        );
    }
}

export default Navbar