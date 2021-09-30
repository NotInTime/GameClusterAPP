import "../App.css";
import Game from "../components/Game";
import Sidebar from "../components/Sidebar";

const GameNames = [
  "Fortnite",
  "Counter Strike: Global Offensive",
  "League of Legends",
  "Darksouls 1",
  "Darksouls 3",
  "Factorio",
  "Phasmophobia",
  "Battlefield",
  "Call of Duty Modern Warfare",
  "Fall Guys",
  "UNO",
  "Call of Duty Modern Warfare",
];

function Main() {
  return (
    <div className="h-screen w-full">
      <div className="relative flex flex-row">
        <div className="">
          <Sidebar />
        </div>
        {/*Game List*/}
        <div className="relative grid-cols-4 grid w-full">
          {GameNames.map((GameTitle: string, index: number) => (
            <Game
              Title={GameTitle}
              Genre="Battle Royale"
              ImageURL="https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
