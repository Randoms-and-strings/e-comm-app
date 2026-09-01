"use client";
import homestyles from "../styles/home.module.css"
import { useState } from "react";
import AddToCartBtn from "./addToCartBtn";
type homeCardProp = {
    key:string,
    imageLink:string,
    productName: string,
    productCost: number,
    productQty: number,
}
export default function HomeCard(props:homeCardProp){
    // const {increment} = usecartAddition();
    const [isImageHovered, changeIsImageHovered] = useState(false);
    function handleTouchStart(){
        if(!isImageHovered){
            changeIsImageHovered(true);
        }
    }
    function handleTouchEnd(){
        if(isImageHovered){
            changeIsImageHovered(false);
        }
    }
    return(
        <div key={props.key} className={homestyles.card}>
            <div className={homestyles.cardImg}>
  
              <img   
              src={props.imageLink}  
              onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
              onMouseEnter={handleTouchStart} onMouseOut={handleTouchEnd}
              />
              
            </div>
            <div style={isImageHovered?{display:"none"}:{display:"block"}}  className={homestyles.cardTextsContainer}>
             
                <h2 className={homestyles.cardHeading}>{props.productName}</h2>
                <div  className={homestyles.cardQtyAndCostContainer}>
                  <p className={homestyles.cardPrice}>Cost: ${props.productCost}</p>
                  <p className={homestyles.cardQty}>Qty: <span style={props.productQty<6?{color:"red"}:{color:"white"}}>{props.productQty}</span> Left</p>
                </div>
                
                <AddToCartBtn innerText="Add To Cart"/>
              
            </div>

            
        </div>

    );
}