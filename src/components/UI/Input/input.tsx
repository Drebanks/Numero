import React, { FC, useState } from "react";

type Props = {
  placeholder?: string;
  defaultValue?: string;
  label?: string;
  id?: string;
  type: "number" | "text" | "email" | "password";
  name?: string;
  value?: string;
  autoComplete?: "on" | "off";
  readOnly?: boolean;
  autoFocus?: boolean;
  required?: boolean;
  errorMessage?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent) => void;
}

const Input: FC<Props> = ({
  defaultValue,
  value,
  label,
  id,
  placeholder,
  type,
  name,
  autoComplete,
  autoFocus,
  readOnly,
  required,
  onChange,
  onBlur,
}) => {
  // let handleEnteredInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.stopPropagation();
  //   onChange && onChange(event);
  // };

  // let handleOnBlur = (event: React.FocusEvent) => {
  //   onBlur && onBlur(event);
  // };
  // console.log(value)
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <label htmlFor={id} className="flex flex-col">
      <span className="w- full text-[#04004D] font-medium font-body not-italic leading-5  ">
        {label}
      </span>
      <input
        className="w-full p-2 border border-lightblue rounded mt-1 font-normal text-[#1F1414]" 
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        readOnly={readOnly}
        required={required}
      />
      {errorMessage && (
        <span className="absolute bottom-[-20px] text-res">
          {errorMessage}
        </span>
      )}
    </label>
  );
};
export default Input;



