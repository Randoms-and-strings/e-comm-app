"use client";
import { xMark } from "../assets/fontAwesome";
import animeStyles from "../styles/animations.module.css";
import {useAnimation} from "../hooks/clientHooks/handleShowAnimation";
 


type child = {
    children:React.ReactNode,
    title:string,
    description?:string,
    type?:string,
}
export default function LoaderAnimation(props:child){
      
    const {isButtonClicked} = useAnimation();
    
    return(
        <div style={isButtonClicked?{display:"flex"}:{display:"none"}} className={animeStyles.container}>
            {/* <div className={animeStyles.iconBackground}></div> */}
            <div>
                {props.children}
            <h1 style={props.type=="error"?{color:"red"}:undefined} className={animeStyles.title}>{props.title}</h1>
            <p className={animeStyles.description}>{props.description}</p>
            </div>
            <a href="/cart">{xMark}</a>
            {/* redirect to cart or profile */}
        </div>
    );
}