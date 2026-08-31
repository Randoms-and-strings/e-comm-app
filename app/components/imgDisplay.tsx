"use client";
import {usecartAddition} from "../hooks/clientHooks/handleCartCounts";
import homestyles from "../styles/home.module.css"
import {useState} from "react";
type homeCardProp = {
    key:string,
    imageLink:string,
    productName: string,
    productCost: number,
    productQty: number,
}
export default function HomeCard(props:homeCardProp){
    const {increment} = usecartAddition();
    const [isImageHovered, changeIsImageHovered] = useState(false);
      
    return(
        <div key={props.key} className={homestyles.card}>
            <div className={homestyles.cardImg}>
              <img   onMouseOver={()=>{
                
                  changeIsImageHovered(true);
                
              }} onMouseOut={()=>{
                changeIsImageHovered(false);
              }} src={props.imageLink}  />
            </div>
            <div style={isImageHovered?{display:"none"}:{display:"block"}}  className={homestyles.cardTextsContainer}>
              <h2 className={homestyles.cardHeading}>{props.productName}</h2>
              <div  className={homestyles.cardQtyAndCostContainer}>
                <p className={homestyles.cardPrice}>Cost: ${props.productCost}</p>
                <p className={homestyles.cardQty}>Qty: <span style={props.productQty<6?{color:"red"}:{color:"white"}}>{props.productQty}</span> Left</p>
              </div>
              <button onClick={increment} className={homestyles.addToCart}>Add to cart</button>
            </div>
            
        </div>

    );
}