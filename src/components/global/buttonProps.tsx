import React from  "react";

export type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    loading?: boolean;
    children: React.ReactNode,
    disabled?: boolean;
    outline?: boolean;
    className?: string;
    icon?: string;
    size?: string,
    variant?: string,
    type?: string,
    tag?: "button" | "link";

} 


// & Omit<React.ComponentProps<"button">, "children"> &
//     React.ComponentProps<"a">;  