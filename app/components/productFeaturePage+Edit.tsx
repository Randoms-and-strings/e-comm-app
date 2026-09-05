import viewProduct from "../styles/view-products.module.css";
import AddToCartBtn from "../components/addToCartBtn";
import HandleMultipleAddSub from "../components/handleMultipleCartAddSub";
import InputValue from "./inputRefComponent";
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
                </div>

                <div className={viewProduct.textsContainer}>
                    
                        
                        <h1 className={viewProduct.h1}>
                            {/* <input value={props.productName}/> */}
                            <InputValue inputValue={props.productName}/>
                        </h1>

                        <p>
                            <b>short-description:</b> 
                            {/* <input value={props.productDescription} /> */}
                            <InputValue inputValue={props.productDescription}/>
                        </p>
                        <p>
                            <b>price:</b> 
                            {/* <input value={props.productPrice} /> */}
                            <InputValue inputValue={props.productPrice}/>
                        </p>
                        <p>
                            <b>quantity-left:</b> 
                            <InputValue inputValue={props.quantityLeft}/>
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

            <h2 className={viewProduct.h2}>Features</h2>
            <p>
                {/* <input value={props.features} /> */}
                <InputValue inputValue={props.features}/>
            </p>
        </section>
    );
}