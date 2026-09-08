"use client";
import { SyntheticEvent, useState } from "react";
import signupStyle from "../styles/signup.module.css";
import Login from "../components/loginForm";
import SignUpForm from "../components/signupForm";
import { xMark } from "../assets/fontAwesome";
// import Image from "next/image";

export default function SignUp(){
    const [isLoginForm, changeIsLoginForm] = useState(false);
    const [isSignupForm, changeIsSignupForm] = useState(false);
    const [isSignupFormV2, changeIsSignupFormV2] = useState(false);

    const showLoginForm = ()=>{
        if(!isLoginForm){
            changeIsLoginForm(true);
        }
    }
    const hideLoginForm = ()=>{
        if(isLoginForm){
            changeIsLoginForm(false);
        }
    }
    const showSignupForm = ()=>{
        if(!isSignupForm){
            changeIsSignupForm(true);
        }
    }
    const hideSignupForm = ()=>{
        if(isSignupForm){
            changeIsSignupForm(false);
        }
        hideSignupFormV2();
    }
    const showSignupFormV2 = (e:SyntheticEvent)=>{
        e.preventDefault();
        if(!isSignupFormV2){
            changeIsSignupFormV2(true);
        }
    }
    const hideSignupFormV2 = ()=>{
        if(isSignupFormV2){
            changeIsSignupFormV2(false);
        }
    }
    return (
        <section className={signupStyle.pageContainer}>
            <div style={isLoginForm || isSignupForm?{display:"none"}:{display:"flex"}}  className={signupStyle.buttonDiv}>
                <div className={signupStyle.buttonContainer}>
                    <button  onClick={showLoginForm} className={`${signupStyle.button} ${signupStyle.login}`}>Log In</button>


                {/* <button className={`${signupStyle.googleSignUp} ${signupStyle.button}`}>Sign Up With Google</button>
                <button className={`${signupStyle.facebookSignUp} ${signupStyle.button}`}>Sign Up With Facebook</button> */}
                <button onClick={showSignupForm} className={`${signupStyle.signUp} ${signupStyle.button}`}>Sign Up</button>
                </div>
                
            </div>
            <Login hideForm={<a onClick={hideLoginForm}>{xMark}</a>} showLogin={isLoginForm}/>
            <SignUpForm signUpFormStates={[isSignupFormV2, showSignupFormV2, hideSignupFormV2]} showSignUp={isSignupForm} hideForm={<a onClick={hideSignupForm}>{xMark}</a>} />

            {/* <div style={isLoginForm?{display:"block"}:{display:"none"}} className={signupStyle.loginDiv}>
                <h1>LOGIN</h1>
                <form action="/home" method="post">
                    <label htmlFor="username">Username</label>
                    <input className={signupStyle.input} id="username" type="text" placeholder="Enter your username" />

                    <label htmlFor="password">Password</label>
                    <input className={signupStyle.input} id="password" type="text" placeholder="Enter your password" />

                    <legend className={signupStyle.legendRadio}>Pick one:</legend>
                    <p>
                       <input name="login-type" id="user" type="radio" defaultChecked />
                    <label htmlFor="user">Sign in as user</label> 
                    </p>
                    <p>
                       <input name="login-type" id="vendor" type="radio"  />
                    <label htmlFor="vendor">Sign in as vendor</label> 
                    </p>


                    

                    
                    <button className={signupStyle.button}>Log in</button>
                    <div className={signupStyle.svgContainer}>
                      
                        <div className={signupStyle.iconContainer}>
                            <p>Or login with</p>
                            <a><img className={signupStyle.facebook} src="./facebook.svg" /></a>
                            <a><img className={signupStyle.google} src="./google.svg"/></a>
                        
                        </div>
                        
                    </div>
                </form>
            </div> */}

            
            {/* <div className={signupStyle.signupDiv}>
                <h1>SIGN-UP</h1>
                <form method="post" action="/home">
                    <label htmlFor="username">Username</label>
                    <input className={signupStyle.input} id="username" type="text" placeholder="Enter your username" />

                    <label htmlFor="password">Password</label>
                    <input className={signupStyle.input} id="password" type="text" placeholder="Enter your password" />
                    <label htmlFor="password">Confirm Password</label>
                    <input className={signupStyle.input} id="password" type="text" placeholder="Re-enter your password" />
                    
                    <button className={signupStyle.button}>Submit</button>
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
                        <input className={signupStyle.input} id="phone" type="tel" placeholder="Enter your tel..." />
                        <label htmlFor="address">Address</label>
                        <input className={signupStyle.input} id="address" type="text" placeholder="Enter your address" />
                    </div>
                  
                    
                    

                    
                    <button className={signupStyle.button}>Sign up</button>
                    <div className={signupStyle.svgContainer}>
                       
                        <div className={signupStyle.iconContainer}>
                            <p>Or login with:</p>
                            <a><img className={signupStyle.facebook} src="./facebook.svg" /></a>
                            <a><img className={signupStyle.google} src="./google.svg"/></a>
                        
                        </div>
                        
                    </div>
                </form>
            </div> */}
        </section>
    );
}