import { useEffect, useState } from 'react'
import '../../styles/engine/GameBoard.css'
import GameCard from './GameCard'
import React from 'react'

export class StringDictionary {
    private Key :Array<string>
    private Value :Array<string>
    public Size :number

    constructor() {
        this.Key = new Array<string>
        this.Value = new Array<string>
        this.Size = 0
    }

    public AddKeyValuePair(key :string, value :string){
        if(key == ""){
            throw new Error("key value cannot be empty");
        }
        
        this.Key.push(key)
        this.Value.push(value)
        this.Size += 1;
    }

    public GetValueOfIndex(index :number) :KeyValuePairStringDictionary{
        if(this.IsIndexInvalid(index)){
            throw new RangeError()
        }

        const key = this.Key[index]
        const value = this.Value[index]

        return { title: key, content: value}
    }

    private IsIndexInvalid(indexToValidate :number) :Boolean{
        const isIndexValid = (indexToValidate < this.Size)
        return isIndexValid == false
    }
    
}

interface KeyValuePairStringDictionary{
    title :string,
    content :string
}

export interface IGameBoard{
    introduction :string,
    features :StringDictionary,
    images :StringDictionary,
    isMobileGame :Boolean
    json :any,
    jsonImages :any
}

//temporarli added json
function PrepareCards (features :StringDictionary, images :StringDictionary, isMobile :Boolean, json :any, jsonImages :any) :JSX.Element[] {
    let results : JSX.Element[] = []

    results.push(<GameCard title="Introduction" description={json["introduction"]} imageUrl={jsonImages["main"]} row={2} column={2} key={Math.floor(Math.random() * 100+ (json["feature_number"])+ 1)} isMobile={isMobile}/>)
    if(isMobile){
        
        results = CreateCardsForSmallScreen(results,features,images,isMobile)
    }
    else{
        
        results = CreateCardsForBigScreen(results, features, images, isMobile)
    }
   

    return results
} 

const CreateCardsForBigScreen = (Cards :JSX.Element[], features :StringDictionary, images :StringDictionary, isMobile :Boolean) => {
    let row = 2
    let column = 4


    for(let i = 0; i < features.Size; i++){
        const keyValuePair = features.GetValueOfIndex(i);
        Cards.push(CreateCard(keyValuePair, images.GetValueOfIndex(i).content, row, column, i, isMobile))


        if(column == 4){
            column = 2
            row+=2
            continue
        }
        column += 2
    }

    return Cards
}

const CreateCardsForSmallScreen = (Cards :JSX.Element[], features :StringDictionary, images :StringDictionary, isMobile :Boolean) => {
    const column  = 2;
    let row = 4;

    for(let i = 0; i < features.Size; i++){
        const keyValuePair = features.GetValueOfIndex(i);
        Cards.push(CreateCard(keyValuePair, images.GetValueOfIndex(i).content, row, column, i, isMobile))
        row+=2
    }

    return Cards
}




const CreateCard = (valuePair :KeyValuePairStringDictionary, image :string, rowNumber :number, columnNumber :number, id :number, isMobile :Boolean) => {
    return (<GameCard title={valuePair.title} description={valuePair.content} imageUrl={image} row={rowNumber} column={columnNumber} key={id} isMobile={isMobile}/>)
}

export default function GameBoard({introduction, features, images, isMobileGame, json, jsonImages}:IGameBoard){
    const [cards, setCards] = useState<JSX.Element[]>(PrepareCards(features, images, isMobileGame, json, jsonImages))
    const style :string = isMobileGame ?  'mainBoardMobileGame' : 'mainBoard' 

   
    return(
        <div className={style}>
            {cards}
        </div>
    )
}


