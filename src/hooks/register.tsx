import React, { useState } from "react";

interface Props {
    firstName:{
        value: string;
        isValid: boolean;
        elementType: string;
        svg: string;
        type: string;
        placeholder: string;
        label: string;
        validation: (value: any) => boolean;
        blur: boolean;
        error: string;

    },
    email: {
        value: string;
        isValid: boolean;
        elementType: string;
        svg: string;
        type: string;
        placeholder: string;
        label: string;
        validation: (value: any) => boolean;
        blur: boolean;
        error: string;
    }
}

const useRegisterForm = () => {
    const [registerForm, setRegisterForm] = useState({
        firstName: {
          value: "",
          isValid: false,
          elementType: "input",
          type: "text",
          placeholder: "First Name",
          label: "Name",
          validation: required,
          blur: false,
        },
        lastName: {
          value: "",
          isValid: false,
          elementType: "input",
          type: "text",
          placeholder: "Last Name",
          validation: required,
          blur: false,
        },
        email: {
            value: "",
            isValid: false,
            elementType: "input",
            type: "text",
            placeholder: "Email Address",
            label: "Email Address",
            validation: emailCheck,
            blur: false,
          },
      
        companyName: {
            value: "",
            isValid: false,
            elementType: "input",
            type: "text",
            placeholder: "Email Address",
            label: "Company Name",
            validation: required,
            blur: false,
          },
      
          phoneNumber: {
            value: "",
            isValid: false,
            elementType: "input", //+2347065426253
            type: "text",
            placeholder: "Phone number",
            label: "Phone Number",
            validation: phoneNumberCheck,
            blur: false,
          },
      
          password: {
            value: "",
            isValid: false,
            elementType: "input",
            type: "password",
            placeholder: "••••••••",
            label: "Password",
            validation: password,
            onchange: "showPassword",
            info: "Password (6 Characters or more)",
            blur: false,
          },
      
          
        });
      
}

