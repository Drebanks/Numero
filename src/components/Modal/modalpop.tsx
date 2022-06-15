import React, { useState } from "react";
import ModalLayout from "../../components/UI/Modal/modal";
import Button from "../../components/UI/Button/button";
import Input from "../../components/UI/Input/input";

interface IData {
    otp: string;
}


const Modalpop: React.FC = () => {
    const [data, setData] = useState<IData>({
        otp: ""
    })



    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log("dare")


    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.preventDefault();
        const userValue = event.target.value;
        console.log(event.target.name)
        setData({ ...data, [event.target.name]: event.target.value });
    };

    return (
        <ModalLayout>
            <div className="p-6 ">
                <h1 className="tex-primary-400 text-center font-body">
                    Email Verification
                </h1>
                <p className="text-center text-lightgrey-300">
                    An OTP has been sent to the email address<br /> provided, Please input the OTP below
                </p>
                <br />
                <Input
                    label="Enter OTP from Email"
                    placeholder="One time Password (OTP)"
                    type="text"
                    name="otp"
                    value={data.otp}
                    onChange={handleChange}
                />
                <br />
                <div className="flex justify-between mb-8">
                    <p className="text-purple-300">Resend Code</p>
                    <p className="text-primary-300">20 seconds left</p>
                </div>

                <Button
                    onClick={handleClick}
                    variant="default"
                    size="md"
                    loading={false}
                >
                    Proceed
                </Button>
            </div>

        </ModalLayout>
    )
}

export default Modalpop;