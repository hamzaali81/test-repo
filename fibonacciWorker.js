const { Worker, isMainThread, parentPort } = require("worker_threads");

// if (isMainThread) {
//   const worker = new Worker(__filename);
//   worker.on("message", (result) => {
//     console.log("Fibonacci result:", result);
//   });
//   worker.postMessage(10);
// } else {
//   parentPort.on("message", (num) => {
//     const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));
//     parentPort.postMessage(fibonacci(num));
//   });
// }

const { parentPort } = require("worker_threads");

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

parentPort.on("message", (n) => {
  parentPort.postMessage(fibonacci(n));
});
