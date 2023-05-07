import {useNavigate} from 'react-router-dom'
import '../../styles/Card.css'
import LineDecorator from './decoration'
import { useEffect } from 'react'

interface ICardProperties {
    imageSource? :string,
    title? :string,
    description? :string,
    UID:string,
    linkSource: string,
    linkToRun: string
}

interface IGameID{
    id:string
}

export default function Card({ imageSource, title, description, UID, linkSource,linkToRun } :ICardProperties)
{   
    const navigate = useNavigate()

    const HandleSourceClick = () =>{
        const link = document.createElement('a');
        link.href = linkSource;
        link.target = '_blank';
        link.click();
    }
    const HandleRunClick = () =>{
        const link = document.createElement('a');
        link.href = linkToRun;
        link.target = '_blank';
        link.click();
    }
   

    const HandleMouseOver = (event :React.MouseEvent<HTMLButtonElement>) => {
        const btn = event.target as HTMLButtonElement
        btn.innerText = `LoadGame(${UID})`
    }

    const HandleMouseLeft = (event :React.MouseEvent<HTMLButtonElement>) => {
        const btn = event.target as HTMLButtonElement
        btn.innerText = "LoadGame(...)"
    }

    const HandleClick = (options:string) =>{
        navigate('./game/', { state: {id:UID}})
    }


    return(
        <LineDecorator>
            <div className='cardDiv'>
                <div className='textDiv'>
                    <div className='titleDiv'>
                        <span>{`${title}`}</span>
                        <button onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeft} className='cardBtn' onClick={() => HandleClick(UID)}>LoadGame(...)</button>
                    </div>
                    <div className='descriptionDiv border'>
                        <span>{`${description}`}</span>
                    </div>
                    <div className='optionsDiv'>
                        <div className="runDiv"  style={{gridColumn: 2}}>
                            <button className="optionsButton" onClick={HandleRunClick}>
                                <img src="/JKportfolio/fonts/icons8-play-30.png"/>
                                {UID}
                            </button>
                        </div>
                        <div className="sourceCodeDiv" style={{gridColumn: 4}}>
                            <button className="optionsButton"  onClick={HandleSourceClick}>
                                <img src="/JKportfolio/fonts/icons8-source-code-50.png"/>
                                {UID}
                            </button>
                        </div>
                    </div>
                </div>
                <div  className='imageDiv'>                                <img src={imageSource}/>
                </div>
                
                
            </div>
        </LineDecorator>    
    )
}