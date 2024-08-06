const request = require("supertest");
const app = require("./app"); // Import your Express app

describe("POST /login", () => {
  it("should login successfully with valid credentials", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "user1", password: "password123" });
    expect(response.status).toBe(200);
    expect(response.text).toBe("Login successful");
  });

  it("should return error for invalid credentials", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "user1", password: "wrongpassword" });
    expect(response.status).toBe(401);
    expect(response.text).toBe("Invalid credentials");
  });

  it("should return error for missing fields", async () => {
    const response = await request(app)
      .post("/login")
      .send({ username: "user1" });
    expect(response.status).toBe(400);
  });
});
