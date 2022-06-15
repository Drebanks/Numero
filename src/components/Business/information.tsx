import React, { useState } from 'react';
import Button from "..//UI/Button/button";
import Input from "..//UI/Input/input";
import AuthLayout from '../Layout/Auth/auth';
import Second from "../../assets/images/second.svg";




const Information: React.FC = () => {

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
        <div className="w-full h-screen " >
            <div className="flex justify-between basis">
                <div>
                    <div className="flex gap-x-2">
                        <img src={Second} alt="" />
                        <img src={Second} alt="" />
                    </div>
                    <h1>Tell us a bit more about you</h1>
                    <p>In line with our Know your Customer/Business Policy, <br/>
                        we require you to provide us with a few information about <br/>
                        you
                    </p>
                    <span>Hide</span>
                </div>
                <div className="basis-4/5">
                    <AuthLayout>
                        <form className="space-y-6">
                            <Input
                                label="BVN"
                                placeholder="12345678"
                                type="text"
                                value={data.email}
                                onChange={(e) => handleInput(e)}
                            />
                            <Input
                                label="Date of Birth"
                                placeholder="DD/MM/YYYY"
                                type="text"
                                value={data.email}
                                onChange={(e) => handleInput(e)}
                            />
                            <Input
                                label="NIN"
                                placeholder="123445566788"
                                type="text"
                                value={data.email}
                                onChange={(e) => handleInput(e)}
                            />
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

export default Information;