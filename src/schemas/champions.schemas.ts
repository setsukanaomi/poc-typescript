import { Champion } from "@/protocols/champions.types";
import Joi from "joi";

export const championSchema = Joi.object<Champion>({
  name: Joi.string().required(),
  origin: Joi.string().required(),
  releaseYear: Joi.string().required().max(4),
});
