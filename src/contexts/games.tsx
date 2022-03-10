import createStateContext from "react-use/lib/factory/createStateContext";

export interface IGame {
  game_id: number;
  name: string;
  genre: string;
  imageURL?: string;
  description?: string;
  header_image_path?: string;
  is_deleted?: boolean;
  is_favorite?: boolean;
  metascore?: number;
  platform_linux?: boolean;
  platform_mac?: boolean;
  platform_windows?: boolean;
  release_date?: string;
  required_age?: number;
  requirement?: string;
}

export interface IGamesContext {
  games: IGame[];
}

export const DefaultValues: IGamesContext = {
  games: [],
};

export const [useGameContext, GameContextProvider] =
  createStateContext<IGamesContext>(DefaultValues);
