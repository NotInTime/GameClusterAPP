import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { GameContextProvider } from "./contexts/games";
import Main from "./pages/Main";

function App() {
  return (
    <GameContextProvider>
      <div className="flex flex-row">
        <Sidebar />
        <Main />
      </div>
    </GameContextProvider>
  );
}

export default App;
