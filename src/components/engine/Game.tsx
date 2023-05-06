import React, {useState,useEffect} from 'react'
import GameHeader, {IGameHeader} from './GameHeader'
import GameBoard, {IGameBoard, StringDictionary} from './GameBoard'
import GameFooter, { IGameFooter } from './GameFooter'

interface IGame {
    UID :string, 
    isMobileGame :Boolean
}

interface IGameHTML{
    Header: React.ReactElement<IGameHeader>,
    GameBoards: React.ReactElement<IGameBoard>,
    Footer: React.ReactElement<IGameFooter>
}

export default function Game({UID, isMobileGame}:IGame){
    const [structure,setStructure] = useState<IGameHTML>()

    useEffect(()=>{
        GetData(UID)
       
    },[])

    const LoadHeader = async (json:any) => {
        const header = (<GameHeader title={json.title} github='' />)
        return header;
    }

    const LoadGameBoard = async (json:any, jsonImages: any) =>{
        const featuresContent = new StringDictionary()
        const featureNumber = json.feature_number

        for(let i = 1; i <= featureNumber; i++)
        {
            const title = json[`feature_${i}_title`]
            const description = json[`feature_${i}`]
            featuresContent.AddKeyValuePair(title,description)
        }
        
        const imagesUrls = new StringDictionary()
        const imagesNumber = jsonImages.images_number

        for(let i = 1; i <= imagesNumber; i++)
        {
            const image = jsonImages[`images_${i}`]
            imagesUrls.AddKeyValuePair(`${i}`, image)
        }

        return (<GameBoard 
            introduction={json.introduction} 
            features={featuresContent}
            images={imagesUrls}
            isMobileGame={isMobileGame}
        />)
    } 

    // Data loading
    const GetData = async (ID:string) => {
        const response = await fetch(`/JKportfolio/data/game-${ID}.json`)
        const json = await response.json()

        const responseImages = await fetch(`/JKportfolio/images-data/image-${ID}.json`)
        const jsonImages = await responseImages.json()

        setStructure(
            {
                Header: await LoadHeader(json),
                GameBoards: await LoadGameBoard(json, jsonImages),
                Footer: (<GameFooter/>)
            }
        )
    }
    



    return(
        <div>
            {
               structure?.Header
            }
            {
                structure?.GameBoards
            }
            {
                structure?.Footer
            }
        </div>
    )
}