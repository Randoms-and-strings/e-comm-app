"use client";
import { useState } from "react";
import signupStyle from "../styles/signup.module.css";
// import Image from "next/image";

export default function SignUp(){
    const [isUser, changeIsUser] = useState(true);
    return (
        <section>
            <button>SignUp</button>
            <button>Log In</button>
            <div className={signupStyle.loginDiv}>
                <h1>LOGIN</h1>
                <form action="/home" method="post">
                    <label htmlFor="username">Username</label>
                    <input className={signupStyle.input} id="username" type="text" placeholder="Enter your username" />

                    <label htmlFor="password">Password</label>
                    <input className={signupStyle.input} id="password" type="text" placeholder="Enter your password" />
                    <p>
                       <input name="login-type" id="user" type="radio" defaultChecked />
                    <label htmlFor="user">Sign in as user</label> 
                    </p>
                    <p>
                       <input name="login-type" id="vendor" type="radio"  />
                    <label htmlFor="vendor">Sign in as vendor</label> 
                    </p>
                    

                    
                    <button>Log in</button>
                    <div className={signupStyle.svgContainer}>
                        {/* <hr/> */}
                        <div className={signupStyle.iconContainer}>
                            <p>Or</p>
                            <a><img className={signupStyle.facebook} src="./facebook.svg" /></a>
                            <a><img className={signupStyle.google} src="./google.svg"/></a>
                        
                        </div>
                        
                    </div>
                </form>
            </div>

            
            <div className={signupStyle.signupDiv}>
                <h1>SIGN-UP</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input className={signupStyle.input} id="username" type="text" placeholder="Enter your username" />

                    <label htmlFor="password">Password</label>
                    <input className={signupStyle.input} id="password" type="text" placeholder="Enter your password" />
                    <label htmlFor="password">Confirm Password</label>
                    <input className={signupStyle.input} id="password" type="text" placeholder="Re-enter your password" />
                    
                    <p>
                       <input name="signup-type" id="user-signup" type="radio" defaultChecked={true} />
                    <label htmlFor="user-signup">Sign up as user</label> 
                    </p>
                    <p>
                       <input name="signup-type" id="vendor-signup" type="radio"  />
                    <label htmlFor="vendor-signup">Sign up as vendor</label> 
                    </p>
                    

                    
                    <button>Sign up</button>
                </form>
            </div>
        </section>
    );
}