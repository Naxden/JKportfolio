import '../../styles/engine/Header.css'

export interface IGameHeader{
    title:string,
    github:string,
    link?:string
}

export default function GameHeader({title,github,link} :IGameHeader)
{
    return(
        <div className='headerDiv'>
            <span>{title}</span>
            <a href={github}>source</a>
            {link && <a href={link}>download</a>}
        </div>
    )
}
