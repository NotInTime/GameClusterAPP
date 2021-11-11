import React from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { GameContextProvider } from "./contexts/games";
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
  return (
    <GameContextProvider>
      <div className="flex flex-row">
        <Sidebar />
        <Main />
      </div>
      <ToastContainer />
    </GameContextProvider>
  );
}

export default App;
