import profileStyles from "../styles/profile-layout.module.css";
import handleUuid from "../hooks/serverHooks/handleKeyUuid";
import ProfileMenuLinks from "./profileMenuLink";
type profileMenuProps = {
    headings: string[],
}

export default function ProfileMenu(props:profileMenuProps){
    return(
        <div className={profileStyles.menuContainer}>
         { props.headings.map((heading)=>{
            const elementWidth = 100/props.headings.length;
            // const asInt = parseInt(elementWidth);
            return(
                <ProfileMenuLinks 
                heading={heading}
                width={`${elementWidth-3|0}%`}
                destination= {`/${heading}`}
                key={handleUuid()}
                />
                // <Link>
                
                // </Link>
                // <p style={{width: `${elementWidth|0}%`}} key={handleUuid()} className={profileStyles.menuNav}>{heading}</p>
            );
        })  }
        </div>
        
    );
}