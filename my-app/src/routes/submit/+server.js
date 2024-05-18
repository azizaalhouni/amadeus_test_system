import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import dotenv from 'dotenv';

dotenv.config();

export async function POST({ request }) {
    const { name, score, total } = await request.json();

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: `"Test System" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        subject: 'Test Result',
        text: `${name} scored ${score} out of ${total}.`
    };

    try {
        await transporter.sendMail(mailOptions);
        return json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return json({ message: 'Failed to send email' }, { status: 500 });
    }
}
