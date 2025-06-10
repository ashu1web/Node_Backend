import dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { shortUrl,getOriginalUrl } from "./controller/url.js";
import { connecToDB } from "./database/db.js";
import {urlRoutes} from "./routes/url.js"

// Setup for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connecToDB();

// Middleware to parse form and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine and views path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use('/', urlRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`The server is running at port ${PORT}`);
});
