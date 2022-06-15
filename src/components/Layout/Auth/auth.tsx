import React from "react";
// import { renderRoutes, matchRoutes } from "react-router-config";


interface Props{
    children?: React.ReactNode;
}


const AuthLayout: React.FC<Props> = ({children}) => {
    return (
        <div className="auth w-full max-w-xl mx-auto">
            <div className="auth_container max-w-xl w-full h-full mx-auto mt-6 bg-[#FFFFFF] p-8 rounded-lg">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;