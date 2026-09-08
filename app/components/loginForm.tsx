import signupStyle from "../styles/signup.module.css"
import { padlockIcon, userIcon, xMark } from "../assets/fontAwesome";
import {JSX} from "react"
type formDisplayProp = {
    showLogin: boolean,
    hideForm: JSX.Element,
}
export default function Login(props:formDisplayProp){
    return(
        <div style={props.showLogin?{display:"block"}:{display:"none"}} className={signupStyle.loginDiv}>
                <h1>LOGIN</h1>
                <form action="/home" method="post">
                    <label className={signupStyle.label} htmlFor="username">Username</label>
                    <div className={signupStyle.inputDiv}>
                        <input className={signupStyle.input} id="username" type="text" placeholder="Enter your username" />
                        {userIcon}
                    </div>
                    

                    <label className={signupStyle.label} htmlFor="password">Password</label>
                    <div className={signupStyle.inputDiv}>
                      <input className={signupStyle.input} id="password" type="text" placeholder="Enter your password" /> 
                      {padlockIcon} 
                    </div>
                    

                    <legend className={signupStyle.legendRadio}>Pick one:</legend>
                    <p>
                       <input name="login-type" id="user" type="radio" defaultChecked />
                    <label htmlFor="user">Sign in as user</label> 
                    </p>
                    <p>
                       <input name="login-type" id="vendor" type="radio"  />
                    <label htmlFor="vendor">Sign in as vendor</label> 
                    </p>


                    

                    
                    <button className={`${signupStyle.loginSubmit} ${signupStyle.button}`}>Log in</button>
                    <div className={signupStyle.svgContainer}>
                        {/* <hr/> */}
                        <div className={signupStyle.iconContainer}>
                            <p>Or login with</p>
                            <a><img className={signupStyle.facebook} src="./facebook.svg" /></a>
                            <a><img className={signupStyle.google} src="./google.svg"/></a>
                        
                        </div>
                        
                    </div>
                </form>
                {props.hideForm}
            </div>
    );
}