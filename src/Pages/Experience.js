import React from "react"
import "../Components/Styles/Experience.css"

class Experience extends React.Component {
    state = {
        education : [ 
            {
                title:"dislikes, or avoid",
                date:"Mar 2019 - Oct 2019",
                description1:"All this mistaken idea of",
                description2:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is ",
                description3:"pain, but because occasionally circumstances occur in which toil and pain can procure him",
                description4:""
            },
            {
                title:"dislikes, or avoid",
                date:"Mar 2019 - Oct 2019",
                description1:"All this mistaken idea of",
                description2:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is ",
                description3:"pain, but because occasionally circumstances occur in which toil and pain can procure him",
                description4:""
            },
            {
                title:"dislikes, or avoid",
                date:"Mar 2019 - Oct 2019",
                description1:"All this mistaken idea of",
                description2:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is ",
                description3:"pain, but because occasionally circumstances occur in which toil and pain can procure him",
                description4:""
            }
        ],
        careers : [
            {
                title:"dislikes, or avoid",
                date:"Mar 2019 - Oct 2019",
                description1:"All this mistaken idea of",
                description2:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is ",
                description3:"pain, but because occasionally circumstances occur in which toil and pain can procure him",
                description4:""
            },
            {
                title:"dislikes, or avoid",
                date:"Mar 2019 - Oct 2019",
                description1:"All this mistaken idea of",
                description2:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is ",
                description3:"pain, but because occasionally circumstances occur in which toil and pain can procure him",
                description4:""
            },
            {
                title:"dislikes, or avoid",
                date:"Mar 2019 - Oct 2019",
                description1:"All this mistaken idea of",
                description2:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is ",
                description3:"pain, but because occasionally circumstances occur in which toil and pain can procure him",
                description4:""
            },
            {
                title:"dislikes, or avoid",
                date:"Mar 2019 - Oct 2019",
                description1:"All this mistaken idea of",
                description2:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is ",
                description3:"pain, but because occasionally circumstances occur in which toil and pain can procure him",
                description4:""
            },
            {
                title:"dislikes, or avoid",
                date:"Mar 2019 - Oct 2019",
                description1:"All this mistaken idea of",
                description2:"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is ",
                description3:"pain, but because occasionally circumstances occur in which toil and pain can procure him",
                description4:""
            },
        ]
    }
    render(){
        return(
            <div>
                <div className="title-Experience">
                    <h2>
                        Experiences
                    </h2>
                </div>
                <div className="title-Experience-Description">
                    <h3>
                        “Protons give an atom its identity, electrons its personality.”<br/>- Bill Bryson, A short history of nearly everything
                    </h3>
                </div>
                <div className="title-Experience-Education">
                    <h3>
                        Education
                    </h3>
                </div>
                <div>
                    {this.state.education.map((education) => {
                        return(
                            <div  className="description-dislike-Container">
                                <div>
                                <p className="description-dislike">
                                    {education.title}
                                </p>
                                <p className="description-date">
                                    {education.date}
                                </p>
                                </div>
                                <div className="description-explicaction-title">
                                    <h4>
                                        {education.description1}
                                    </h4>
                                    <p className="description-explication">
                                       {education.description2} <br/>  {education.description3}
                                    </p>
                                </div>
                            </div>  
                        )
                    })}
                </div>
                <div className="title-Experience-Education">
                    <h3>
                        Careers
                    </h3>
                </div>
                <div>
                    {this.state.careers.map((careers) => {
                        return(
                            <div  className="description-dislike-Container">
                                <div>
                                <p className="description-dislike">
                                    {careers.title}
                                </p>
                                <p className="description-date">
                                    {careers.date}
                                </p>
                                </div>
                                <div className="description-explicaction-title">
                                    <h4>
                                        {careers.description1}
                                    </h4>
                                    <p className="description-explication">
                                       {careers.description2} <br/>  {careers.description3}
                                    </p>
                                </div>
                            </div>  
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Experience