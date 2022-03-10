import axios from "axios";
import { IGame } from "../contexts/games";

export interface Game {
  game_id: number;
  name: string;
  description: string;
  release_date: string;
  metascore: number | null;
  required_age: number | null;
  header_image_path: string | null;
  requirement: string | null;
  platform_windows: number;
  platform_linux: number;
  platform_mac: number;
  is_favorite: number;
  is_deleted: number;
}

const API_ENDPOINT = "http://localhost:5000";

export function apiGameToUiGame(game: Game): IGame {
  return {
    game_id: game.game_id,
    name: game.name,
    release_date: game.release_date,
    metascore: game.metascore ?? 0,
    description: game.description,
    header_image_path: game.header_image_path ?? "",
    required_age: game.required_age ?? 0,
    requirement: game.requirement ?? "",
    genre: "",
    is_deleted: game.is_deleted === 1 ? true : false,
  };
}

export function uiGameToApi(game: IGame): Game {
  return {
    game_id: game.game_id,
    release_date: game.release_date ?? new Date().toISOString(),
    metascore: game.metascore ?? 0,
    required_age: game.required_age ?? 0,
    description: game.description ?? "",
    header_image_path: game.header_image_path ?? "",
    name: game.name,
    requirement: game.requirement ?? "",
    is_deleted: game.is_deleted ? 1 : 0,
    is_favorite: game.is_favorite ? 1 : 0,
    platform_linux: game.platform_linux ? 1 : 0,
    platform_mac: game.platform_mac ? 1 : 0,
    platform_windows: game.platform_windows ? 1 : 0,
  };
}

export function getAllGames(): Promise<Game[]> {
  return axios.get(`${API_ENDPOINT}/games`).then((r) => r.data.games);
}

export function addGame(game: IGame): Promise<number> {
  return axios.post(`${API_ENDPOINT}/games`, uiGameToApi(game)).then((r) => {
    console.log("Created game", r);
    return r.data.id;
  });
}

export function updateGame(game: Partial<IGame>, id: number) {
  return axios.patch(`${API_ENDPOINT}/games/${id}`, game).then((r) => {
    console.log("game updated", r);
  });
}

export function deleteGame(id: number) {
  return axios.delete(`${API_ENDPOINT}/games/${id}`).then((r) => {
    console.log("game deleted", r);
  });
}
