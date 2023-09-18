import express, { Application, json } from "express";
import "express-async-errors";
import cors from "cors";
import championsRouter from "./routes/champions.routes";
import errorHandlingMiddleware from "@/middlewares/errors.middleware";

const app: Application = express();

app.use(cors());
app.use(json());
app.use(championsRouter);
app.use(errorHandlingMiddleware);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`--------------- Server is up and running on port ${PORT}`);
});
