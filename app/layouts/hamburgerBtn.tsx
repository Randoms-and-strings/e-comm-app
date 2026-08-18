"use client";
import { JSX, useEffect, useState, useRef, RefObject, MouseEvent } from "react";
import NavLink from "./navLink";
import { v7 as uuidv7 } from 'uuid';
import globalstyle from "../globals.module.css";
import useClientWidth from "../hooks/clientHooks/getClientWindowSize";

type hamburgerProps = {
    
    fontAwesomeHamburger: JSX.Element,
}
export default function HamburgerBtn(props:hamburgerProps){
    const [isClicked, setIsClicked] = useState(false);
    const clientWidth = useClientWidth();
    // console.log(clientWidth);
    const dropdownNavHeaders:string[] = ["Home","Profile","Messages", "Logout"]


    function togglehamburger(event:MouseEvent<HTMLButtonElement>){
        if(isClicked){
           setIsClicked(false); 
           console.log(isClicked);
           return;
        }
        setIsClicked(true);
        console.log(isClicked);
    
    }
    return (
        <li className={globalstyle.navListElementsMenu}>
            {clientWidth<800?
            <section className={globalstyle.hamburger}>
               <button onClick={togglehamburger}>
                    {props.fontAwesomeHamburger}
                </button> 
            </section>:null}

            <section style={!isClicked && clientWidth<800?{display:"none"}:{display:"inline"}} className={globalstyle.menuNavParent}>
               <div className={globalstyle.menuNav}>
                {dropdownNavHeaders.map((items:string)=>{
                    const lowercaseValue = items.toLowerCase();
                    return(
                      <NavLink key={uuidv7()} id={lowercaseValue} 
                      classlist={`${globalstyle.navAnchorTags} `} 
                        destination={lowercaseValue==="home"?"/": `/${lowercaseValue}`} 
                        innerText={items}/> 
                    );
                })}
                
                </div> 
            </section>
        </li>
        
    );
}