import viewProduct from "../styles/view-products.module.css";
import AddToCartBtn from "../components/addToCartBtn";
import HandleMultipleAddSub from "../components/handleMultipleCartAddSub";
import InputValue from "./inputRefComponent";
import { addItemIcon } from "../assets/fontAwesome";
// import { projectUpdate } from "next/dist/build/swc/generated-native";
type viewProductPageProp = {
    
    currentImg: string,
    productName: string,
    productPrice:string,
    type: "form"|"page",
    productDescription:string,
    quantityLeft:string,
    features:string
}
export default function ViewProductComponent(props:viewProductPageProp){
    return (
        <section>
            <div className={viewProduct.productContainer}>
                <div className={viewProduct.imgContainer}>
                    <img src={props.currentImg}/>
                    
                       {props.type==="form"? addItemIcon: undefined} 
                    
                    
                </div>
                

                <div className={viewProduct.textsContainer}>
                    
                        
                        <h1 style={props.type==="form"?{fontSize:"16px",width:"100%"}:undefined} className={viewProduct.h1}>
                            {props.type==="form"?<div><b>Product-name</b>
                            <InputValue inputValue={props.productName}/></div>
                            :props.productName}
                            {/* <input value={props.productName}/> */}
                            
                        </h1>

                        <p style={props.type==="form"?{width:"100%"}:undefined}>
                            <b>short-description:</b> 
                            {/* <input value={props.productDescription} /> */}
                            {props.type==="form"?<InputValue inputValue={props.productDescription}/>:props.productDescription}
                        </p>
                        <p style={props.type==="form"?{width:"100%"}:undefined}>
                            <b>price:</b> 
                            {/* <input value={props.productPrice} /> */}
                            {props.type==="form"?<InputValue inputValue={props.productPrice}/>:props.productPrice}
                            
                        </p>
                        <p style={props.type==="form"?{width:"100%"}:undefined}>
                            <b>quantity-left:</b> 
                            {props.type==="form"?<InputValue inputValue={props.quantityLeft}/>:props.quantityLeft}
                            
                            {/* <input value={props.quantityLeft}/> */}
                        </p>

                        {props.type==="page"?
                            <section>
                                <div className={viewProduct.quantityContainer}>
                                <p><b>select-quantity:</b></p>  
                                <HandleMultipleAddSub />
                                
                            </div>
                            <div className={viewProduct.btnDiv}>
                            <AddToCartBtn 
                            innerText="Add to cart"
                            />  
                            </div>
                            </section>
                            :
                            null
                        }
                    
                    
                    {/* <button></button> */}
                </div>
            </div>

            <h2 style={props.type==="form"?{textAlign:"center"}:undefined} className={viewProduct.h2}>Features</h2>
            <p>
                {/* <input value={props.features} /> */}
                {props.type==="form"?<InputValue inputValue={props.features}/>:
                props.features
                }
                
            </p>

            {props.type ==="form"?
            <div className={viewProduct.editButton}>
                <button>Submit</button>
            </div>:undefined
            }
        </section>
    );
}