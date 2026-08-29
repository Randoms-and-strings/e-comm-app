
import { ReactNode } from "react";
import { filterIcon, dropdownIcon } from "../assets/fontAwesome";
import searchLayout from "../styles/layout-search.module.css";
export default function SearchLayout({children}:Readonly<{children:ReactNode}>){
    
    
    return (
        <section className={searchLayout.container}>
            <div className={searchLayout.inputContainer}>
                <select>
                    <option value="vendor">Vendor</option>
                    <option value="product">Products</option>
                </select>
                
                {filterIcon}
                {/* {dropdownIcon} */}
            </div>
            
            {children}
            
        </section>
    );
}