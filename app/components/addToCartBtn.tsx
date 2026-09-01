"use client";
import homestyles from "../styles/home.module.css";
import { usecartAddition } from "../hooks/clientHooks/handleCartCounts";


type child = {
    children?: React.ReactNode,
    innerText: string,
}
export default function AddToCartBtn(props:child){
    const {increment} = usecartAddition()
    return(
        <button onClick={increment} className={homestyles.addToCart}>{props.children||props.innerText}</button>
    );
}