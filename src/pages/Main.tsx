import { useMemo, useState } from "react";
import "../App.css";
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
import { IGame, useGameContext } from "../contexts/games";

interface IMainProps {
  displayedList: IGame[];
}

const Main: React.FC<IMainProps> = ({ displayedList }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [clickedGame, setClickedGame] = useState<number | null>(null);
  const [gameList] = useGameContext();

  const selectedGame = useMemo(() => {
    return gameList.games.find((game) => game.game_id === clickedGame);
  }, [clickedGame, gameList.games]);

  return (
    <>
      <div className="bg-gray-900 flex-1 relative">
        {showDetails && selectedGame ? (
          <GameDetails
            game={selectedGame}
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
                <>
                  <div
                    key={index}
                    onClick={() => {
                      setShowDetails(true);
                      setClickedGame(currentGame.game_id);
                    }}
                  >
                    <Game
                      id={currentGame.game_id}
                      Title={currentGame.name}
                      Genre={currentGame.genre}
                      ImageURL={
                        currentGame.header_image_path ??
                        "https://m.media-amazon.com/images/I/61cT1uj0jyL._AC_SL1200_.jpg"
                      }
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
