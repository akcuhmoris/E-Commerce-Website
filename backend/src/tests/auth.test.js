const request = require("supertest");
const app = require("../src/index"); // refactor index.js to export app

describe("Auth API", () => {
    it("should register then login", async() => {
        await request(app)
            .post("/api/auth/register")
            .send({ email: "t@test.com", password: "pass123", name: "Test" })
            .expect(201);

        const res = await request(app)
            .post("/api/auth/login")
            .send({ email: "t@test.com", password: "pass123" })
            .expect(200);
        expect(res.body.token).toBeDefined();
    });
});