import nodemailer from "nodemailer";

// constants
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const MAIN = process.env.MAIN;

export const sendEmail = async ({ to }: { to: string }) => {
    try {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            auth: {
                user: USER,
                pass: PASSWORD,
            },
        });

        const mailOptions = {
            from: '"Sumit Nanda" <sumit.nanda@exarealty.ca>',
            to,
            subject: "Contact request received successfully",
            html: `<p>Thanks for your contact request. I will be in touch with you within 24 hours. Have a great day!</p>`,
        };

        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
