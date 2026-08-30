"use client";
import { useState } from "react";
import cartStyle from "../styles/cart.module.css";

type button = {
    innertext:string
}
export default function ButtonIdempotent(props:button){
    const [isClicked, changeIsClicked] = useState(false);
    function handleClick(){
        // e.preventDefault();
        if(!isClicked){
            changeIsClicked(true);
        }
    }
    return(
        <button className={cartStyle.placeOrderButton} onClick={handleClick}
        disabled={isClicked}
        >
            {props.innertext}
        </button>
    );
}