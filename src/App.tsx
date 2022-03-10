import Fuse from "fuse.js";
import { useEffect, useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
import { apiGameToUiGame, getAllGames } from "./api/games";
import "./App.css";
import Sidebar, { FilterState } from "./components/Sidebar";
import { IGame, useGameContext } from "./contexts/games";
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
  const [gameList, setGameList] = useGameContext();

  const [filterState, setFilterState] = useState<FilterState>({
    search: false,
    archived: false,
    favourite: false,
  });

  useEffect(() => {
    getAllGames().then((r) => {
      setGameList((state) => ({
        ...state,
        games: r.map(apiGameToUiGame),
      }));
    });
  }, [setGameList]);

  const fuse = useMemo(() => {
    const options = {
      includeScore: true,
      keys: ["name", "genre"],
    };
    return new Fuse(gameList.games, options);
  }, [gameList.games]);

  const handleGameSearch = (search: string) => {
    if (search.length >= 1) {
      setFilterState({
        search: search,
        archived: false,
        favourite: false,
      });
    } else {
      setFilterState({
        search: false,
        archived: false,
        favourite: false,
      });
    }
  };

  const displayedList = useMemo(() => {
    if (filterState.search) {
      return fuse.search(filterState.search).map((result) => result.item);
    } else if (filterState.archived) {
      return gameList.games.filter((game) => game.is_deleted);
    } else if (filterState.favourite) {
      return gameList.games.filter((game) => game.is_favorite);
    }

    return gameList.games.filter((game) => !game.is_deleted);
  }, [filterState, fuse, gameList]);

  console.log(gameList.games);

  return (
    <>
      <div className="flex flex-row">
        <Sidebar
          handleGameSearch={(e: any) => handleGameSearch(e)}
          filterState={filterState}
          setFilterState={setFilterState}
        />
        <Main displayedList={displayedList} />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
