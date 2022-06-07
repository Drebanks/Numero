import React from "react";

interface Props {
    onClick: (event: React.MouseEvent) => void,
    children: React.ReactNode,
    disabled?: boolean,
    size?: string,
    variant?: string,
    type?: string,
}

const Button: React.FC<Props> = ({
    children,
    onClick,
    disabled = true,
    variant = "default",
    size = 'md',
    type="submit",
    ...rest
}) => {
    return (
        <button
            className={`btn ${variant} ${size}` + (disabled ? ' disabled' : '')}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {children}
            </button>
    );
  };

export default Button;