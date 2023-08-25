import React, { useState } from "react";
import Header from "../components/common/Header";
import SignupForm from "../components/SignupComponent/SignupForm";
import Button from "../components/common/Button";
import LoginForm from "../components/SignupComponent/LoginForm";

function SignUpPage(){
   
    
    
    const[flag, setFlag]=useState(false);


    // return(
    //     <div>
    //         <Header/>
    //     <div className="input-wrapper">
    //         {!flag?<h1>SignUp</h1>:<h1>Login</h1>}
    //      {!flag?<SignupForm/>:<LoginForm/>}
    //        {!flag?<p onClick={()=>setFlag(!flag)}>Already have an account? Click here to Login</p>
    //        :<p onClick={()=>setFlag(!flag)}>Don't have an account? Click here to signup</p>}
    //     </div>
    //     </div>
    // )
    return (
        <div>
          <Header />
          <div className="input-wrapper">
            {!flag ? <h1>Signup</h1> : <h1>Login</h1>}
            {!flag ? <SignupForm /> : <LoginForm />}
            {!flag ? (
              <p style={{ cursor: "pointer" }} onClick={() => setFlag(!flag)}>
                Already have an Account? Click here to Login.
              </p>
            ) : (
              <p style={{ cursor: "pointer" }} onClick={() => setFlag(!flag)}>
                Don't have an account? Click here to signup.
              </p>
            )}
          </div>
        </div>
      );
    }
    


export default SignUpPage;