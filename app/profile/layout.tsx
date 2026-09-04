import ProfileLayout from "../components/profileDescriptions";
import ProfileMenu from "../components/profileMenuNav";
import { editIcon } from "../assets/fontAwesome";
export default function Profile(){
    return (
        <section>
           <ProfileLayout 
        userName="User1"
        descriptionTexts={["bla lllllllllllllllllllllllllvlflfllflflflvvv lggllflldllfll ldlllslldldldld"]}
        editIcon={editIcon}
        buttonTexts={["Upload product", "Delete account"]}
        buttonStyle={["blue", "white"]}
        /> 
            <ProfileMenu 
            headings={["uploads", "pending-deliveries", "delivered"]}
            />
        </section>
        
    );
}