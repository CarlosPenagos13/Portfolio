import React from "react"
import AboutImg from "../../Images/SebastianAldana.png"
import "./Header.css"
import LetsGetInTouch from "./letsGetInTouch"

function Header () {
    return(
        <header className="Image">
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
                        <li>
                            <a className="link" href="#about">About</a>
                        </li>
                        <li>
                        <a className="link" href="#projects">Projects</a>
                        </li>
                        <li>
                            <a className="link" href="#experiences">Experiences</a>
                        </li>
                        <li>
                            <a className="link" href="#articles">Articles</a>
                        </li>
                         <li>
                             <a className="link" href="#contact"> Contact</a>
                         </li>
                     </ol>
                </nav>
            </div>
        </header>
    )
}

export default Header