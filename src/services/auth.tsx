import { baseLink } from "../axios/base";
import axios  from "axios";

export const register = async () => {
    const response = await axios({
      method: "POST",
      url: `${baseLink}/api/v1/onboarding/createAccount`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  };
  