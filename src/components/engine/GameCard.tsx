import React from "react"
import "../../styles/engine/GameCard.css"

interface IGameCard{
    title :string,
    description :string,
    imageUrl :string,
    column :number,
    row :number,
    isMobile :Boolean
}

export default function GameCard({title, description, imageUrl, row, column, isMobile}:IGameCard)
{
    const style = isMobile ? 'cardMobile' : 'card' 
    const descriptionSplited = description.split('\n')
    const ampr = /&/
    let images = null
    let img :string = imageUrl
    if(ampr.test(imageUrl)){
        images = imageUrl.split('&')
        img = images[0]
    }



    if(isMobile){
        return(
            <section className={style} style={{ gridRow: row, gridColumn: column}} >
            {( img !== "" && <img src={img}  />)}
            <article className="content">
                <header className="header">
                    {title}
                </header>
                <p>
                    {descriptionSplited.map((line, index) =>(
                        <React.Fragment key={index}>
                            {line}
                            <br/>
                        </React.Fragment>
                    ))}
                </p>
            </article>
        </section>
        )
    }


    return(
    <section className={style} style={{ gridRow: row, gridColumn: column}} >
        <img src={img} />
        <article className="content">
            <header className="header">
                {title}
            </header>
                <p>
                    {descriptionSplited.map((line, index) =>(
                        <React.Fragment key={index}>
                            {line}
                            <br/>
                        </React.Fragment>
                    ))}
                </p>
        </article>
    </section>
    )
}