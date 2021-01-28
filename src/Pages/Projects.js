import React from "react"
import "../Components/Styles/Projects.css"
import CR1 from "../Images/CR1.png"
import CR2 from "../Images/CR2.png"
import CR3 from "../Images/CR3.png"
import CR4 from "../Images/CR4.png"
import CR5 from "../Images/CR5.png"
import CR6 from "../Images/CR6.png"
import CR7 from "../Images/CR7.png"
import CR8 from "../Images/CR8.png"
import CR9 from "../Images/CR9.png"

function Projects() {
    return(
        <div className="Background-projects">
            <div className="title-projects">
                <h2>
                    Projects
                </h2>
            </div>
            <div className="projects-first">
                <figure>
                    <img src={CR1} alt=""/>
                </figure>
                <figure>
                    <img src={CR2} alt=""/>
                </figure>
                <figure>
                    <img src={CR3} alt=""/>
                </figure>
            </div>
            <div className="projects-first">
                <figure>
                    <img src={CR4} alt=""/>
                </figure>
                <figure>
                    <img src={CR5} alt=""/>
                </figure>
                <figure>
                    <img src={CR6} alt=""/>
                </figure>
            </div>
            <div className="projects-third">
                <figure>
                    <img src={CR7} alt=""/>
                </figure>
                <figure>
                    <img src={CR8} alt=""/>
                </figure>
                <figure className="imgCR9">
                    <img src={CR9} alt=""/>
                </figure>
            </div>
        </div>
    )
}

export default Projects