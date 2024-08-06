const express = require("express");
const app = express();
app.use(express.json());

const users = {
  user1: "password123"
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username] === password) {
    res.status(200).send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.listen(3000);
