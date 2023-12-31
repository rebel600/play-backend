import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CROSS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ exptended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
