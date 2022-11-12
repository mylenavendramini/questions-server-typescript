import express, { Express } from "express";
import mongoose from "mongoose";
import questionRoutes from "./routes";
import cors from "cors";
import * as dotenv from "dotenv";

const app: Express = express();
const PORT: string | number = process.env.PORT || 4001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes:
app.use(questionRoutes);

// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.pihxa.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
dotenv.config();
const uri: any = process.env.DB_STRING;
console.log(uri);

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
