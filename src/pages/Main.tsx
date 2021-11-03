import "../App.css";
import Game from "../components/Game";
import MobileSidebar from "../components/MobileSidebar";
import Sidebar from "../components/Sidebar";

const GameNames = [
  "Fortnite",
  "iwdjaw",
  "iwdjaw",
  "iwdjaw",
  "iwdjaw",
  "iwdjaw",
  "iwdjaw",
  "iwdjaw",
  "iwdjaw",
  "iwdjaw",
  "iwdjaw",
  "iwdjaw",
  "iwdjaw",
  "iwdjaw",
];

function Main() {
  return (
    <div className="h-full w-full bg-gray-200 dark:bg-gray-900">
      <div className="relative flex flex-row">
        <div className="visible md:invisible ">
          <MobileSidebar />
        </div>
        <div className="invisible md:visible">
          <Sidebar />
        </div>
        {/*Game List*/}
        <div className="relative xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid w-full md:pt-0 pt-8">
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
