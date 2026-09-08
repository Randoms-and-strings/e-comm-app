import signupStyle from "../styles/signup.module.css"
import {JSX, SyntheticEvent} from "react"
import { userIcon, padlockIcon, telephone, addressBook } from "../assets/fontAwesome";
type formDisplayProp = {
    showSignUp: boolean,
    hideForm: JSX.Element,
    signUpFormStates: [boolean, (e:SyntheticEvent)=>void, ()=>void]
}

export default function SignUpForm(props:formDisplayProp){
    const [isSignupFormV2, showSignupFormV2, hideSignupFormV2] = props.signUpFormStates;
    return(
        <div style={props.showSignUp?{display:"block"}:{display:"none"}}  className={`${!props.showSignUp?signupStyle.scaleDownAnimation:undefined} ${signupStyle.signupDiv}`}>
                <h1>SIGN-UP</h1>
                <form method="post" action="/home">
                <div style={isSignupFormV2?{display:"none"}:undefined} >
                    <label htmlFor="username">Username</label>
                    <div className={signupStyle.inputDiv}>
                      <input className={signupStyle.input} id="username" type="text" placeholder="Enter your username" />
                        {userIcon}
                    </div>
                    

                    <label htmlFor="password">Password</label>
                    <div className={signupStyle.inputDiv}>
                        <input className={signupStyle.input} id="password" type="text" placeholder="Enter your password" />
                        {padlockIcon}
                    </div>
                    
                    <label htmlFor="password">Confirm Password</label>
                    <div className={signupStyle.inputDiv}>
                       <input className={signupStyle.input} id="password" type="text" placeholder="Re-enter your password" /> 
                       {padlockIcon}
                    </div>
                    
                    
                    <button onClick={showSignupFormV2} className={`${signupStyle.loginSubmit} ${signupStyle.button}`}>Submit</button>
                     <div className={signupStyle.svgContainer}>
                       
                        <div className={signupStyle.iconContainer}>
                            <p>Or login with:</p>
                            <a><img className={signupStyle.facebook} src="./facebook.svg" /></a>
                            <a><img className={signupStyle.google} src="./google.svg"/></a>
                        
                        </div>
                        
                    </div>
                    {/* {props.hideForm} */}
                </div>
                    

                    <div style={isSignupFormV2?{display:"block"}:{display:"none"}} className={`${isSignupFormV2?signupStyle.showV2Animation:undefined}`}>

                        <legend className={signupStyle.legendRadio}>Pick one:</legend>
                   
                        <p>
                        <input name="signup-type" id="user-signup" type="radio" defaultChecked={true} required={true}/>
                        <label htmlFor="user-signup">Sign up as user</label> 
                        </p>
                        <p>
                        <input name="signup-type" id="vendor-signup" type="radio" required={true} />
                        <label htmlFor="vendor-signup">Sign up as vendor</label> 
                        </p>

                        <div>
                            <label htmlFor="phone">Phone-number</label>
                            <div className={signupStyle.inputDiv}>
                                <input className={signupStyle.input} id="phone" type="tel" placeholder="Enter your tel..." />
                                {telephone}
                            </div>
                            
                            <label htmlFor="address">Address</label>
                            <div className={signupStyle.inputDiv}>
                                <input className={signupStyle.input} id="address" type="text" placeholder="Enter your address" />
                                {addressBook}
                            </div>
                            
                        </div>
    
                        <button className={`${signupStyle.loginSubmit} ${signupStyle.button}`}>Sign up</button>
                    </div>
                    


                    {/* <div className={signupStyle.svgContainer}>
                       
                        <div className={signupStyle.iconContainer}>
                            <p>Or login with:</p>
                            <a><img className={signupStyle.facebook} src="./facebook.svg" /></a>
                            <a><img className={signupStyle.google} src="./google.svg"/></a>
                        
                        </div>
                        
                    </div>
                    {props.hideForm} */}
                    {props.hideForm}
                </form>
            </div>
    );
}