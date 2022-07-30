import axios from "axios";

export const mailSender = (mail)=>{
    return axios.post("/auth/mail", {email: mail})
}