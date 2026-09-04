"use client";
import profileStyles from "../styles/profile-layout.module.css";
import CurrentPath from "../hooks/clientHooks/handleCurrentPath";
import Link from "next/link";
type menuDetails = {
    heading: string,
    width:string,
    destination:string,
}
export default function ProfileMenuLinks(props:menuDetails){
    const style = {
        width: props.width,
    }
    const currentPagePath = CurrentPath();

    return(      
        <Link href={`${currentPagePath}/${props.destination}`} 
        style={currentPagePath.includes(props.destination)?{...style, borderBottom:"2px solid black"}:style}  
        className={profileStyles.menuNav}>
            {props.heading}
        </Link>
            
    );
}