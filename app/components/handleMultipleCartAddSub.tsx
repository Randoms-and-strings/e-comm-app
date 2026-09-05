"use client";
import viewProduct from "../styles/view-products.module.css";
import { useState } from "react";

// const multipleCartAddsub = createContext<number|undefined>(undefined)
export default function HandleMultipleAddSub(){
    const [count, changeCount] = useState(0);
    const increment = () => changeCount(count+1);
    const decrement = () => {
        if(count > 0){
            return changeCount(count-1)}
        }
    return(
        <div className={viewProduct.dynamicAddToCart}>
            <a onClick={decrement} className={viewProduct.removeNumber}>-</a>
            <p className={viewProduct.counter}>{count}</p>
            <a onClick={increment} className={viewProduct.addNumber}>+</a>
        </div>
        // <multipleCartAddsub.Provider value={}>
        //     {children}
        // </multipleCartAddsub.Provider>
    );
}