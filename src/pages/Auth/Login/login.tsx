import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Button from "../../../components/UI/Button/button";
import Header from "../../../components/UI/Header/header";
import AuthLayout from '../../../components/Layout/Auth/auth';
import Input from "../../../components/UI/Input/input";
import { Eye, EyeCancel } from "../../../components/Eye/eye";


interface IData {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const [password, showPassword] = useState(false);

    const [data, setData] = useState<IData>({
        email: "",
        password: "",
    })

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
                        <div className="relative">
                            <Input
                                label="Password (6 Characters or more)"
                                placeholder="******"
                                type={password ? "text" : "password"}
                                value={data.password}
                                onChange={onChange}
                                name="password"
                            />
                            <div onClick={() => showPassword(!password)} className="absolute cursor-pointer top-9 right-7">
                                {password ? <EyeCancel /> : <Eye />}
                            </div>
                        </div>
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
                        Login
                    </Button>
                </div>
                <Link to="/forgotpassword"><p className="text-center text-lightpurple text-opacity-40">Forgot Password?</p></Link>
            </div>
        </div>



    )
}

export default Login;