"use client"
import React from "react";
import { NoOfProductsInCart } from "../hooks/cartCountHook";
import "../styles/component-styles.css";

type cartProps = {

}

export default function CartCount(props:cartProps){
    const [itemCount, increment, decrement] = NoOfProductsInCart();
    return(
        <p id="item-count">{itemCount}</p>
    );
}