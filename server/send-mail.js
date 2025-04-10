// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");

import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

app.post("/send-email", async (req, res) => {
    const { name, email, msg } = req.body;
    console.log(name, email, msg)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    try {
        const info = await transporter.sendMail({
            from: process.env.USER,
            to: process.env.USER,
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`,
        });
        console.log("Email sent successfully", info.messageId);
        res.status(200).send({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send({ message: "Failed to send email", error });
    }

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
