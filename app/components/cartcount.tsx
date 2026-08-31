"use client";
import "../styles/component-styles.css";
import  {usecartAddition}  from "../hooks/clientHooks/handleCartCounts";



export default function CartCount(){
    // const path = usePathname();
    const {itemCount} = usecartAddition();
    return(
        <p id="item-count">{itemCount}</p>
    );
}