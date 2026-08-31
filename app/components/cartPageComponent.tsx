"use client";
import cartStyle from "../styles/cart.module.css";
import ProductInfoComponent from "./productInfoCard";
import { trashCan, checkicon } from "../assets/fontAwesome";
import { useBackgroundBlur } from "../hooks/clientHooks/handleBackgroundBlur";
import { useRef } from "react";
// type child = {
//     children: ReactNode
// }
export default function CartPageComponent(){
    const {isBlur} = useBackgroundBlur();
    const animationButtonRef = useRef<null|HTMLButtonElement>(null);
    return(
        <div style={isBlur?{filter:"blur(1.5rem)"}:undefined}>
            <h1 className={cartStyle.h1}>Checkout-order</h1>
                <ProductInfoComponent 
                imgSrc="https://tse4.mm.bing.net/th/id/OIP.Ena9yaTNPcaR7kUrDrM94wAAAA?r=0&w=300&h=300&rs=1&pid=ImgDetMain&o=7&rm=3"
                allParagraphTexts={["65947738495784", "product name here", "5", "$50"]}
                allParagraphTextsKey={["Order-id", "product name", "QTY", "Cost"]}
                hasEditDeleteIcon={trashCan}
                hasTotalValue="$250"
                />
            <div className={cartStyle.totalPriceContainer}>
                <h2><b>TOTAL:</b></h2>
                <h2 className={cartStyle.total}><b>=$250</b></h2>
            </div>
            
        </div>
    );
}