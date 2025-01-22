import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, msg } = req.body;

        console.log(name, email, msg);

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            port: 587,
            secure: false,
            auth: {
                user: "aniket190705@gmail.com",
                pass: "cxgcsdfcuyxadwpt",
            },
        });

        try {
            const info = await transporter.sendMail({
                from: "aniket190705@gmail.com",
                to: "aniket190705@gmail.com",
                subject: "New Contact Form Submission",
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`,
            });
            console.log("Email sent successfully", info.messageId);
            res.status(200).send({ message: "Email sent successfully!" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).send({ message: "Failed to send email", error });
        }
    } else {
        res.status(405).send({ message: "Method not allowed" });
    }
}
