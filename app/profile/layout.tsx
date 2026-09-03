import ProfileLayout from "../components/profileDescriptions";
import { editIcon } from "../assets/fontAwesome";
export default function Profile(){
    return (
        <ProfileLayout 
        userName="User1"
        descriptionTexts={["bla lllllllllllllllllllllllllvlflfllflflflvvv lggllflldllfll ldlllslldldldld"]}
        editIcon={editIcon}
        buttonTexts={["Upload product", "Delete account"]}
        buttonStyle={["blue", "white"]}
        />
    );
}