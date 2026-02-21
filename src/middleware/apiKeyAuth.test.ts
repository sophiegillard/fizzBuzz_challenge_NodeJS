import { apiKeyAuth } from "./apiKeyAuth.js";

describe("apiKeyAuth", () => {
  beforeEach(() => {
    process.env.API_KEY = "secret-key";
  });

  it("appelle next() si la clé est valide", () => {
    const req = { get: () => "secret-key" } as any;
    let nextCalled = false;
    const mockNext = () => {
      nextCalled = true;
    };
    const res = {
      status: () => res,
      json: () => {},
    } as any;

    apiKeyAuth(req, res, mockNext);
    expect(nextCalled).toBe(true);
  });

  it("retourne 401 si la clé est absente", () => {
    const req = { get: () => undefined } as any;
    const jsonMock = {
      json: (body: object) => expect(body).toHaveProperty("error"),
    };
    const res = {
      status: (code: number) => {
        expect(code).toBe(401);
        return jsonMock;
      },
    } as any;
    const mockNext = () => {};

    apiKeyAuth(req, res, mockNext);
  });

  it("retourne 401 si la clé est incorrecte", () => {
    const req = { get: () => "wrong-key" } as any;
    const jsonMock = {
      json: (body: object) => expect(body).toHaveProperty("error"),
    };
    const res = {
      status: (code: number) => {
        expect(code).toBe(401);
        return jsonMock;
      },
    } as any;
    const mockNext = () => {};

    apiKeyAuth(req, res, mockNext);
  });
});
