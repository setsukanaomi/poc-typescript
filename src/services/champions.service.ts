import { conflictError } from "@/errors/errors";
import { Champion } from "@/protocols/champions.types";
import { championRepository } from "@/repositories/champions.repository";

async function createChampion(
  name: string,
  origin: string,
  releaseYear: string
) {
  const existingChampion = await championRepository.getChampion(name);
  if (existingChampion) throw conflictError();

  return championRepository.postChampion(name, origin, releaseYear);
}

async function getChampions(): Promise<Champion[]> {
  const champions = await championRepository.getChampions();
  return champions;
}
export const championService = { createChampion, getChampions };
