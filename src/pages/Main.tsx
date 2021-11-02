import "../App.css";
import AddGameModal from "../components/AddGameModal";
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
    <div className="h-screen w-full bg-gray-200 dark:bg-gray-900">
      <div className="relative flex flex-row">
        <div className="">
          <Sidebar />
        </div>
        {/*Game List*/}
        <div className="relative lg:grid-cols-4 sm:grid-cols-3 grid w-full">
          {GameNames.map((GameTitle: string, index: number) => (
            <Game
              Title={GameTitle}
              Genre="Battle Royale"
              ImageURL="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/meta-imgs/vg-meta-image.jpg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
