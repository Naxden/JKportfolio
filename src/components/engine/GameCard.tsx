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


    if(isMobile){
        return(
            <section className={style} style={{ gridRow: row, gridColumn: column}} >
            <img src={imageUrl} />
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
        <img src={imageUrl} />
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