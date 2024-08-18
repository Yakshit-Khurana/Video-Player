import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";
//connectDB is async-await and hence it returns a promise
//So handling promise
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB COnnection FAILED!!!", err);
  });

/*

ONE WAY TO CONNECT TO DATABASE a) using index.js itself- index.js has been polluted a lot due to following code. So we use 2nd method
b) using db folder in src.

a)
import express from "express";
import { DB_NAME } from "./constants";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Database connected at ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
