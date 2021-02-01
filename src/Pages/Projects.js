import React from "react"
import "../Components/Styles/Projects.css"

class Projects extends React.Component {
    state = {
        projects:[
            {
                image:"https://www.esan.edu.pe/apuntes-empresariales/2016/10/25/proyectoempresarial_principal.jpg"
            },
            {
                image:"https://www.esan.edu.pe/apuntes-empresariales/2016/10/25/proyectoempresarial_principal.jpg"
            },
            {
                image:"https://www.esan.edu.pe/apuntes-empresariales/2016/10/25/proyectoempresarial_principal.jpg"
            },
            {
                image:"https://www.esan.edu.pe/apuntes-empresariales/2016/10/25/proyectoempresarial_principal.jpg"
            },
            {
                image:"https://www.esan.edu.pe/apuntes-empresariales/2016/10/25/proyectoempresarial_principal.jpg"
            },
            {
                image:"https://www.esan.edu.pe/apuntes-empresariales/2016/10/25/proyectoempresarial_principal.jpg"
            },
            {
                image:"https://www.esan.edu.pe/apuntes-empresariales/2016/10/25/proyectoempresarial_principal.jpg"
            },
            {
                image:"https://www.esan.edu.pe/apuntes-empresariales/2016/10/25/proyectoempresarial_principal.jpg"
            },
            {
                image:"https://www.esan.edu.pe/apuntes-empresariales/2016/10/25/proyectoempresarial_principal.jpg"
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
                <div className="projects-first">
                {this.state.projects.map((projects) => {
                return(
                    <div>
                        <figure>
                            <img src={projects.image} width="320px"height="250px" alt="Projects.img" />
                        </figure>
                    </div>
                    )
                })}
                </div>
            </div>
    )
    }
}

export default Projects