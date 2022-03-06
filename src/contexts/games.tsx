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
  games: [
    {
      id: 1,
      title: "Fortnite",
      genre: "Battle Royale",
      imageURL:
        "https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg",
    },
    {
      id: 2,
      title: "Call of Duty: Modern Warfare",
      genre: "Shooter",
      imageURL:
        "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg",
    },
    {
      id: 3,
      title: "Darksouls 3",
      genre: "Action Adventure",
      imageURL:
        "https://s3.gaming-cdn.com/images/products/857/orig/spiel-steam-dark-souls-3-cover.jpg",
    },
    {
      id: 4,
      title: "Super Mario 64",
      genre: "Jump & Run",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg",
    },
  ],
};

export const [useGameContext, GameContextProvider] =
  createStateContext<IGamesContext>(DefaultValues);
