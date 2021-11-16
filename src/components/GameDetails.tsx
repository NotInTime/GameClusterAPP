import { IGame } from "../contexts/games";

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
  return (
    <>
      <div className="absolute -z-10">
        <img
          src={game.imageURL}
          className="w-full h-screen object-cover z-0 opacity-100"
          alt="gameDetailsIMG"
        />
      </div>
      <div className="flex flex-row bg-gradient-to-t via-gray-900 from-gray-900 z-10 relative">
        <button className="relative h-screen w-1/6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="z-20 relative w-4/6 flex items-center pb-10">
          <div className="space-y-6 lg:col-start-1 lg:col-span-2">
            <section aria-labelledby="applicant-information-title">
              <div className="m:rounded-lg bg-opacity-95">
                <div className="px-4 py-5 sm:px-6 flex flex-row justify-between">
                  <h2
                    id="applicant-information-title"
                    className="text-5xl leading-6 font-bold text-white"
                  >
                    {game.title}
                  </h2>
                  <button onClick={onClose}>
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

                <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 grid-rows-1 md:grid-rows-2">
                    <div className="sm:col-span-1">
                      <img
                        src={game.imageURL}
                        alt="gameDetailsIMG2"
                        object-fit="cover"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-white">
                        Beschreibung
                      </dt>
                      <dd className="mt-1 text-sm text-gray-200">
                        Counter-Strike: Global Offensive (CS:GO) erweitert sein
                        teambasiertes actionreiches Gameplay, mit dem es bei
                        seiner Veröffentlichung vor 19 Jahren Spielgeschichte
                        schrieb. CS:GO bietet neue Karten, Charaktere, Waffen,
                        sowie Spielmodi und verbesserte Versionen des
                        klassischen CS-Inhalts
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <Item title="Game ID" value={game.id} />
                      <Item title="Name" value={game.title} />
                      <Item title="Genre" value={game.genre} />
                      <Item title="Release Date" value="12. August 2012" />
                      <Item title="Publisher" value="Valve" />
                      <Item title="Age rating" value="FSK 16" />
                      <Item title="Game Rating" value="0 / 5" />
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-300">
                        Anderen Sachen
                      </dt>
                      <dd className="mt-1 text-sm text-gray-100">
                        Bla blaaa BLA
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
          </div>
        </div>
        <button className="relative h-screen w-1/6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default GameDetails;
