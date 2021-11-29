const axios = require("axios").default;

const testURL = "https://store.steampowered.com/api/appdetails?appids=730";

const getGame = () => {
  axios
    .get("https://store.steampowered.com/api/appdetails?appids=730")
    .then(function (response: any) {
      console.log(response);
    });
};

const TestSteamApi: React.FC = () => {
  return (
    <>
      <button className="bg-red-200 w-20 h-20" onClick={() => getGame()}>
        getGame
      </button>
    </>
  );
};

export default TestSteamApi;
