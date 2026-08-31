"use client"
import { useContext, createContext, useState } from "react";

type animationButtons = {
    children: React.ReactNode
}
type propsValues = {
    isButtonClicked: boolean,
    ShowAnimation: ()=>void,
    hideAnimation: ()=>void,
}

const animationDisplay = createContext<propsValues|null>(null);

export default function ButtonAnimationContext({children}:animationButtons){
    const [isButtonClicked, changeIsButtonClicked] = useState(false);

    const ShowAnimation = () => {
        if(!isButtonClicked){
            changeIsButtonClicked(true);
            // console.log(isButtonClicked);
        }
    }
    const hideAnimation = () => {
        if(isButtonClicked){
            changeIsButtonClicked(false);
        }
    }
    return(
        <animationDisplay.Provider value={{isButtonClicked, ShowAnimation, hideAnimation}}>
            {children}
        </animationDisplay.Provider>
    );
}

export function useAnimation(){
    const context = useContext(animationDisplay);
    if (!context) {
    throw new Error("AnimationButtons functionality must be used within a Child of the context");
  }
  return context;
}