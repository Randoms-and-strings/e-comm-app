"use client";
import { JSX, useEffect, useState, useRef, RefObject } from "react";
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
    console.log(clientWidth);
    const dropdownNavHeaders:string[] = ["Home","Profile","Messages", "Logout"]

    useEffect(()=>{
       

      }, [isClicked]);
    return (
        <li className={globalstyle.navListElementsMenu}>
            {clientWidth<800?
            <section className={globalstyle.hamburger}>
               <button >
                    {props.fontAwesomeHamburger}
                </button> 
            </section>:null}

            <section className={globalstyle.menuNavParent}>
               <div className={globalstyle.menuNav}>
                {dropdownNavHeaders.map((items:string)=>{
                    const lowercaseValue = items.toLowerCase();
                    return(
                      <NavLink key={uuidv7()} id={lowercaseValue} classlist={`${globalstyle.navAnchorTags} ${globalstyle.navAnchorTagMenu}`} 
                        destination={lowercaseValue==="home"?"/": `/${lowercaseValue}`} 
                        innerText={items}/> 
                    );
                })}
                
                </div> 
            </section>
        </li>
        
    );
}