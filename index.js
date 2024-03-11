import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./src/routes/user.js";
import { bugRouter } from "./src/routes/bugs.js";
import { adminRouter } from "./src/routes/admin.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/bug",bugRouter);

mongoose.connect("mongodb+srv://pranshu007parashar:g5PAnEWaJX2lKUza@cluster0.blxbsca.mongodb.net/bug_tracker?retryWrites=true&w=majority&appName=Cluster0")
        .then(()=>console.log("Connected to database"))
        .catch(()=>console.log("Could not connect"))

app.listen(3002, () => console.log("Server started"));