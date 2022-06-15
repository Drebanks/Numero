import React from 'react';
import Logo from "../../../assets/images/auth/Logo.svg";
import { Link } from "react-router-dom";



const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="w-full p-14 flex justify-between cursor-pointer">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <Link to="./login">Sign In</Link>
      </div>
    </div>
  )
}

export default Header