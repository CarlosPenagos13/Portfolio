import React from "react"
import CaraDeSeb from "../Images/Hero.png"
import Percentage from "../Images/percentage.PNG"
import "../Components/Styles/About.css"

class About extends React.Component {
state={
    about:[
    {
        image:"https://lh3.googleusercontent.com/zlt_5qMH0YrIp6YlqyX1rXh1PrILe5TyjX98Czt9ON2MD2iwym80fQxuxwv-1HYAbldQGU0=s97",
        title:"Fast",
        description1:"Fast load times and lag free",
        description2:"interaction, my highest priority."
    },
    {
        image:"https://lh3.googleusercontent.com/B6tmEsR-gpaUwwJcoXkXvhe9fhDWvUFqSvNy9t3ofPR2QGsEhPqU_ctlvds_EVNrxFhV=s97",
        title:"Usable",
        description1:"My layouts will work on any",
        description2:"device, big or small."
    },
    {
        image:"https://lh3.googleusercontent.com/zlt_5qMH0YrIp6YlqyX1rXh1PrILe5TyjX98Czt9ON2MD2iwym80fQxuxwv-1HYAbldQGU0=s97",
        title:"Fast",
        description1:"Fast load times and lag free",
        description2:"interaction, my highest priority."
    },
    {
        image:"https://lh3.googleusercontent.com/B6tmEsR-gpaUwwJcoXkXvhe9fhDWvUFqSvNy9t3ofPR2QGsEhPqU_ctlvds_EVNrxFhV=s97",
        title:"Fast",
        description1:"Fast load times and lag free",
        description2:"interaction, my highest priority."
    }
    ]
}
    render(){
        return(
            <div id="about">
                <div className="title-about">
                    <h2>
                        About
                    </h2>
                </div>
                <div className="percentage">
                    {this.state.about.map((about) =>{
                        return(        
                            <div className="percentageFast">
                                <figure>
                                    <img width="149px" height="130px" src={about.image} alt="FastImg"/>
                                </figure>
                                <h3>
                                    {about.title}
                                </h3>
                                <p>
                                    {about.description1} <br/> {about.description2}
                                </p>
                            </div>
                        )
                    })}
                    </div>
                    <div className="HeroSeb">
                        <div>
                            <figure>
                                <img src={CaraDeSeb} alt=""/>
                            </figure>
                            <h3>
                                Sebastian Aldana
                            </h3>
                            <p className="HeroSeb-Description">
                                But I must explain to you how all this mistaken idea of <br/> denouncing <strong> pleasure and praising </strong> pain was born and <br/> I will give you a complete account
                            </p>
                            <p className="explination">
                                of the system, and expound the actual
                            </p>
                        </div>
                        <div>
                            <img src={Percentage} width="700px" alt="Percentage"/>
                            
                        </div>
                    </div>
            </div>
        )
    }
}

export default About