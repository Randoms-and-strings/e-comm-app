"use client";
// import { height } from "@fortawesome/free-brands-svg-icons/fa11ty";
import { JSX, useRef } from "react";

type inputProp = {
    inputValue:string,
}

export default function InputValue(props:inputProp){
    const textareaRef = useRef<HTMLTextAreaElement|null>(null);
    
    function handleChange(event:any){
        if(textareaRef.current){
            // if(textareaRef.current.scrollWidth > textareaRef.current.clientWidth){

            // }
            // textareaRef.current.value = ;
            console.log(event.key);
        }
    }
    return (
        <textarea  onChange={handleChange} ref={textareaRef} style={{height:"100%", width:"100%"}} >
        
        </textarea>
    );
}