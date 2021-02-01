import React from "react"
import "../Components/Styles/Projects.css"

class Projects extends React.Component {
    state = {
        projects:[
            {
                image:"https://d9b6rardqz97a.cloudfront.net/wp-content/uploads/2019/10/23221838/Junta_Directiva-482x390.jpg"
            },
            {
                image:"https://d9b6rardqz97a.cloudfront.net/wp-content/uploads/2019/10/23221838/Junta_Directiva-482x390.jpg"
            },
            {
                image:"https://d9b6rardqz97a.cloudfront.net/wp-content/uploads/2019/10/23221838/Junta_Directiva-482x390.jpg"
            },
            {
                image:"https://d9b6rardqz97a.cloudfront.net/wp-content/uploads/2019/10/23221838/Junta_Directiva-482x390.jpg"
            },
            {
                image:"https://d9b6rardqz97a.cloudfront.net/wp-content/uploads/2019/10/23221838/Junta_Directiva-482x390.jpg"
            },
            {
                image:"https://d9b6rardqz97a.cloudfront.net/wp-content/uploads/2019/10/23221838/Junta_Directiva-482x390.jpg"
            },
            {
                image:"https://d9b6rardqz97a.cloudfront.net/wp-content/uploads/2019/10/23221838/Junta_Directiva-482x390.jpg"
            },
            {
                image:"https://d9b6rardqz97a.cloudfront.net/wp-content/uploads/2019/10/23221838/Junta_Directiva-482x390.jpg"
            },
            {
                image:"https://d9b6rardqz97a.cloudfront.net/wp-content/uploads/2019/10/23221838/Junta_Directiva-482x390.jpg"
            }
        ]
    }
    render(){
        return(
            <div className="Background-projects">
                <div className="title-projects">
                    <h2>
                        Projects
                    </h2>
                </div>
                <div className="Container-projects">
                {this.state.projects.map((projects) => {
                return(
                    <div className="projects">
                        <figure className="projects-image">
                            <img src={projects.image} alt="Projects.img" />
                        </figure>
                        <span className="projects-overlay">
                            <p className="Grid-Projects">
                                <span className="NamePro">Project Name</span>
                                <span className="React">React JS / Node</span>
                            </p>
                            <button className="button-Learn">
                                Learn More
                            </button>
                        </span>
                    </div>
                    )
                })}
                </div>
            </div>
    )
    }
}

export default Projects