import React, {useState} from "react";
import ModalLayout from "../../../components/UI/Modal/modal";
import Button from "../../../components/UI/Button/button";
import Input from "../../../components/UI/Input/input";

interface IData{
    otp:string;
}


const Modalpop: React.FC = () => {
    const [data, setData] = useState<IData>({
        otp: ""
    })

    
        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            // event.preventDefault();
            const userValue = event.target.value;
            console.log(event.target.name)
            setData({ ...data, [event.target.name]: event.target.value });
          };
          
    return (
        <ModalLayout>
            <div className="p-6">
                <h1 className="tex-primary-400 text-center font-body">
                    Email Verification
                </h1>
                <p className="text-center text-lightgrey-300">
                    An OTP has been sent to the email address<br /> provided, Please input the OTP below
                </p>
                <br/>
                <Input
                    label="Enter OTP from Email"
                    placeholder="One time Password (OTP)"
                    type="text"
                    name="otp"
                    value={data.otp}
                    onChange={onChange}
                />
                <br/>
                <div className="flex justify-between mb-8">
                    <p className="text-purple-300">Resend Code</p>
                    <p className="text-primary-300">20 seconds left</p>
                </div>

                <Button
                    onClick={() => alert('Button 1 is clicked !')}
                    variant="default"
                    size="md"
                    loading={true}
                >
                    Proceed
                </Button>
            </div>

        </ModalLayout>
    )
}

export default Modalpop;