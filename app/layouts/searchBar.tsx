import globalstyle from "../globals.module.css";
import "../styles/icon-styles.css";
import { JSX } from "react/jsx-runtime";

type SearchBarProps = {
    fontAwesome: JSX.Element
}

export default function SearchBar(props:SearchBarProps){
    return(
        <li className={`${globalstyle.searchBarContainer} ${globalstyle.navElements}`}>
            <form action="/search" method="get" >
            <div className={globalstyle.searchButtonParentDiv}>
            <input type="text" placeholder="Search" name="searchProducts" className={globalstyle.searchButtonInput}/>
            
            <button type="submit" className={globalstyle.searchButton}>
                {props.fontAwesome}
            </button>
            </div>
                
            </form>
        </li>
        
    );
}