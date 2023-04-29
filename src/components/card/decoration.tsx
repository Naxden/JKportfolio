import '../../styles/Decoration.css'
import React, {useState, useRef, useEffect} from 'react'

interface ILinearDecorator {
     children?: React.ReactNode
} 


export default function LineDecorator(properties:ILinearDecorator)
{
    const [line, setLine] = useState("")
    const  divRef = useRef<HTMLDivElement>(null)


    useEffect(()=>{
        if(divRef.current){
            const divStyle =  window.getComputedStyle(divRef.current)
            const fontSize = divStyle.getPropertyValue('font-size')
            const fontSizeInPixels = parseFloat(fontSize)
            
            const lineHeight = parseFloat(divStyle.getPropertyValue('height'))
            const numberOfLines = lineHeight / fontSizeInPixels

            let str = ""
            for(let i=0; i<numberOfLines+15;i++)
            {
                str += "|\n"
            }

            setLine(str)
        }
    }, [])


    const HandleClick = (event :React.MouseEvent<HTMLDivElement>) =>{
        const div = event.target as ILinearDecorator
    }
   

    


    return(
        <div className='lineDecorator' ref={divRef}>
            <div className='decoratorDiv'>
                <div onClick={HandleClick} className='squareVS'>
                    -
                </div>
                <pre>
                    {line}
                </pre>               
           </div>
            {properties.children}
        </div>
    )
}