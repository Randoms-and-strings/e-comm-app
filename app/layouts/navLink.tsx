'use client'
import globalstyle from "../globals.module.css";
import Link from 'next/link';
import { usePathname } from "next/navigation";;
import { JSX } from "react/jsx-runtime";
import { useHamburgerToggle } from "../hooks/clientHooks/handleHamburgerBtnClick";
import useClientWidth from "../hooks/clientHooks/getClientWindowSize";
type navProp = {
    id:string,
    innerText?: string,
    classlist: string,
    destination:string,
    children?:JSX.Element[],
    // hamburgerToggle?:()=>void,
}

export default function NavLink(props:navProp) {
    const pathname = usePathname();
    const {toggle, isToggled} = useHamburgerToggle();
    const clientWidth = useClientWidth();
    let classes:string = props.classlist;
    // console.log(pathname);
        
    return (
        <li className={`${props.id==="cart"?globalstyle.cart:""} ${globalstyle.navListElements}`}>
            <div className={`${ pathname.includes(props.destination) && props.id!== "cart"?globalstyle.navAnchorTagsClicked:""} ${ pathname.includes(props.destination) && props.id=== "cart"?globalstyle.navAnchorTagsClickedCart:""} `}>
            <Link className={classes} 
            id={props.id}
            href={props.destination}
            // onClick={props.hamburgerToggle||(props.id==="cart" && clientWidth<800)?props.hamburgerToggle||toggle:undefined}
            onClick={clientWidth<800 && isToggled?toggle:undefined}
            style={pathname.includes(props.destination)?{color:"#0e7d8c"}:undefined}> 
            {props.innerText?props.innerText:props.children}
            </Link>
            </div>
        </li>
        
            
    );
}