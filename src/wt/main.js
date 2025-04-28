import { Worker } from "worker_threads";
import os from "os";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  // Write your code here
  const numCPUs = os.cpus().length;
  const results = [];

  const workerPath = join(__dirname, "worker.js");
  for (let i = 0; i < numCPUs; i++) {
    results.push(
      new Promise((resolve) => {
        const worker = new Worker(workerPath, { type: "module" });

        worker.once("message", (data) => {
          resolve({ status: "resolved", data });
        });

        worker.once("error", () => {
          resolve({ status: "error", data: null });
        });

        worker.postMessage(10 + i);
      })
    );
  }

  const finalResults = await Promise.all(results);
  console.log(finalResults);
};

await performCalculations();
