import { useState } from 'react'
import '../../styles/engine/GameBoard.css'
import GameCard from './GameCard'

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
}


function PrepareCards (features :StringDictionary, images :StringDictionary) :JSX.Element[] {
    let results : JSX.Element[] = []

    if(window.innerWidth > 960){
        results = CreateCardsForBigScreen(results,features,images)
    }   
    else{
        results = CreateCardsForSmallScreen(results,features,images)
    }

    return results
} 

const CreateCardsForBigScreen = (Cards :JSX.Element[], features :StringDictionary, images :StringDictionary) => {
    let row = 2
    let column = 2

    for(let i = 0; i < features.Size; i++){
        const keyValuePair = features.GetValueOfIndex(i);
        Cards.push(CreateCard(keyValuePair, images.GetValueOfIndex(i).content, row, column, i))


        if(column == 4){
            column = 2
            row+=2
            continue
        }
        column += 2
    }

    return Cards
}

const CreateCardsForSmallScreen = (Cards :JSX.Element[], features :StringDictionary, images :StringDictionary) => {
    const column  = 2;
    let row = 2;

    for(let i = 0; i < features.Size; i++){
        const keyValuePair = features.GetValueOfIndex(i);
        Cards.push(CreateCard(keyValuePair, images.GetValueOfIndex(i).content, row, column, i))
        row+=2
    }

    return Cards
}


const CreateCard = (valuePair :KeyValuePairStringDictionary, image :string, rowNumber :number, columnNumber :number, id :number) => {
    return (<GameCard title={valuePair.title} description={valuePair.content} imageUrl={image} row={rowNumber} column={columnNumber} key={id}/>)
}

export default function GameBoard({introduction, features, images, isMobileGame}:IGameBoard){
    const [cards, setCards] = useState<JSX.Element[]>(PrepareCards(features, images))
    const style :string = isMobileGame ?  'mainBoardMobileGame' : 'mainBoard' 


    return(
        <div className={style}>
            {cards}
        </div>
    )
}