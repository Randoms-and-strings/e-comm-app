"use client";
import cartStyle from "../styles/cart.module.css";
import { useBackgroundBlur } from "../hooks/clientHooks/handleBackgroundBlur";
import {useAnimation} from "../hooks/clientHooks/handleShowAnimation";

type button = {
    innertext:string,
}
export default function ButtonIdempotent(props:button){
    const {isButtonClicked, ShowAnimation} = useAnimation();
    const {blurBackground} = useBackgroundBlur();
    function handleClick(){
        // e.preventDefault();
        if(!isButtonClicked){
            
            blurBackground();
            ShowAnimation();

        }
    }
    return(
        
        <button style={isButtonClicked?{visibility:"hidden"}:undefined} className={cartStyle.placeOrderButton} onClick={handleClick}
        disabled={isButtonClicked}
        >
            {props.innertext}
        </button>
    );
}