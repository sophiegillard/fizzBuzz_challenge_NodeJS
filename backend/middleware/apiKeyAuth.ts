import { type Request, type Response, type NextFunction } from "express";

const DEFAULT_FRONTEND_ORIGINS =
    "http://localhost:5173,http://localhost:5175,http://localhost:3001,http://127.0.0.1:5173,http://127.0.0.1:3001";

function isTrustedFrontendRequest(req: Request): boolean {
    const origins = (process.env.FRONTEND_ORIGINS || DEFAULT_FRONTEND_ORIGINS)
        .split(",")
        .map((o) => o.trim().toLowerCase())
        .filter(Boolean);
    const origin = req.get("origin")?.toLowerCase();
    const referer = req.get("referer")?.replace(/\/$/, "").toLowerCase();
    return [origin, referer].some(
        (v) => v && origins.some((o) => v === o || v.startsWith(o + "/")),
    );
}

export function apiKeyAuth(
    req: Request,
    res: Response,
    next: NextFunction,
): void {
    if (isTrustedFrontendRequest(req)) {
        next();
        return;
    }
    const apiKey = req.get("api_key")?.trim();
    const expectedKey = process.env.API_KEY?.trim();
    if (!apiKey || !expectedKey || apiKey !== expectedKey) {
        res.status(401).json({ error: "La clé API est invalide ou manquante" });
        return;
    }
    next();
}
