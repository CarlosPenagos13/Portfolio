import React from "react"
import "../Components/Styles/Articles.css"
import Img1 from "../Images/Img1.png"
import Img2 from "../Images/Img2.png"
import Img3 from "../Images/Img3.png"
import Img4 from "../Images/Im4.png"
import Img5 from "../Images/Img5.png"
import Img from "../Images/Img.png"
import Compartir from "../Images/IconShare.png"
import Like from "../Images/IconLike.png"

function Articles () {
    return(
        <div className="background-Articles">
            <div className="title-Articles">
                <h2>
                    Articles
                </h2>
            </div>
            <div className="Articles-Container">
                <div>
                    <figure className="Articles-Container-img">
                        <img width="280px" src={Img1} alt="Img1.com"/>
                    </figure>
                    <h5>
                        the master-builder 
                    </h5>
                    <p className="Articles-Container-Description">
                        Lorem ipsum dolor sit amet, consetetur <br/>
                        sadipscing elitr, sed diam nonumy eirmod.
                    </p>
                    <div className="Share-Container">
                        <figure>
                            <img src={Compartir} width="16px" alt=""/>
                        </figure>
                        <figure>
                            <img src={Like} width="16px" alt=""/>
                        </figure>
                        <p>
                            Abril 2020
                        </p>
                    </div>
                </div>
                <div>
                    <figure className="Articles-Container-img">
                        <img width="280px" src={Img2} alt="Img1.com"/>
                    </figure>
                    <h5>
                        the master-builder 
                    </h5>
                    <p className="Articles-Container-Description">
                        Lorem ipsum dolor sit amet, consetetur <br/>
                        sadipscing elitr, sed diam nonumy eirmod.
                    </p>
                    <div className="Share-Container">
                        <figure>
                            <img src={Compartir} width="16px" alt=""/>
                        </figure>
                        <figure>
                            <img src={Like} width="16px" alt=""/>
                        </figure>
                        <p>
                            Abril 2020
                        </p>
                    </div>
                </div>
                <div>
                    <figure className="Articles-Container-img">
                        <img width="280px" src={Img3} alt="Img1.com"/>
                    </figure>
                    <h5>
                        the master-builder 
                    </h5>
                    <p className="Articles-Container-Description">
                        Lorem ipsum dolor sit amet, consetetur <br/>
                        sadipscing elitr, sed diam nonumy eirmod.
                    </p>
                    <div className="Share-Container">
                        <figure>
                            <img src={Compartir} width="16px" alt=""/>
                        </figure>
                        <figure>
                            <img src={Like} width="16px" alt=""/>
                        </figure>
                        <p>
                            Abril 2020
                        </p>
                    </div>
                </div>
            </div>
            <div className="Articles-Container">
                <div>
                    <figure className="Articles-Container-img">
                        <img width="280px" src={Img4} alt="Img1.com"/>
                    </figure>
                    <h5>
                        the master-builder 
                    </h5>
                    <p className="Articles-Container-Description">
                        Lorem ipsum dolor sit amet, consetetur <br/>
                        sadipscing elitr, sed diam nonumy eirmod.
                    </p>
                    <div className="Share-Container">
                        <figure>
                            <img src={Compartir} width="16px" alt=""/>
                        </figure>
                        <figure>
                            <img src={Like} width="16px" alt=""/>
                        </figure>
                        <p>
                            Abril 2020
                        </p>
                    </div>
                </div>
                <div>
                    <figure className="Articles-Container-img">
                        <img width="280px" src={Img5} alt="Img1.com"/>
                    </figure>
                    <h5>
                        the master-builder 
                    </h5>
                    <p className="Articles-Container-Description">
                        Lorem ipsum dolor sit amet, consetetur <br/>
                        sadipscing elitr, sed diam nonumy eirmod.
                    </p>
                    <div className="Share-Container">
                        <figure>
                            <img src={Compartir} width="16px" alt=""/>
                        </figure>
                        <figure>
                            <img src={Like} width="16px" alt=""/>
                        </figure>
                        <p>
                            Abril 2020
                        </p>
                    </div>
                </div>
                <div className="Separation-Contact">
                    <figure className="Articles-Container-img">
                        <img width="280px" src={Img} alt="Img1.com"/>
                    </figure>
                    <h5>
                        the master-builder 
                    </h5>
                    <p className="Articles-Container-Description">
                        Lorem ipsum dolor sit amet, consetetur <br/>
                        sadipscing elitr, sed diam nonumy eirmod.
                    </p>
                    <div className="Share-Container">
                        <figure>
                            <img src={Compartir} width="16px" alt=""/>
                        </figure>
                        <figure>
                            <img src={Like} width="16px" alt=""/>
                        </figure>
                        <p>
                            Abril 2020
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles