import React from "react"
import "./Styles/letGetInTouch.css"
import Luz from "../Images/On.png"

function ButtonTouch () {
    return(
        <div className="Containerbutton">
            <div className="flexbox">
                    <button className="box">
                        LetsGetInTouch
                    </button>
                <div>
                    <img src={Luz} alt="On"/>
                </div>
            </div>
        </div>
    )
}

export default ButtonTouch