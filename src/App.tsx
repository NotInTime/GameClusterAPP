import Fuse from "fuse.js";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { IGame, useGameContext } from "./contexts/games";
import { ToastError } from "./emitter/Toast";
import Main from "./pages/Main";

<ToastContainer
  position="bottom-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>;

function App() {
  const [gameList, SetGameList] = useGameContext();
  const [searchResult, SetSearchResult] = useState<IGame[]>([]);
  const [isSearching, SetIsSearching] = useState(false);

  const options = {
    includeScore: true,
    keys: ["title", "genre"],
  };

  const fuse = new Fuse(gameList.games, options);

  const handleGameSearch = (search: string) => {
    search.length > 1 ? SetIsSearching(true) : SetIsSearching(false);
    SetSearchResult(fuse.search(search).map((result) => result.item));
    //isSearching && searchResult.length === 0 && ToastError("Cant find Game");
  };

  return (
    <>
      <div className="flex flex-row">
        <Sidebar handleGameSearch={(e: any) => handleGameSearch(e)} />
        <Main displayedList={isSearching ? searchResult : gameList.games} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
