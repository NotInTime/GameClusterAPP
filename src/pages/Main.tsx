import { useState } from "react";
import "../App.css";
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
import { useGameContext } from "../contexts/games";

function Main() {
  const [games, SetGames] = useGameContext();
  const [showDetails, SetShowDetails] = useState(true);

  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-900 flex-1">
        {showDetails ?
          <div>
            <GameDetails />
          </div>
          :
          <div className="relative grid-cols-4 grid-rows-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid md:pt-0 pt-8 justify-center ">
            {games.games.map((currentGame) => {
              return (
                <div onClick={() => SetShowDetails(true)}>
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
        }
      </div>
    </>
  );
}

export default Main;
