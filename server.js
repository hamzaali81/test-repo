// server.js
const http = require("http");
const { Worker } = require("worker_threads");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/fibonacci")) {
    const number = parseInt(req.url.split("/")[2], 10);

    const worker = new Worker("./fibonacciWorker.js");
    worker.postMessage(number);

    worker.on("message", (result) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Fibonacci result: ${result}`);
    });

    worker.on("error", (err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Error: ${err.message}`);
    });

    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
