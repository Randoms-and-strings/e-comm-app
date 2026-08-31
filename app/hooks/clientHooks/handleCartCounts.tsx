"use client"
import { useState, createContext, ReactNode, useContext} from "react";
type child = {
    children: ReactNode
}
type contextValue = {
    itemCount:number,
    increment:()=>void,
    decrement:()=>void
}
// type hamburgerContextValue = {
//     isToggled: boolean,
//     toggle:()=>void,
    
// }
const cartAdditionContext = createContext<contextValue|null>(null);
// const hamburgerContext = createContext<hamburgerContextValue|null>(null);
export default function NoOfProductsInCart({children}:child){
    const [itemCount, changeItemCount] = useState(0);
    
    const increment = () =>{
        changeItemCount(itemCount + 1);
    }

    const decrement = () =>{
        if(itemCount>0){
           changeItemCount(itemCount - 1); 
        }
        
    }

    return(
        <cartAdditionContext.Provider value={{itemCount, increment, decrement}}>
            {children}
        </cartAdditionContext.Provider>
    );
}
// export function HamburgerContext({children}:child){
//     const [isToggled, changeIsToggled] = useState(false);
//     const toggle = () => {
//         if(isToggled){
//             changeIsToggled(false);
//             return;
//         }
//         changeIsToggled(true);
//     }
//     return(
//         <hamburgerContext.Provider value={{isToggled, toggle}}>
//             {children}
//         </hamburgerContext.Provider>
//     );
// }


export const usecartAddition = () => {
  const context = useContext(cartAdditionContext);
  if (!context) {
    throw new Error("useCartAddition must be used within a Child of the context");
  }
  return context;
};
// export const useHamburgerToggle = () => {
//   const context = useContext(hamburgerContext);
//   if (!context) {
//     throw new Error("useHamburger must be used within a Child of the context");
//   }
//   return context;
// };



