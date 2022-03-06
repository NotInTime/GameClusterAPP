import axios from "axios";

export interface Game {
  ID: number;
  releaseDate: string;
  metascoreRating: number;
  fsk: number;
  description: string;
  headerImagePath: string;
  name: string;
  steamRequirements: string;
}

const API_ENDPOINT = "http://localhost:5000";

export function getAllGames(): Promise<Game[]> {
  return axios.get(`${API_ENDPOINT}/games`).then((r) => r.data);
}
