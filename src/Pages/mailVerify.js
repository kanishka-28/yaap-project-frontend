import React, { useState, useEffect, useContext } from 'react'
import { createTransport } from 'nodemailer';
// import SendMail from '../components/mailSender'

const MailVerify = () => {

    const [email, setEmail] = useState("")


    var transporter = createTransport({
        service: 'gmail',
        auth: {
            user: 'kanishka.gour.mat20@itbhu.ac.in',
            pass: 'Kanishka@1305'
        }
    });

    var mailOptions = {
        from: 'kanishka.gour.mat20@itbhu.ac.in',
        to: 'kanishka@nocapmeta.in',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    const SendMail = (e) => {
        e.preventDefault();
        return (
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log({ error });
                } else {
                    console.log('Email sent: ' + info.response);
                }
            })
        )
    }
    const emailHandle = (e) => {
        setEmail(e.target.value)
    }

    return (
        <>
            <div className="flex justify-center text-center items-center h-max w-full">
                <div className="border border-gray-300 rounded-md bg-gradient-to-br from-pink-400 to-yellow-100">
                    <h2 className="text-2xl font-semibold my-3">Verify email</h2>
                    <form className="my-3">
                        <input type="text" placeholder="email" className="border border-gray-300 rounded-md text-center m-2 p-2 w-4/5" onChange={emailHandle} value={email} />
                    </form>
                    <form>
                        <button onClick={SendMail} className={`text-white bg-blue-500 rounded-md p-2 px-6 mb-3" cursor-pointer`}>Send OTP</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MailVerify
