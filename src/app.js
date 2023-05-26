import express from "express";
import router from "./routes.js";
import cors from "cors"

const app = express();

app.use(express.json());
//usar o router
app.use((req, res, next) =>{
  res.header("Access-control-Allow-Origin", "*")
  app.use(cors());
  next();
})
app.use(router);

export default app;
