import request from "supertest";
import { app } from "./app.js";
import { describe, it, expect, beforeEach } from "@jest/globals";

describe("GET /api/fizzbuzz", () => {
    const validKey = "your-secret-api-key";

    beforeEach(() => {
        process.env.API_KEY = validKey;
    });

    it("retourne 401 sans clé API", async () => {
        const res = await request(app).get("/api/fizzbuzz");
        expect(res.status).toBe(401);
    });

    it("retourne le message d'accueil sans paramètre limit", async () => {
        const res = await request(app)
            .get("/api/fizzbuzz")
            .set("api_key", validKey);
        expect(res.status).toBe(200);
        expect(res.body).toEqual({
            message: "Veuillez spécifier une limite pour activer FizzBuzz",
        });
    });

    it("retourne la séquence FizzBuzz avec limit", async () => {
        const res = await request(app)
            .get("/api/fizzbuzz?limit=5")
            .set("api_key", validKey);
        expect(res.status).toBe(200);
        expect(res.body).toEqual([1, 2, "Fizz", 4, "Buzz"]);
    });

    it("retourne 400 pour limit invalide", async () => {
        const res = await request(app)
            .get("/api/fizzbuzz?limit=abc")
            .set("api_key", validKey);
        expect(res.status).toBe(400);
    });
});
