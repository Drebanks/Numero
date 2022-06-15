import React from "react";
import {ButtonProps} from "../../../components/global/buttonProps";
import ClipLoader from "react-spinners/ClipLoader";

// interface Props {
//     onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
//     children: React.ReactNode,
//     disabled?: boolean,
//     size?: string,
//     variant?: string,
//     type?: string,
// }

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    loading,
    disabled,
    variant = "default",
    size = 'md',
    type="submit",
    ...rest
}) => {
    return (
        <button
            className={`btn ${variant} ${size}` + (disabled ? ' disabled' : '')}
            onClick={onClick}
            disabled={disabled || loading}
            {...rest}
            >
            <ClipLoader color='#fff' loading={loading} size={25} />
            {!loading && children}
            </button>
    );
  };

export default Button;