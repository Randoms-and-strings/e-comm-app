"use client"
import homestyles from "./styles/home.module.css"
import handleUuid from "./hooks/serverHooks/handleKeyUuid";
import { useRef, useState } from "react";

export default function Home() {
  
  type homeCardLayout = {
    productName: string,
    productCost: number,
    qty: number,
    link: string,
  };



  const mockResponse:homeCardLayout[] = [
    {productName: "Mock1",
      productCost: 5,
      qty: 5,
      link: "https://images.pexels.com/photos/15878150/pexels-photo-15878150.jpeg?cs=srgb&dl=pexels-jaswant-shekhawat-2356768-15878150.jpg&fm=jpg"
    },
    {productName: "Mock2",
      productCost: 4,
      qty: 57,
      link:"https://img.freepik.com/premium-psd/stylish-blue-plaid-shirt-psd-white-background_670382-239068.jpg"
    },
    {productName: "Mock3",
      productCost: 60,
      qty: 57,
      link:"https://cdn.pixabay.com/photo/2024/01/20/01/54/ai-generated-8520240_1280.jpg"
    },
    {productName: "Mock3",
      productCost: 60,
      qty: 57,
      link:"https://static.vecteezy.com/system/resources/thumbnails/028/252/048/small_2x/men-s-t-shirt-realistic-mockup-in-different-colors-ai-generated-photo.jpg"
    },
    {productName: "Mock3",
      productCost: 60,
      qty: 57,
      link:"https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726721_1280.jpg"
    },
    {productName: "Mock3",
      productCost: 60,
      qty: 57,
      link:"https://img.freepik.com/premium-photo/white-t-shirt-with-blue-red-background_1103290-12159.jpg"
    },
  ];
 

  return (
    <section className={homestyles.cardContainer}>
    {mockResponse.map((item:homeCardLayout)=>{
      const imageRef = useRef(item.link);
      const [isImageHovered, changeIsImageHovered] = useState(false);
      return(
        <div key={handleUuid()} className={homestyles.card}>
            <div className={homestyles.cardImg}>
              <img  onMouseOver={()=>{
                if(imageRef.current === item.link){
                  changeIsImageHovered(true);
                }
              }} onMouseOut={()=>{
                changeIsImageHovered(false);
              }} src={item.link}  />
            </div>
            <div style={isImageHovered?{display:"none"}:{display:"block"}}  className={homestyles.cardTextsContainer}>
              <h2 className={homestyles.cardHeading}>{item.productName}</h2>
              <div  className={homestyles.cardQtyAndCostContainer}>
                <p className={homestyles.cardPrice}>Cost: ${item.productCost}</p>
                <p className={homestyles.cardQty}>Qty: <span style={item.qty<6?{color:"red"}:{color:"white"}}>{item.qty}</span> Left</p>
              </div>
              <button className={homestyles.addToCart}>Add to cart</button>
            </div>
            
        </div>
      ); 
    })}
    </section>
  );
}
