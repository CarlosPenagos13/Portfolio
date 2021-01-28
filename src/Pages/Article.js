import React from "react"
import "../Components/Styles/Articles.css"

import Img1 from "../Images/Img1.png"
import Like from "../Images/IconLike.png"
import Compartir from "../Images/IconShare.png"

class Articles extends React.Component{
    state = { 
        data: [
            {
            "title":"the master-builder",
            "description1":"Lorem ipsum dolor sit amet, consetetur",
            "description2":"sadipscing elitr, sed diam nonumy eirmod.",
            "Date":"Abril 2020",
        },
            {
            "title":"the master-builder",
            "description1":"Lorem ipsum dolor sit amet, consetetur",
            "description2":"sadipscing elitr, sed diam nonumy eirmod.",
            "Date":"Abril 2020",
        },
            {
            "title":"the master-builder",
            "description1":"Lorem ipsum dolor sit amet, consetetur",
            "description2":"sadipscing elitr, sed diam nonumy eirmod.",
            "Date":"Abril 2020",
        },
            {
            "title":"the master-builder",
            "description1":"Lorem ipsum dolor sit amet, consetetur",
            "description2":"sadipscing elitr, sed diam nonumy eirmod.",
            "Date":"Abril 2020",
        },
            {
            "title":"the master-builder",
            "description1":"Lorem ipsum dolor sit amet, consetetur",
            "description2":"sadipscing elitr, sed diam nonumy eirmod.",
            "Date":"Abril 2020",
        },
            {
            "title":"the master-builder",
            "description1":"Lorem ipsum dolor sit amet, consetetur",
            "description2":"sadipscing elitr, sed diam nonumy eirmod.",
            "Date":"Abril 2020",
        }
    ]
    }
        render(){
        return(
            <div className="background-Articles">
                <div className="title-Articles">
                    <h2>
                        Articles
                    </h2>
                </div>
                <div className="Articles-Container">
                {this.state.data.map((article) => {
                return(
                    <div key={article.id}>
                        <figure className="Articles-Container-img">
                            <img width="280px" src={Img1} alt="Img1.com"/>
                        </figure>
                        <h5>
                            {article.title} 
                        </h5>
                        <p className="Articles-Container-Description">
                        {article.description1} <br/>
                        {article.description2}
                        </p>
                        <div className="Share-Container">
                            <figure>
                                <img src={Compartir} width="16px" alt=""/>
                            </figure>
                            <figure>
                                <img src={Like} width="16px" alt=""/>
                            </figure>
                            <p>
                                {article.Date}
                            </p>
                        </div> 
                    </div>
                    )
                })}                         
                </div>
            </div>
        );
    }
}


export default Articles