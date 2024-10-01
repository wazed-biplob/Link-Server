import { Server } from "http";
import mongoose from "mongoose";
import config from "./app/config";
import { app } from "./app";
let server: Server;

async function main() {
  try {
    mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`app is running at ${config.port}`);
    });
  } catch (e) {
    console.log(`Error : `, e);
  }
}

main();

process.on("unhandledRejection", () => {
  console.log(`unhandled rejection detected, shutting down the server...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log(`uncaught exception detected, shutting down the server...`);

  process.exit(1);
});
