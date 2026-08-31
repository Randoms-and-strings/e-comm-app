"use client";
import cartStyle from "../styles/cart.module.css";
import { usecartAddition } from "../hooks/clientHooks/handleCartCounts";
type child = {
    children: React.ReactNode;
}
export default function DeleteFromCartBtn(props:child){
    const {decrement} = usecartAddition();
    return (
        <a onClick={decrement} className={cartStyle.delete}>{props.children}</a>
    );
}