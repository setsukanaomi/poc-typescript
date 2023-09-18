import { Champion } from "@/protocols/champions.types";
import { championService } from "@/services/champions.service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postChampion(req: Request, res: Response) {
  const { name, origin, releaseYear } = req.body as Champion;

  await championService.createChampion(name, origin, releaseYear);

  return res.sendStatus(httpStatus.CREATED);
}

export async function getChampions(req: Request, res: Response) {
  const champions = await championService.getChampions();
  res.status(200).send(champions);
}

export const championsController = { postChampion, getChampions };
