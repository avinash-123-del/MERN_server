import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { home, signUp, signIn, create, read, update, dlt } from "./route.js";
import { jwtAuthVerify } from "./jwt.js";

const app = express();

app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", home);


// ------ Sign Up In -----
app.post("/sign-up", signUp);
app.post("/sign-in", signIn);

// ------ CRUD -----
app.post("/create", jwtAuthVerify, create);
app.post("/read", read);
app.post("/update", jwtAuthVerify, update);
app.post("/delete", jwtAuthVerify, dlt)


app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

