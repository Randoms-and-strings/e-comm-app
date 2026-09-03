import profileLayout from "../styles/profile-layout.module.css";
import handleUuid from "../hooks/serverHooks/handleKeyUuid";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
type profilelayoutProps = {
    userName: string,
    descriptionTexts:string[],
    descriptionKeys?: string[],
    buttonTexts: string[],
    buttonStyle: string[],
    editIcon?: React.ReactNode,
}

export default function ProfileLayout(props:profilelayoutProps){
    const buttonDesign:any = {
        "blue":{
            backgroundColor: "#1ecbe1",
            color:"white",
            border: "0px"
        },
        "red":{
            backgroundColor: "#e1341e",
            color:"white",
        },
        "white":{
           backgroundColor: "white",
            color:"grey", 
            border: "1px solid grey"
        }
    }
    
    return(
        <div>
            <h1>{props.userName}<span>{props.editIcon}</span></h1>
            {props.descriptionTexts.map((texts, index)=>{
                return(
                    
                        props.descriptionKeys?<p key={handleUuid()}><b>{props.descriptionKeys[index]}:</b> {texts}</p>:<p key={handleUuid()}>{texts}</p> 
                );
            })}

            {props.buttonTexts.map((buttonTexts, index)=>{
                return(
                    <button className={profileLayout.button} key={handleUuid()} style={buttonDesign[props.buttonStyle[index]]}>
                        {buttonTexts}
                    </button>
                );
            })}
        </div>
    );
}