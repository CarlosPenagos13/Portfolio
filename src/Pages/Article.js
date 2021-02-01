import React from "react"
import "../Components/Styles/Articles.css"

class Articles extends React.Component{
    state = { 
        article: [
            {
            title:"the master-builder",
            description1:"Lorem ipsum dolor sit amet, consetetur",
            description2:"sadipscing elitr, sed diam nonumy eirmod.",
            Date:"Abril 2020",
            image: "https://lh3.googleusercontent.com/KoMp698rDf4aEuR7dQW53F0igSR5FGZtWM7jAUDnKVx-d8_wvCEikocsVpEkDsSXidJH9w=s111",
            Like:"https://lh3.googleusercontent.com/_eMxO0BlxUATfyoujZOKPvtrZN2dDhZIwOFVAEsWpfHhCpuJrkTybw2DARtjKazLP2D1Pgo=s23",
            Compartir:"https://lh3.googleusercontent.com/8vVXzntfN2lHzuwpCig7pxiAqbZIIkGOUtA8kY870EGHXG9iRD4HtgwMVbe4QJ4t5iKGgQ=s20"
        },
            {
            title:"the master-builder",
            description1:"Lorem ipsum dolor sit amet, consetetur",
            description2:"sadipscing elitr, sed diam nonumy eirmod.",
            Date:"Abril 2020",
            image:"https://lh3.googleusercontent.com/kUjBI8xu5FlAHmjFELLVKiYNlYnS6HMCIGsvtCZV844jEg-fYyyyF-_c8M_yjh03Uxig=s111",
            Like:"https://lh3.googleusercontent.com/_eMxO0BlxUATfyoujZOKPvtrZN2dDhZIwOFVAEsWpfHhCpuJrkTybw2DARtjKazLP2D1Pgo=s23",
            Compartir:"https://lh3.googleusercontent.com/8vVXzntfN2lHzuwpCig7pxiAqbZIIkGOUtA8kY870EGHXG9iRD4HtgwMVbe4QJ4t5iKGgQ=s20"
            },
            {
            title:"the master-builder",
            description1:"Lorem ipsum dolor sit amet, consetetur",
            description2:"sadipscing elitr, sed diam nonumy eirmod.",
            Date:"Abril 2020",
            image: "https://lh3.googleusercontent.com/KoMp698rDf4aEuR7dQW53F0igSR5FGZtWM7jAUDnKVx-d8_wvCEikocsVpEkDsSXidJH9w=s111",
            Like:"https://lh3.googleusercontent.com/_eMxO0BlxUATfyoujZOKPvtrZN2dDhZIwOFVAEsWpfHhCpuJrkTybw2DARtjKazLP2D1Pgo=s23",
            Compartir:"https://lh3.googleusercontent.com/8vVXzntfN2lHzuwpCig7pxiAqbZIIkGOUtA8kY870EGHXG9iRD4HtgwMVbe4QJ4t5iKGgQ=s20"
        },
            {
            title:"the master-builder",
            description1:"Lorem ipsum dolor sit amet, consetetur",
            description2:"sadipscing elitr, sed diam nonumy eirmod.",
            Date:"Abril 2020",
            image:"https://lh3.googleusercontent.com/kUjBI8xu5FlAHmjFELLVKiYNlYnS6HMCIGsvtCZV844jEg-fYyyyF-_c8M_yjh03Uxig=s111",
            Like:"https://lh3.googleusercontent.com/_eMxO0BlxUATfyoujZOKPvtrZN2dDhZIwOFVAEsWpfHhCpuJrkTybw2DARtjKazLP2D1Pgo=s23",
            Compartir:"https://lh3.googleusercontent.com/8vVXzntfN2lHzuwpCig7pxiAqbZIIkGOUtA8kY870EGHXG9iRD4HtgwMVbe4QJ4t5iKGgQ=s20"
            },
            {
            title:"the master-builder",
            description1:"Lorem ipsum dolor sit amet, consetetur",
            description2:"sadipscing elitr, sed diam nonumy eirmod.",
            Date:"Abril 2020",
            image: "https://lh3.googleusercontent.com/KoMp698rDf4aEuR7dQW53F0igSR5FGZtWM7jAUDnKVx-d8_wvCEikocsVpEkDsSXidJH9w=s111",
            Like:"https://lh3.googleusercontent.com/_eMxO0BlxUATfyoujZOKPvtrZN2dDhZIwOFVAEsWpfHhCpuJrkTybw2DARtjKazLP2D1Pgo=s23",
            Compartir:"https://lh3.googleusercontent.com/8vVXzntfN2lHzuwpCig7pxiAqbZIIkGOUtA8kY870EGHXG9iRD4HtgwMVbe4QJ4t5iKGgQ=s20"
        },
            {
            title:"the master-builder",
            description1:"Lorem ipsum dolor sit amet, consetetur",
            description2:"sadipscing elitr, sed diam nonumy eirmod.",
            Date:"Abril 2020",
            image:"https://lh3.googleusercontent.com/kUjBI8xu5FlAHmjFELLVKiYNlYnS6HMCIGsvtCZV844jEg-fYyyyF-_c8M_yjh03Uxig=s111",
            Like:"https://lh3.googleusercontent.com/_eMxO0BlxUATfyoujZOKPvtrZN2dDhZIwOFVAEsWpfHhCpuJrkTybw2DARtjKazLP2D1Pgo=s23",
            Compartir:"https://lh3.googleusercontent.com/8vVXzntfN2lHzuwpCig7pxiAqbZIIkGOUtA8kY870EGHXG9iRD4HtgwMVbe4QJ4t5iKGgQ=s20"
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
                {this.state.article.map((article) => {
                return(
                    <div key={article.id}>
                        <figure className="Articles-Container-img">
                            <img width="280px" src={article.image} alt="Img1.com"/>
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
                                <img src={article.Compartir} width="16px" alt=""/>
                            </figure>
                            <figure>
                                <img src={article.Like} width="16px" alt=""/>
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