import React from "react";
import ModalLayout  from "../../../components/UI/Modal/modal";
import Button from "../../../components/UI/Button/button";
import Group from "../../../assets/images/auth/Group.png";

const Success: React.FC = () => {
    return(
        <ModalLayout>
            <div className="p-6">
                <div className="flex justify-center" >
                    <img src={Group} alt=""/>
                </div>
                <p className="text-xl text-primary-300 text-center mb-6">Account Created Successfully</p>
                <Button
                    onClick={() => alert('Button 1 is clicked !')}
                    variant="default"
                    size="md"
                >
                    Login
                </Button>
            </div>
        </ModalLayout>
    )
}

export default Success;