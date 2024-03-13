import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

// import express from "express";

// const app = express()(async () => {
//   try {
//     const databse = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_NAME}`
//     );
//     app.on("Error", (error) => {
//       console.log("Unable to connect to the database", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is Listening on Port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
