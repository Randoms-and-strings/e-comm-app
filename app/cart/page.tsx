import cartStyle from "../styles/cart.module.css";
import ProductInfo from "../components/productInfoCard";
import ButtonIdempotent from "../components/idempotentBtn";
import { trashCan, checkicon } from "../assets/fontAwesome";
import LoaderAnimation from "../components/loadingAnimation";

export default function Cart(){
    return (
        <section>
            <h1 className={cartStyle.h1}>Checkout-order</h1>
            <ProductInfo 
            imgSrc="https://tse4.mm.bing.net/th/id/OIP.Ena9yaTNPcaR7kUrDrM94wAAAA?r=0&w=300&h=300&rs=1&pid=ImgDetMain&o=7&rm=3"
            allParagraphTexts={["65947738495784", "product name here", "5", "$50"]}
            allParagraphTextsKey={["Order-id", "product name", "QTY", "Cost"]}
            hasEditDeleteIcon={trashCan}
            hasTotalValue="$250"
            />
            {/* <div className={cartStyle.container}>
                <div className={cartStyle.imgContainer}>
                    <img src="https://tse4.mm.bing.net/th/id/OIP.Ena9yaTNPcaR7kUrDrM94wAAAA?r=0&w=300&h=300&rs=1&pid=ImgDetMain&o=7&rm=3" />
                </div>
                <div className={cartStyle.textContainer}>
                    <p><b>Order-id:</b> 65947738495784</p>
                    <p><b>product name:</b> product name here</p>
                    <p><b>QTY:</b> 5</p>
                    <p><b>Cost:</b> $50</p>
                    
                    
                </div>
                <a className={cartStyle.delete}>{trashCan}</a>
                <p className={cartStyle.qtyXSum}><b>=$250</b></p>
            </div> */}
            
            <div className={cartStyle.totalPriceContainer}>
                <h2><b>TOTAL:</b></h2>
                <h2 className={cartStyle.total}><b>=$250</b></h2>
            </div>
            <div className={cartStyle.buttonContainer}>
                {/* <button className={cartStyle.placeOrderButton}>Place An Order</button>     */}
                <ButtonIdempotent innertext="Place An Order" />
            </div>
            <LoaderAnimation>{checkicon}</LoaderAnimation>
            


        </section>
    );
}
