import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button/button";
import Header from "../../../components/UI/Header/header";
import Input from "../../../components/UI/Input/input";
import AuthLayout from '../../../components/Layout/Auth/auth';

interface IData {
    email: string;
}



const Forgot: React.FC = () => {

    const [data, setData] = useState<IData>({
        email: "",
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.preventDefault();
        const userValue = event.target.value;
        console.log(event.target.name)
        setData({ ...data, [event.target.name]: event.target.value });
    };
    return (
        <div className="w-full h-screen bg-[#9874E7] bg-opacity-25 " >
            <Header />
            <div className="w-full max-w-xl mx-auto">

                <AuthLayout>
                    <form className="space-y-6">
                        <Input
                            label="Email"
                            placeholder="email@gmail.com"
                            type="text"
                            value={data.email}
                            onChange={onChange}
                            name="email"
                        />
                    </form>

                </AuthLayout>

                <div className="mt-4">
                    <Button
                        onClick={() => alert('Button 1 is clicked !')}
                        variant="default"
                        size="md"
                        disabled={true}
                        loading={false}

                    >
                        Forgot Password
                    </Button>
                </div>
                <Link to="/login"><p className="text-center text-lightpurple text-opacity-40 cursor-pointer">Login</p></Link>

            </div>
        </div>

    )
}

export default Forgot;