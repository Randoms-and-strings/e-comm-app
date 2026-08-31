"use client"
import { useState, createContext, ReactNode, useContext} from "react";

type child = {
    children: ReactNode
}

type hamburgerContextValue = {
    isToggled: boolean,
    toggle:()=>void,
    
}

const hamburgerContext = createContext<hamburgerContextValue|null>(null);

export function HamburgerContext({children}:child){
    const [isToggled, changeIsToggled] = useState(false);
    const toggle = () => {
        if(isToggled){
            changeIsToggled(false);
            return;
        }
        changeIsToggled(true);
    }
    return(
        <hamburgerContext.Provider value={{isToggled, toggle}}>
            {children}
        </hamburgerContext.Provider>
    );
}

export const useHamburgerToggle = () => {
  const context = useContext(hamburgerContext);
  if (!context) {
    throw new Error("useHamburger must be used within a Child of the context");
  }
  return context;
};
