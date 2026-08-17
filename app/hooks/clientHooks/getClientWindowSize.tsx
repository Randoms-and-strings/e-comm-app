"use client"
import { useState, useEffect } from "react";

export default function useClientWidth():number{
    const [clientWindowWidth, setClientwindowWidth] = useState(0);

    useEffect(()=>{
        function handleClientScreenWidth(){
            setClientwindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleClientScreenWidth);

        handleClientScreenWidth();
        return () => window.removeEventListener("resize", handleClientScreenWidth);
    }, []);
    console.log(clientWindowWidth);

    return clientWindowWidth;
}