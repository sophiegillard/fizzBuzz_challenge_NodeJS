import { Router } from "express";
import { generateFizzBuzz } from "../services/fizzBuzz.js";

const router = Router();

router.get("/", (req, res) => {
    const limitParam = req.query.limit as string | undefined;
    if (limitParam !== undefined) {
        const limitNumber = parseInt(limitParam, 10);
        if (isNaN(limitNumber) || limitNumber < 1) {
            return res.status(400).json({ error: "Invalid limit" });
        }
        return res.json(generateFizzBuzz(limitNumber));
    }
    res.json({ message: "Hello, World!" });
});

export default router;
