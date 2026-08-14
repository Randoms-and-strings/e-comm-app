"use client"
import { useState, useEffect } from "react";

export function NoOfProductsInCart():[number, ()=>void, ()=>void]{
    const [itemCount, changeItemCount] = useState(0);

    const increment = () =>{
        changeItemCount(itemCount + 1);
    }

    const decrement = () =>{
        changeItemCount(itemCount - 1);
    }

    return [itemCount, increment, decrement];
}