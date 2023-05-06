import '../../styles/engine/GameHeader.css'

export interface IGameHeader{
    title:string,
    github:string,
    link?:string
}

export default function GameHeader({title,github,link} :IGameHeader)
{
    return(
        <div className='headerDiv'>
            <div className="runDivHeader">
                            <button className="optionsButtonHeader optionsButton">
                                <img src="/JKportfolio/fonts/icons8-play-30.png"/>
                                {title}
                            </button>
            </div>
            <div className="debugDivHeader">
                <button className="optionsButtonHeader optionsButton">
                    <img src="/JKportfolio/fonts/icons8-bug-30.png"/>
                    {title}
                </button>
            </div>
            <div className="sourceCodeDivHeader">
            {link && <a href={link}> 
                <img src="/JKportfolio/fonts/icons8-source-code-50.png"/>
                    {title}
                </a>}
            </div>
        </div>
    )
}
