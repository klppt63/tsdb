import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendSMS = async (recipientNumber: string, carrierDomain: string, message: string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const recipientEmail = `${recipientNumber}@${carrierDomain}`;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipientEmail,
        subject: 'SMS Notification',
        text: message,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`SMS sent successfully: ${info.response}`);
    } catch (error) {
        console.error(`Failed to send SMS: ${error}`);
    }
};
