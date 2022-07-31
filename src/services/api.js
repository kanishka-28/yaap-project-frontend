import axios from "axios";

export const mailSender = (mail,name)=>{
    return axios.post("/auth/mail", {email: mail, name})
}