import { useState } from "react";
import "../App.css";
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";
import Toast from "../components/Toast";
import { useGameContext } from "../contexts/games";

function Main() {
  const [gameList, SetGames] = useGameContext();
  const [showDetails, SetShowDetails] = useState(false);

  const gamelist = gameList.games.map((currentGame, index) => {
    return (
      <div key={index} onClick={() => SetShowDetails(true)}>
        <Game
          id={currentGame.id}
          Title={currentGame.title}
          Genre={currentGame.genre}
          ImageURL={currentGame.imageURL}
        />
      </div>
    );
  });

  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-900 flex-1">
        {showDetails ? (
          <div onClick={() => SetShowDetails(false)}>
            <GameDetails />
          </div>
        ) : (
          <div className="pt-8 md:pt-0">
            <div className="relative grid-rows-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid justify-center mx-2">
              {gamelist}
            </div>
          </div>
        )}
      </div>
      <Toast
        ToastText="Erfolgreich hinzugefügt"
        ToastType="success"
        showToast={true}
      />
    </>
  );
}

export default Main;
