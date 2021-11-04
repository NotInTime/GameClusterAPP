import createStateContext from "react-use/lib/factory/createStateContext";

export interface IGame {
  id: number;
  title: string;
  genre: string;
  imageURL?: string;
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
  ],
};

export const [useGameContext, GameContextProvider] =
  createStateContext<IGamesContext>(DefaultValues);
