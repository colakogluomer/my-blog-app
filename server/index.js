import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/postRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extendend: true }));
app.use(cors());
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Backend Here!!!");
});

const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .then(() => app.listen(PORT, () => console.log("server listening")))
  .catch((error) => console.log(error.message));
