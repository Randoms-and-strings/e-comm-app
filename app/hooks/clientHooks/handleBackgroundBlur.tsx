"use client"

import { useContext, createContext, useState } from "react";

type pageMainTag = {
    children: React.ReactNode
}
type propsValues = {
    isBlur: boolean,
    blurBackground: ()=>void,
    unblurBackground: ()=>void,
}

const backgroundBlur = createContext<propsValues|null>(null);

export default function BackgroundBlur({children}:pageMainTag){
    const [isBlur, changeIsBlur] = useState(false);

    const blurBackground = () => {
        if(!isBlur){
            changeIsBlur(true);
        }
        // console.log("background", isBlur);
    }
    const unblurBackground = () => {
        if(isBlur){
            changeIsBlur(false);
        }
    }
    return(
        <backgroundBlur.Provider value={{isBlur, blurBackground, unblurBackground}}>
            {children}
        </backgroundBlur.Provider>
    );
}

export function useBackgroundBlur(){
    const context = useContext(backgroundBlur);
    if (!context) {
    throw new Error("BackgroundBlur functionality must be used within a Child of the context");
  }
  return context;
}