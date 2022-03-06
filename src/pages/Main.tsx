import { useState } from "react";
import "../App.css";
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
import { IGame } from "../contexts/games";
import TestSteamApi from "../api/steamTestAPI";
import { getAllGames } from "../api/games";

interface IMainProps {
  displayedList: IGame[];
}

const Main: React.FC<IMainProps> = ({ displayedList }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [clickedGame, setClickedGame] = useState<IGame | null>(null);

  return (
    <>
      <button className="bg-red-900 m-20" onClick={getAllGames}>
        GET GAMES
      </button>
      <div className="bg-gray-900 flex-1 relative">
        {showDetails && clickedGame ? (
          <GameDetails
            game={clickedGame}
            onClose={() => {
              setShowDetails(false);
            }}
          />
        ) : (
          <div className="pt-8 md:pt-0">
            {displayedList.length === 0 && (
              <div className="text-gray-500 font-semibold h-screen flex justify-center items-center">
                No Games Found
              </div>
            )}
            <div className="relative grid-rows-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 grid justify-center mx-2">
              {displayedList.map((currentGame, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setShowDetails(true);
                    setClickedGame(currentGame);
                  }}
                >
                  <Game
                    id={currentGame.id}
                    Title={currentGame.title}
                    Genre={currentGame.genre}
                    ImageURL={currentGame.imageURL}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
