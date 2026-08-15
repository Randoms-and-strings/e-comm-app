'use client'
import globalstyle from "../globals.module.css";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { JSX } from "react/jsx-runtime";

type navProp = {
    id:string,
    innerText?: string,
    classlist: string,
    destination:string,
    children?:JSX.Element[]
}

export default function NavLink(props:navProp) {
    const pathname = usePathname();
    let classes:string = props.classlist;

        
    return (
        <li className={globalstyle.navElements}>
            <div className={pathname === props.destination?globalstyle.navAnchorTagsClicked:""}>
            <Link className={classes} 
            id={props.id}
            href={props.destination}
            style={pathname===props.destination?{color:"black"}:{color:"#edeff0"}}>
            {props.innerText?props.innerText:props.children}
            </Link>
            </div>
        </li>
        
            
    );
}