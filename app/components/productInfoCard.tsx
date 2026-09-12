import { JSX } from "react/jsx-runtime";
import handleUuid from "../hooks/serverHooks/handleKeyUuid";
import cartStyle from "../styles/cart.module.css";
import DeleteFromCartBtn from "./deleteFromCartBtn";
type productData = {
    imgSrc:string,
    allParagraphTexts: string[],
    allParagraphTextsKey?: string[],
    hasEditDeleteIcon?: JSX.Element,
    hasTotalValue?: string,
    hasEditIcon?: JSX.Element,
    editIconDestination?:string,
}
export default function ProductInfo(props:productData){
   
    
    return(
        <div className={cartStyle.container}>
                <div className={cartStyle.imgContainer}>
                    <img src={props.imgSrc} />
                </div>
                <div className={cartStyle.textContainer}>
                    {props.allParagraphTexts.map((item, index)=>{
                        
                         
                        return(
                            <p key={handleUuid()}><b>{props.allParagraphTextsKey?props.allParagraphTextsKey[index]:undefined}:</b> {item}</p>
                        );
                    })}
                    {/* <p><b>Order-id:</b> 65947738495784</p>
                    <p><b>product name:</b> product name here</p>
                    <p><b>QTY:</b> 5</p>
                    <p><b>Cost:</b> $50</p> */}
                    
                    
                </div>
                {/* <a className={cartStyle.delete}>{props.hasEditDeleteIcon}</a> */}
                <DeleteFromCartBtn>{props.hasEditDeleteIcon}</DeleteFromCartBtn>
                {props.hasEditIcon?<a href={props.editIconDestination}>{props.hasEditIcon}</a>:undefined}
                {props.hasTotalValue?<p className={cartStyle.qtyXSum}><b>={props.hasTotalValue}</b></p>:undefined}
                
        </div>
    );
}