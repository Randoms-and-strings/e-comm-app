import cartStyle from "../styles/cart.module.css";
import CartPageComponent from "../components/cartPageComponent";
import ButtonIdempotentComponent from "../components/idempotentBtn";
import { errorXMark, checkicon, spinner } from "../assets/fontAwesome";
import BackgroundBlurContext from "../hooks/clientHooks/handleBackgroundBlur";
import LoaderAnimationComponent from "../components/loadingAnimation";
import ButtonAnimationContext from "../hooks/clientHooks/handleShowAnimation";
export default function Cart(){
    return (
        <section>
            <BackgroundBlurContext>
                <CartPageComponent />
            
                <div className={cartStyle.buttonContainer}>
                    <ButtonAnimationContext>
                        
                        <ButtonIdempotentComponent innertext="Place An Order" />
                        <LoaderAnimationComponent title="Loading..."
                        description="Order submitted Successfully">
                        {spinner}
                        </LoaderAnimationComponent>
                        {/* add type prop. error for red title, else normal blue color */}
                    </ButtonAnimationContext>
                </div>
                
                
            </BackgroundBlurContext>
           
        </section>
    );
}
