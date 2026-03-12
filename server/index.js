import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

const STORAGE_PATH = path.join(__dirname, "contacts.json");

const readContacts = () => {
  try {
    const raw = fs.readFileSync(STORAGE_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

const saveContacts = (contacts) => {
  fs.writeFileSync(STORAGE_PATH, JSON.stringify(contacts, null, 2), "utf8");
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const entry = {
    id: Date.now(),
    name,
    email,
    subject,
    message,
    createdAt: new Date().toISOString(),
  };

  try {
    const contacts = readContacts();
    contacts.push(entry);
    saveContacts(contacts);
  } catch (err) {
    console.error("Failed to store contact message:", err);
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New message from ${name} <${email}>:\n\n${message}\n\nSaved at: ${entry.createdAt}`,
    });
  } catch (err) {
    console.error("Failed to send email:", err);
    return res
      .status(500)
      .json({ message: "Message saved but email could not be sent." });
  }

  return res.status(201).json({ message: "Message sent successfully." });
});

app.listen(PORT, () => {
  console.log(`Contact server listening on http://localhost:${PORT}`);
});

