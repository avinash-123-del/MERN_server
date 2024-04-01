import express from "express";
import cors from "cors";
import { home, signUp, signIn, create, read, update, dlt } from "./route.js";


let app, hostName, port;

app = express();

hostName = "127.0.0.1";
port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get("/", home);


// ------ Sign Up In -----
app.post("/sign-up", signUp);
app.post("/sign-in", signIn);

// ------ CRUD -----
app.post("/create", create);
app.get("/read", read);
app.put("/update", update);
app.delete("/delete", dlt)




app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});