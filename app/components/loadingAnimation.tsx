// import { checkicon } from "../assets/fontAwesome";
import animeStyles from "../styles/animations.module.css";

type child = {
    children:React.ReactNode
}
export default function LoaderAnimation(props:child){
    return(
        <div className={animeStyles.container}>
            {/* <div className={animeStyles.iconBackground}></div> */}
            <div>
                {props.children}
            <h2>order submitted successfully!</h2>
            </div>
            
        </div>
    );
}