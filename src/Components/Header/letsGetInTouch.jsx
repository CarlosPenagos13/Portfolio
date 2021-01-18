import React from "react"
import "../Header/letGetInTouch.css"
import Luz from "../../Images/On.png"

function ButtonTouch () {
    return(
        <section className="Containerbutton">
            <div className="flexbox">
                <div className="box">
                    <p>
                        Lets get in touch
                    </p>
                </div>
                <div>
                    <img src={Luz} alt="On"/>
                </div>
            </div>
        </section>
    )
}

export default ButtonTouch