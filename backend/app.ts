import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fizzBuzzRouter from "./routes/fizzbuzz.js";
import { apiKeyAuth } from "./middleware/apiKeyAuth.js";

dotenv.config();

const app = express();
app.use(cors());
app.use("/api/fizzbuzz", apiKeyAuth, fizzBuzzRouter);

export { app };
