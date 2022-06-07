import React, { useState } from "react";

const useForgotForm = () => {
    const [forgotForm, setForgotForm] = useState ({
    email: {
      value: "",
      isValid: false,
      elementType: "input",
      type: "text",
      placeholder: "Email Address",
      label: "Email Address",
      validation: emailCheck,
      blur: false,
      // another
    },
});

    const [forgotFormValid, setForgotFormValid] = useState(false);

    return [
    forgotForm, 
    setForgotForm,
    forgotFormValid,
    setForgotFormValid,
  ];
};

export default useForgotForm;