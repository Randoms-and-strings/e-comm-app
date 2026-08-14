'use client'
import globalstyle from "../globals.module.css";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { JSX } from "react/jsx-runtime";

type navProp = {
    id:string,
    innerText: string,
    classlist: string,
    destination:string,
    children?:JSX.Element
}

export default function NavLink(props:navProp) {
    const pathname = usePathname();
    let classes:string = props.classlist;
    if(pathname === props.destination){
        // console.log("here");
        useEffect(()=>{
            
            
            let div = document.getElementById(props.id)?.parentElement;
            console.log(div);
            div?.classList.add(`${globalstyle.navAnchorTagsClicked}`);
        }, []);
        
        // classes += ` ${globalstyle.navAnchorTagsClicked}`;
    }
    // let classes:string = [...props.classlist, pathname === props.destination?`${globalstyle.navAnchorTagsClicked}`:""].join(" ");
    // console.log(classes);
    return (
            <Link className={classes} 
            id={props.id}
            href={props.destination}>
            {props.innerText}
            </Link>
    );
}