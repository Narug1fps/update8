import express from "express";
import bodyParser from "body-parser";
import newsRouter from "./routes/news.router.js";
import userRouter from "./routes/user.router.js"
import indexRouter from "./routes/index.router.js"
import cors from "cors"
import mongoose from "./config/mongoose.config.js";
import dotenv from "dotenv";


const app = express();
const port = process.env.PORT || 3000;
dotenv.config();




mongoose();

app.use(cors())

app.use(bodyParser.json());

app.use("/api", indexRouter)
app.use("/api/news", newsRouter)
app.use("/api/user", userRouter)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});