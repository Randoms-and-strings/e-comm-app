import ProfileLayout from "../components/profileDescriptions";
import ProfileMenu from "../components/profileMenuNav";
import { editIcon } from "../assets/fontAwesome";
import { ReactNode } from "react";

export default function Profile({children}:Readonly<{children:ReactNode}>){
    return (
        <section>
           <ProfileLayout 
        userName="User 1"
        descriptionTexts={["+234-567-890", "+44 avenue, unknown street,egbeda", "567@gmail.com"]}
        descriptionKeys={["phone-number", "address", "email"]}
        editIcon={editIcon}
        buttonTexts={["Delete account"]}
        buttonStyle={["white"]}
        /> 
            <ProfileMenu 
            headings={["fulfilled-orders", "pending-orders"]}
            />

        {children}
        </section>
        
    );
}