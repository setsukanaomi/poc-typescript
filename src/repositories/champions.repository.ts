import db from "@/database/database.connection";
import { Champion } from "@/protocols/champions.types";

async function postChampion(name: string, origin: string, releaseYear: string) {
  return db.query<Champion>(
    `
  INSERT INTO champions (name, origin, "releaseYear")
  VALUES ($1, $2, $3)
  RETURNING *;
  `,
    [name, origin, releaseYear]
  );
}

async function getChampion(name: string) {
  const champion = await db.query<Champion>(
    `
  SELECT * FROM champions WHERE name=$1;
`,
    [name]
  );
  return champion.rows[0];
}

async function getChampions() {
  const champions = await db.query<Champion>(`
    SELECT * FROM champions;
  `);
  return champions.rows;
}

export const championRepository = { postChampion, getChampion, getChampions };
