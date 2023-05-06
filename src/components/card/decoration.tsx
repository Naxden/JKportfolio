import '../../styles/Decoration.css'
import React, { useState, useRef, useEffect } from 'react'

interface ILinearDecorator {
    children?: React.ReactNode
}




export default function LineDecorator(properties: ILinearDecorator) {
    const [line, setLine] = useState("")
    const [resizeObserver, setResizeObserver] = useState<ResizeObserver | null>(null);
    const divRef = useRef<HTMLDivElement>(null)

    const handleResize = (entries: ResizeObserverEntry[]) => {
        for (let entry of entries) {
          if (entry.target === divRef.current) {
            Decorate();
            break;
          }
        }
      };

    function Decorate() {
        if (divRef.current) {
            const divStyle = window.getComputedStyle(divRef.current)
            const fontSize = divStyle.getPropertyValue('font-size')
            const fontSizeInPixels = parseFloat(fontSize)
    
            const numberOfLines = divRef.current.offsetHeight / fontSizeInPixels
    
            let str = ""
            for (let i = 0; i < numberOfLines + 2; i++) {
                str += "|\n"
            }
    
            setLine(str)
        }
    }

    useEffect(() => {
        if (!resizeObserver) {
            const observer = new ResizeObserver(handleResize);
            setResizeObserver(observer);
          }

        if (divRef.current && resizeObserver) {
        resizeObserver.observe(divRef.current);
        }
    

        Decorate()

        return () => {
            if (divRef.current && resizeObserver) {
              resizeObserver.unobserve(divRef.current);
            }
          };

    }, [divRef, resizeObserver])

   

    const HandleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const div = event.target as ILinearDecorator
    }





    return (
        <div className='lineDecorator' ref={divRef} >
            <div className='decoratorDiv'>
                <div onClick={HandleClick} className='squareVS'>
                    -
                </div>
                <pre>
                    {line}
                </pre>
            </div>
            <div className='contentDiv'>
                {properties.children}
            </div>
        </div>
    )

   
}