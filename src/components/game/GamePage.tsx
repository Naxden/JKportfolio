import {useLocation} from 'react-router-dom'
import Game from '../engine/Game'


export default function GamePage(){
    const location = useLocation()
    const id  = location.state.id
    let mobile = false
    if(id === 'veggies')
        mobile = true

    return(
        <div>
            <Game UID={id} isMobileGame={mobile}/>
        </div>
    )
}