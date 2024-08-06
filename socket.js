const http = require("http");
const socketIO = require("socket.io");

const server = http.createServer();

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (message) => {
    console.log("Received:", message);

    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server on port 8080
server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
