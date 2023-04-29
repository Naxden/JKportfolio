import "../../styles/CardOptions.css"

export interface ICardOptions{
    gameName :string
}

export default function CardOptions({gameName} :ICardOptions){


    return(
    <div className="options">
        <div className="runDiv">
            <button className="optionsButton">
                <img src="/fonts/icons8-play-30.png"/>
                {gameName}
            </button>
        </div>
        <div className="debugDiv">
            <button className="optionsButton">
                <img src="/fonts/icons8-bug-30.png"/>
                {gameName}
            </button>
        </div>
        <div className="sourceCodeDiv">
            <button className="optionsButton">
                <img src="/fonts/icons8-source-code-50.png"/>
                {gameName}
            </button>
        </div>
        <div>

        </div>
        <div className="line"></div>
    </div>)
}