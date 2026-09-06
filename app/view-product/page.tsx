import viewProduct from "../styles/view-products.module.css";
import ViewProductComponent from "../components/productFeaturePage+Edit";
import AddToCartBtn from "../components/addToCartBtn";
import HandleMultipleAddSub from "../components/handleMultipleCartAddSub";
export default function ViewProduct(){
    return (
            <ViewProductComponent
                    currentImg="https://i1.sndcdn.com/artworks-N4K4AR7hUZBi9AjB-YJQoRQ-t500x500.jpg"
                    productName="The Product Name"
                    productDescription="bla bla bla bla bla bla "
                    productPrice="$50"
                    quantityLeft="5"
                    features="bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                            bla bla bla bla bla bla "
                    type="page"
                />
        // <section>
            /* <div className={viewProduct.productContainer}>
                <div className={viewProduct.imgContainer}>
                    <img src="https://i1.sndcdn.com/artworks-N4K4AR7hUZBi9AjB-YJQoRQ-t500x500.jpg"/>
                </div>

                <div className={viewProduct.textsContainer}>
                    
                        
                        <h1 className={viewProduct.h1}>The Product Name</h1>
                        <p><b>short-description:</b> bla bla bla bla bla bla </p>
                        <p><b>price:</b> $50</p>
                        <p><b>quantity-left:</b> 5</p>
                        <div className={viewProduct.quantityContainer}>
                            <p><b>select-quantity:</b></p>  
                            <HandleMultipleAddSub />
                               
                        </div>
                        <div className={viewProduct.btnDiv}>
                          <AddToCartBtn 
                        innerText="Add to cart"
                        />  
                        </div>
                        
                    
                    
                    
                </div>
            </div>

            <h2 className={viewProduct.h2}>Features</h2>
            <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 
                bla bla bla bla bla bla 
            </p> */
        // </section>
    );
}