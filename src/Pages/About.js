import React from "react"
import Fast from "../Images/Fast.png"
import Usable from "../Images/Usable.png"
import Clean from "../Images/Clean.png"
import Dynamic from "../Images/Dynamic.png"
import CaraDeSeb from "../Images/Hero.png"
import Percentage from "../Images/percentage.PNG"
import "../Components/Styles/About.css"

    function About (){
        return(
            <section id="about">
                <div className="title-about">
                    <h2>
                        About
                    </h2>
                </div>
                <div className="percentage">
                    <div className="percentageFast">
                        <figure>
                            <img src={Fast} alt="FastImg"/>
                        </figure>
                        <h3>
                            Fast
                        </h3>
                        <p>
                            Fast load times and lag free <br/> interaction, my highest priority.
                        </p>
                    </div>
                    <div className="percentageUsable">
                        <figure>
                            <img src={Usable} alt="UsableImg"/>
                                    </figure>
                                    <h3>
                                        Usable
                                    </h3>
                                    <p>
                                        My layouts will work on any<br/> device, big or small.
                                    </p>
                                </div>
                                <div className="percentageClean">
                                    <figure>
                                        <img src={Clean} alt="CleanImg"/>
                                    </figure>
                                    <h3>
                                        Clean
                                    </h3>
                                    <p>
                                        The cleanest code for readability <br/> and work in the future
                                    </p>
                                </div>
                                <div className="percentageDynamic">
                                    <figure>
                                        <img src={Dynamic} alt="DynamicImg"/>
                                    </figure>
                                    <h3>
                                        Dynamic
                                    </h3>
                                    <p>
                                        Websites don't have to be static, I <br/> love making pages come to life.
                                    </p>
                                </div>
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
            </section>
        )
    }

export default About