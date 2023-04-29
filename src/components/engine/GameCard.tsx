import "../../styles/engine/GameCard.css"

interface IGameCard{
    title :string,
    description :string,
    imageUrl :string,
    column :number,
    row :number
}

export default function GameCard({title, description, imageUrl, row, column}:IGameCard)
{

    return(
    <section className="card" style={{ gridRow: row, gridColumn: column}} >
        <img src={imageUrl} />
        <article className="content">
            <header className="header">
                {title}
            </header>
            <p>
                {description}
            </p>
        </article>
    </section>
    )
}