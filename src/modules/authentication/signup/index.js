import React from "react";
import "./scss/index.scss";
import mainlogo from "../../../assests/images/mainlogo.svg";
import vector from "../../../assests/images/Vector.svg"
import key from "../../../assests/images/key.svg"
import facebook from "../../../assests/images/facebook.svg";
import gmail from "../../../assests/images/gamil.svg";
import phone from "../../../assests/images/phone.svg";
import user from "../../../assests/images/user.svg";
import flag from "../../../assests/images/flag.svg";
import smalllogo from "../../../assests/images/smallogo.svg"

import { InputField, Button } from "../../../components";

export const Signup = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen">
      <div className="my-2">
        <img src={mainlogo} alt="logo" />
      </div>
      <div className="signup-cont py-2">
        <div className="subheading my-2">
          <h2 className="uppercase">Sign Up</h2>
        </div>
        <div className="text-input py-2">
         <InputField 
         placeholder="Enter Your Name"
         type="text"
         height="50px"
         icons={ <img src={user} alt="message" className="absolute top-5 right-4" /> }
         />
        </div>
        <div className="text-input py-2">
         <InputField 
         placeholder="Enter Your Email"
         type="email"
         height="50px"
         icons={ <img src={vector} alt="message" className="absolute top-5 right-4" /> }
         />
        </div>
        <div className="password-input py-2">
         <InputField 
         placeholder="Enter Your Password"
         type="password"
         height="50px"
         icons={ <img src={key} alt="key" className="absolute top-5 right-4" /> }
         />
        </div>
        <div className="text-input py-2">
         <InputField 
         placeholder="Phone"
         type="number"
         height="50px"
         icons={ <img src={phone} alt="message" className="absolute top-5 right-4 z-30" /> }
         />
        </div>
        <div className="text-input py-2">
         <InputField 
         placeholder="Country"
         type="text"
         height="50px"
         icons={ <img src={flag} alt="message" className="absolute top-5 right-4 z-30" /> }
         />
        </div>
        <div className="button my-4">
              <Button
              value={"SIGN UP"}
              type="submit"
               /> 
        </div>
        <div className="break py-2 cursor-pointer">
          or
        </div>
        <div className="social-link justify-center flex gap-2 my-2">
           <div className="facebook cursor-pointer"><img src={facebook} alt="facebook" /></div>
           <div className="gmail cursor-pointer"><img src={gmail} alt="gmail" /></div>
        </div>
      </div>
      <div className="small-logo">
          <img src={smalllogo} alt="logo" />
        </div>
        <div className="link-account my-2 -mt-3">
        <span>Already have an account? <a href="#/">Sign In</a></span>    
        </div>
    </div>
  );
};

