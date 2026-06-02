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

// Dynamic CORS configurations supporting various local dev ports or configured envs
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : ["http://localhost:5173", "http://localhost:5174", "http://127.0.0.1:5173", "http://127.0.0.1:5174"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || ALLOWED_ORIGINS.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

const STORAGE_PATH = path.join(__dirname, "contacts.json");

const readContacts = () => {
  try {
    if (!fs.existsSync(STORAGE_PATH)) {
      return [];
    }
    const raw = fs.readFileSync(STORAGE_PATH, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading contacts.json, fallback to empty array:", err.message);
    return [];
  }
};

const saveContacts = (contacts) => {
  try {
    const dir = path.dirname(STORAGE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(STORAGE_PATH, JSON.stringify(contacts, null, 2), "utf8");
  } catch (err) {
    console.error("Failed to write to contacts.json:", err);
  }
};

/*
 * NOTE: Gmail SMTP requires an "App Password" to authenticate programmatically if 2FA is active on your account.
 * Follow these instructions to set it up:
 * 1. Go to your Google Account Settings -> Security.
 * 2. Search for "App Passwords" (ensure 2-step verification is enabled first).
 * 3. Generate a password for "Mail" on "Windows Computer" (or select other/custom).
 * 4. Paste the 16-letter code into your VITE_API_URL or GMAIL_PASS environment variables inside your `.env` file.
 */
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

