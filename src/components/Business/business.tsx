import React, { useState } from 'react';
import Button from "../UI/Button/button";
import Input from "..//UI/Input/input";
import AuthLayout from '../Layout/Auth/auth';
import First from "../../assets/images/first.svg";




const Business: React.FC = () => {

    const [data, setData] = useState({
        email: "",
    })

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => { }


    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        console.log(event.target.value);
        // const value = event.target.value;
        // setSelectedOption(value);
    };



    return (
        <div className="w-full " >
            {/* <Header /> */}
            <div className="flex justify-between">
                <div>
                    <img src={First} alt="" />
                    <h1>Business Information</h1>
                    <p>In other to complete your registration, we need some
                        <br />extra
                        information about your Business</p>
                    <span>Hide</span>
                </div>
                <div className="basis-4/5">
                    <AuthLayout>
                        <form className="space-y-6">
                            <Input
                                label="RC Number"
                                placeholder="12345678"
                                type="text"
                                value={data.email}
                                onChange={(e) => handleInput(e)}
                            />
                            <Input
                                label="Business Name"
                                placeholder="Oluyomi & Sons"
                                type="text"
                                value={data.email}
                                onChange={(e) => handleInput(e)}
                            />
                            <div>
                                <label htmlFor="" className="text-sm font-bold text-primary-600 block">Type of Business</label>
                                <select defaultValue="Select" onChange={(e) => handleSelect(e)} name="" id="" className="w-full p-2 mt-1 border border-lightblue rounded mt-1" >
                                    <option value="role">Role</option>
                                    <option value="role">Owner</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <Button
                                    onClick={() => alert('Button 1 is clicked !')}
                                    variant="default"
                                    size="md"
                                    disabled={false}
                                    loading={false}
                                >
                                    Proceed
                                </Button>
                            </div>
                        </form>

                    </AuthLayout>
                </div>
            </div>

        </div>

    )
}

export default Business;