import { useState } from "react";
import { IGame } from "../contexts/games";
import EditGameModal from "./EditGameModal";

export interface IGameDetails {
  game: IGame;
  onClose: () => void;
}

const Item: React.FC<{ title: string; value: string | number }> = (props) => {
  const { title, value } = props;
  return (
    <>
      <div className="grid grid-cols-2 text-md">
        <dt className="font-medium text-gray-200">{title}:</dt>
        <dd className="ml-1 text-white">{value}</dd>
      </div>
    </>
  );
};

const GameDetails: React.FC<IGameDetails> = (props) => {
  const { game, onClose } = props;
  const [openModal, setOpenModal] = useState(false);

  console.log("game changes", game.name);

  return (
    <>
      <div className="absolute -z-10 filter brightness-50">
        <img
          src={
            game.header_image_path ??
            "https://m.media-amazon.com/images/I/61cT1uj0jyL._AC_SL1200_.jpg"
          }
          className="w-full h-screen object-cover z-0 opacity-100"
          alt="gameDetailsIMG"
        />
      </div>
      <div className="flex flex-row bg-gradient-to-t via-gray-900 from-gray-900 z-10 relative pt-24 my-14 md:my-24 lg:mt-28 justify-center h-full">
        <div className="z-20 relative w-5/6 lg:w-4/6 flex items-center pb-10 h-full md:h-screen">
          <div className="pt-24 h-full lg:col-start-1 lg:col-span-2">
            <section aria-labelledby="applicant-information-title">
              <div className="m:rounded-lg bg-opacity-95">
                <div className="px-4 pb-5 pt-0 md:pt-16 md:px-6 flex flex-row justify-between">
                  <h2
                    id="applicant-information-title"
                    className="text-2xl lg:text-5xl leading-6 font-bold text-white"
                  >
                    {game.name}
                  </h2>
                  <div className="flex flex-row mx-8 gap-4">
                    <button className="bg-white text-white rounded-full shadow-xl right-2 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 group-hover:opacity-70"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="gray"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                    <button
                      className="text-white  rounded-full shadow-xl relative"
                      onClick={() => setOpenModal(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                      <div className="top-1/2 absolute">
                        <EditGameModal
                          showModal={openModal}
                          closeModalHandler={() => setOpenModal(false)}
                          game={game}
                        />
                      </div>
                    </button>
                    <button className="relative" onClick={onClose}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 lg:grid-cols-2 grid-rows-1 lg:grid-rows-2">
                    <div className="sm:col-span-1 max-w-[350px]">
                      <img
                        src={
                          game.header_image_path ??
                          "https://m.media-amazon.com/images/I/61cT1uj0jyL._AC_SL1200_.jpg"
                        }
                        alt="gameDetailsIMG2"
                        object-fit="cover"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-xl font-medium text-gray-100">
                        Beschreibung
                      </dt>
                      <dd className="mt-1 text-lg text-gray-300">
                        {game.description}
                      </dd>
                    </div>
                    <div className="sm:col-span-1 flex-col">
                      <Item title="Game ID" value={game.game_id} />
                      <Item title="Name" value={game.name} />
                      <Item title="Genre" value={game.genre} />
                      <Item
                        title="Release Date"
                        value={game.release_date ?? "01.01.2022"}
                      />
                      <Item
                        title="Age rating"
                        value={game.required_age ?? "12"}
                      />
                      <Item title="Game Rating" value={game.metascore ?? ""} />
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetails;
