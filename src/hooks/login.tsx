import React, { useState } from "react";

const useLoginForm = () => {
    const [loginForm, setLoginForm] = useState({
      email: {
        value: "",
        isValid: false,
        elementType: "input",
        type: "text",
        placeholder: "Email Address",
        label: "Email Address",
        validation: emailCheck,
        blur: false,
        error: "Email is required",
      },
      password: {
        value: "",
        isValid: false,
        elementType: "input",
        view: Eye,
        type: "password",
        placeholder: "•••••••••",
        label: "Password",
        forgot: "Forgot Password",
        validation: password,
      },
    });
  
    const [loginFormValid, setLoginFormValid] = useState(false);
  
    return [loginForm, setLoginForm, loginFormValid, setLoginFormValid];
  };
  
  export default useLoginForm;