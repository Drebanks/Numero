import React, { useState } from 'react';
import Header from "../../../components/UI/Header/header";
import Business from "../../../components/Business/business";
import Information from "../../../components/Business/information";





const Info: React.FC = () => {

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
        <div className="w-full h-screen bg-[#9874E7] bg-opacity-25 " >
            <Header />
            <div className="w-full p-14">
                <Business/>
            </div>
            <div className="w-full p-14">
                <Information/>
            </div>

            


        </div>

    )
}

export default Info;