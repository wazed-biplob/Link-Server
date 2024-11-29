import { Server } from "http";
import mongoose from "mongoose";
import config from "./app/config";
import { app } from "./app";
let server: Server;

async function main() {
  try {
    mongoose
      .connect(config.database_url as string)
      .then(() => console.log("MongoDB connected."));
    app.listen(config.port, () => {
      console.log(`app is running at ${config.port}`);
    });
  } catch (e) {
    console.log(`Error : `, e);
  }
}

main();
