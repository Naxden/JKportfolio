import {useNavigate} from 'react-router-dom'
import '../../styles/Card.css'
import LineDecorator from './decoration'
import { useEffect } from 'react'

interface ICardProperties {
    imageSource? :string,
    title? :string,
    description? :string,
    UID:string
}

interface IGameID{
    id:string
}

export default function Card({ imageSource, title, description, UID } :ICardProperties)
{   
    const navigate = useNavigate()

    const HandleMouseOver = (event :React.MouseEvent<HTMLButtonElement>) => {
        const btn = event.target as HTMLButtonElement
        btn.innerText = `LoadGame(${UID})`
    }

    const HandleMouseLeft = (event :React.MouseEvent<HTMLButtonElement>) => {
        const btn = event.target as HTMLButtonElement
        btn.innerText = "LoadGame()"
    }

    const HandleClick = (options:string) =>{
        navigate('/game/', { state: {id:UID}})
    }


    return(
        <LineDecorator>
            <div className='cardDiv'>
                <div className='titleDiv'>
                    <span>{`${title}`}</span>
                    <button onMouseOver={HandleMouseOver} onMouseLeave={HandleMouseLeft} className='cardBtn' onClick={() => HandleClick(UID)}>LoadGame()</button>
                </div>
                <div className='descriptionDiv border'>
                    <span>{`${description}`}</span>
                </div>
                <div  className='imageDiv'>                                <img src={imageSource}/>
                </div>
            </div>
        </LineDecorator>    
    )
}