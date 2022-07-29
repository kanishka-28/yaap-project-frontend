import { createTransport } from 'nodemailer';

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

const SendMail = () => {
    return (
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log({error});
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    )
}

export default SendMail