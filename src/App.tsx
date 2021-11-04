import "./App.css";
import { GameContextProvider } from "./contexts/games";
import Main from "./pages/Main";

function App() {
  return (
    <GameContextProvider>
      <Main />
    </GameContextProvider>
  );
}

export default App;
