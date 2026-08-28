"use client";
import { JSX, useEffect, useState, useRef, RefObject, MouseEvent } from "react";
// import { JSX } from "react/jsx-runtime";
import NavLink from "./navLink";
import handleUuid from "../hooks/serverHooks/handleKeyUuid";
import globalstyle from "../globals.module.css";
import useClientWidth from "../hooks/clientHooks/getClientWindowSize";
import { useHamburgerToggle } from "./handleBodyContext";

export type hamburgerProps = {
    
    fontAwesomeHamburger: JSX.Element,
}
export default function HamburgerBtn(props:hamburgerProps){
    // const [isClicked, setIsClicked] = useState(false);
    const clientWidth = useClientWidth();
    // console.log(clientWidth);
    const dropdownNavHeaders:string[] = ["Home","Profile","Messages", "Logout"]


    // function togglehamburger(event:MouseEvent<HTMLButtonElement>){
    //     if(isClicked){
    //        setIsClicked(false); 
    //        console.log(isClicked);
    //        return;
    //     }
    //     setIsClicked(true);
    //     console.log(isClicked);
    
    // }
    const {isToggled, toggle} = useHamburgerToggle();
    return (
        // <HamburgerContext>
        //     <HamburgerComponent fontAwesomeHamburger={props.fontAwesomeHamburger}/>
        // </HamburgerContext>
        <li className={globalstyle.navListElementsMenu}>
            {/* {clientWidth<800? */}
           
            <section className={globalstyle.hamburger}>
               <button title="mobile->hamburger to display navigation" onClick={toggle}>
                    {props.fontAwesomeHamburger}
                </button> 
            </section>
            {/* // :null} */}

            {/* <section style={!isClicked && clientWidth<800?{display:"none"}:{display:"inline"}}  */}
            <section style={isToggled===false && clientWidth<800?{display:"none"}:{display:"inline"}} 
            className={globalstyle.menuNavParent}>
               <div className={globalstyle.menuNav}>
                {dropdownNavHeaders.map((items:string)=>{
                    const lowercaseValue = items.toLowerCase();
                    return(
                      <NavLink key={handleUuid()} 
                        id={lowercaseValue} 
                        hamburgerToggle={toggle}
                        classlist={`${globalstyle.navAnchorTags} `} 
                        destination={lowercaseValue==="home"?"/": `/${lowercaseValue}`} 
                        innerText={items}
                        /> 
                    );
                })}
                
                </div> 
            </section>
        </li>
        
    );
}