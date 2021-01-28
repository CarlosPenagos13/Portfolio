import React from "react"
import { Link } from "react-router-dom"

import AboutImg from "../Images/SebastianAldana.png"
import "../Components/Styles/Header.css"
import LetsGetInTouch from "../Components/letsGetInTouch"

class Header extends React.Component {
    render(){    
        return(
            <div className="Image">
                <LetsGetInTouch/>
                <div className="ContainerSebastian">
                <figure>
                    <img className="imgSebastian" src={AboutImg} alt="SebastianAldana.com"/>
                </figure>
                <h1>
                    Sebastian Aldana
                </h1>
                </div>
                <div className="Container">
                <h1>
                    Frontend Developer and Devops <br/> Always looking the best <br/> way of solving problems
                </h1>
                </div>
                <div className="menu">
                    <nav>
                        <img className="imgSeb" src={AboutImg} alt="SebastianAldana.com"/>
                        <ol>
                            <Link className="link" to="/about">
                                About
                            </Link>
                            <Link className="link" to="/projects">
                                Projects
                            </Link>
                            <Link className="link" to="/experiences">
                                Experiences
                            </Link>
                            <Link className="link" to="/article">
                                Articles
                            </Link>
                             <Link className="link" to="/contact"> 
                                Contact
                             </Link>
                         </ol>
                    </nav>
                </div>
            </div>
        )
    }
}



export default Header