import { championsController } from "@/controllers/champions.controller";
import { validateSchema } from "@/middlewares/validateSchema.middleware";
import { championSchema } from "@/schemas/champions.schemas";
import { Router } from "express";

const championsRouter = Router();

championsRouter.post(
  "/champion",
  validateSchema(championSchema),
  championsController.postChampion
);
championsRouter.get("/champions", championsController.getChampions);

export default championsRouter;
