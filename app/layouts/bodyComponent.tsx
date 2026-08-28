import globalstyle from "../globals.module.css";
import NavLink from "./navLink";
import SearchBar from "../layouts/searchBar";
import CartCount from "../components/cartcount";
import HamburgerBtn from "../layouts/hamburgerBtn";
import handleUuid from "../hooks/serverHooks/handleKeyUuid";
import { hamburger, magnifyingGlass, shoppingCart } from "../assets/fontAwesome";
import { ReactNode } from "react";
import {HamburgerContext} from "../layouts/handleBodyContext";
type layoutProps = {

    allNavHeaders:string[],
    children: ReactNode
}
export default function Body(props:layoutProps){
    return(
        <div>
        <nav style={{position:"sticky", top:"0px", zIndex:"1"}}>

            <ul className={globalstyle.globalNav}>
              <HamburgerContext>
                <HamburgerBtn fontAwesomeHamburger={hamburger}/>
                <SearchBar key={handleUuid()} fontAwesome={magnifyingGlass}/>
                <NavLink key={handleUuid()}
                    id="cart" 
                    classlist={`${globalstyle.navAnchorTags}`} 
                    destination="/cart">
                      {shoppingCart}
                      <CartCount />  
                    </NavLink>
              </HamburgerContext>
              
              
              
              {/* {props.allNavHeaders.map((each:string)=> {
                const lowercaseValue = each.toLowerCase();
                if(lowercaseValue === "search"){
                  return (
                    <SearchBar key={handleUuid()} fontAwesome={magnifyingGlass}/>
                  );
                }else if(lowercaseValue === "cart"){
                  return (
                  
                    <NavLink key={handleUuid()}
                    id={lowercaseValue} 
                    classlist={`${globalstyle.navAnchorTags}`} 
                    destination={`/${lowercaseValue}`}>
                      {shoppingCart}
                      <CartCount />  
                    </NavLink>
                  
                  
                  );
                  
                }
              }   */}
              {/* )} */}
            </ul>
          </nav>

          <header></header>
          <main  className={globalstyle.main}>
            {props.children}
            
          </main>
          </div>
    );
}