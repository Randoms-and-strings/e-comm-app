"use client"
import React from "react";
import { NoOfProductsInCart } from "../hooks/clientHooks/cartCountHook";
import "../styles/component-styles.css";
import { usePathname } from "next/navigation";

type cartProps = {

}

export default function CartCount(props:cartProps){
    const path = usePathname();
    const [itemCount, increment, decrement] = NoOfProductsInCart();
    return(
        <p id="item-count">{itemCount}</p>
    );
}