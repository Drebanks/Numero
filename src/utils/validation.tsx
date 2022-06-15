import React from "react";

type IProps = {
    value?: string;
}

export const phoneNumber = (value: string) => {
    const regex = /^[0-9]{11}/;
    return regex.test(value);
};

export const password= (value: string) => {
    return value.length >= 8;
};

export const required = (value: string) => {
    return value.length > 0;
};

export const emailCheck = (value: string) => {
    const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(value);
};
