import React, { useState } from "react";
import EditGameModal from "./EditGameModal";

interface IGame {
  id: number;
  Title: string;
  ImageURL?: string;
  Genre: string;
}

const Game: React.FC<IGame> = (props) => {
  return (
    <>
      <div className="flex flex-col relative">
        <div className="relative m-3 flex flex-wrap mx-auto justify-center">
          <div className="relative max-w-sm min-w-[340px] bg-gray-700 shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
            <div className="overflow-x-hidden max-w-[350px] rounded-2xl relative">
              <img
                className="h-60 rounded-1xl w-96 object-cover"
                src={props.ImageURL}
                alt="gameIMG"
              />
            </div>
            <div className="mt-4 pl-2 mb-2 flex justify-between ">
              <div>
                <p className="text-lg font-semibold text-gray-300 mb-0">
                  {props.Title}
                </p>
                <p className="text-md text-gray-200 mt-0">{props.Genre}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
