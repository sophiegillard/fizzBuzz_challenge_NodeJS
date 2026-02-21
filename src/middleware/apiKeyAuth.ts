import { type Request, type Response, type NextFunction } from "express";

export function apiKeyAuth(
    req: Request,
    res: Response,
    next: NextFunction,
): void {
    const apiKey = req.get("api_key")?.trim();
    const expectedKey = process.env.API_KEY?.trim();
    if (!apiKey || !expectedKey || apiKey !== expectedKey) {
        res.status(401).json({ error: "Invalid or missing API key lol" });
        return;
    }
    next();
}
