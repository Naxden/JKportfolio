import { useNavigate } from 'react-router'
import '../../styles/engine/GameHeader.css'

export interface IGameHeader{
    title:string,
    github:string,
    runLink:string
}

export default function GameHeader({title,github,runLink} :IGameHeader)
{
    const navigate = useNavigate()

    const handleSourceCodeClick = ()=>{
        const link = document.createElement('a');
        link.href = github;
        link.target = '_blank';
        link.click();
    }

    const handleRunClick = () =>{
        const link = document.createElement('a');
        link.href = runLink;
        link.target = '_blank';
        if(runLink) link.click();
    }

    const handleOnClick = ()=>{
        navigate('/JKportfolio/')
    }


    return(
        <div className='headerDiv'>
            <div className="runDivHeader">
                            <button className="optionsButtonHeader optionsButton" onClick={handleRunClick}>
                                <img src="/JKportfolio/fonts/icons8-play-30.png"/>
                                {title}
                            </button>
            </div>
            <div className="debugDivHeader">
                <button className="optionsButtonHeader optionsButton" onClick={handleOnClick}>
                    <img src="/JKportfolio/fonts/icons8-home-64.png"/>
                    Home
                </button>
            </div>
            <div className="sourceCodeDivHeader">
            <button className="optionsButtonHeader optionsButton" onClick={handleSourceCodeClick}> 
                <img src="/JKportfolio/fonts/icons8-source-code-50.png"/>
                    {title}
                </button>
            </div>
        </div>
    )
}
