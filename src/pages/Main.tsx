import { useEffect } from "react";
import "../App.css";
import Game from "../components/Game";
import Sidebar from "../components/Sidebar";
import { useGameContext } from "../contexts/games";

function Main() {
  const [games, SetGames] = useGameContext();

  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-900 flex-1">
        {/*Game List*/}
        <div className="relative grid-cols-4 grid-rows-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid md:pt-0 pt-8 justify-center ">
          {games.games.map((currentGame) => {
            return (
              <div onClick={() => console.log(currentGame)}>
                <Game
                  id={currentGame.id}
                  Title={currentGame.title}
                  Genre={currentGame.genre}
                  ImageURL={currentGame.imageURL}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
