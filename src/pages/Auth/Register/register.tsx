import React, { FC, useState, MouseEvent } from 'react';
import Header from "../../../components/UI/Header/header";
import Button from "../../../components/UI/Button/button";
import AuthLayout from '../../../components/Layout/Auth/auth';
import Input from "../../../components/UI/Input/input";
import { Eye, EyeCancel } from "../../../components/Eye/eye";
import Modalpop from "../../../components/Modal/modalpop";
import {phoneNumber, emailCheck, password,} from "../../../utils/validation";


interface IData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  password: string;
  phoneNumber: string;
  role: string;
}

const Register: React.FC = () => {
  const [password, showPassword] = useState(false);
  const [showModal, setShowModal] = useState(false)


  const [data, setData] = useState<IData>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    password: "",
    phoneNumber: "",
    role: "",
  });






  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    console.log(event.target.name)
    setData({ ...data, [event.target.name]: event.target.value });
    // const value = event.target.value;
    // setSelectedOption(value);
  };


  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log("dare")
    setShowModal(true)


  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

  }





  return (
    <>
      {showModal && <Modalpop />}
      <div className="w-full h-screen bg-[#9874E7] bg-opacity-25 " >
        <Header />
        <div className="w-full max-w-xl mx-auto">
          <p className="text-center text-2xl font-medium">Get Your Business Account</p>
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <AuthLayout>
                <div className="w-full flex justify-between">
                  <div className="w-[49%]">
                    <Input
                      label="Name"
                      placeholder="First Name"
                      type="text"
                      value={data.firstName}
                      required={true}
                      onChange={handleChange}
                      name="firstName"
                    />
                  </div>
                  <div className="w-[49%] mt-5">
                    <Input
                      required={true}
                      placeholder="Last Name"
                      type="text"
                      value={data.lastName}
                      onChange={handleChange}
                      name="lastName"
                    />
                  </div>
                </div>
                <Input
                  label="Email"
                  placeholder="Email@gmail.com"
                  type="text"
                  value={data.email}
                  onChange={handleChange}
                  name='email'
                  required={true}
                />
                <Input
                  required={true}
                  label="Company Name"
                  placeholder="Company Name"
                  type="text"
                  value={data.companyName}
                  onChange={handleChange}
                  name="companyName"
                />
                <div className="relative">
                  <Input
                    label="Password (6 Characters or more)"
                    required={true}
                    placeholder="******"
                    type={password ? "text" : "password"}
                    value={data.password}
                    onChange={handleChange}
                    name="password"
                  />
                  <div onClick={() => showPassword(!password)} className="absolute cursor-pointer top-9 right-7">
                    {password ? <EyeCancel /> : <Eye />}
                  </div>
                </div>
                <Input
                  label="Phone Number"
                  placeholder="+234"
                  type="text"
                  value={data.phoneNumber}
                  onChange={handleChange}
                  name="phoneNumber"
                />
                <div>
                  <label htmlFor="" className="text-sm font-bold text-primary-600 block">What's your role</label>
                  <select onChange={(e) => handleSelect(e)} name="role" id="" className="w-full p-2 mt-1 border border-lightblue rounded mt-1" >
                    <option value={data.role}>Business Owner</option>
                    <option value={data.role}>Developer</option>
                  </select>
                </div>
              </AuthLayout>
              <div className="mt-4">
                {!showModal && (
                  <Button
                  onClick={handleClick}
                  variant="default"
                  size="md"
                  type="submit"
                  loading={false}
                  >
                  Sign Up
                </Button>
                  )}
              </div>
        </form>
          </div>

        <div className="text-center text-lightpurple text-opacity-40">
          <p>By clicking this, you agree to our Terms and Conditions</p>
        </div>


      </div>
    </div>
    </>
  )
}

export default Register;