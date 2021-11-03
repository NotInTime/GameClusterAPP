import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import AddGameModal from "./AddGameModal";

const filters = [
  {
    id: "genre",
    name: "Genre",
    options: [
      { value: "Multiplayer", label: "Multiplayer", checked: false },
      { value: "Action", label: "Action", checked: false },
      { value: "Adventure", label: "Adventure", checked: false },
      { value: "Singleplayer", label: "Singleplayer", checked: false },
      { value: "2D", label: "2D", checked: false },
    ],
  },
];

const MobileSidebar: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {showMenu && (
        <div className="flex flex-col w-full md:w-64 h-screen overflow-hidden px-4 py-8 bg-white border-r dark:bg-gray-700 dark:border-gray-600 absolute md:relative z-20">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Game Cluster
          </h2>
          <div className="relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Search"
            />
          </div>

          <div className="flex items-center px-4 pt-4">
            <button
              className="flex flex-row"
              onClick={() => setOpenModal(true)}
            >
              <AddGameModal
                showModal={openModal}
                closeModalHandler={() => setOpenModal(false)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 border-gray-300 rounded bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <label className="ml-3 min-w-0 flex-1 text-gray-500 dark:text-gray-200 cursor-pointer">
                Add Game
              </label>
            </button>
          </div>
          <div className="flex items-center px-4 pt-4">
            <input
              name="Favorite"
              defaultValue="Favorites"
              type="checkbox"
              className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
            />
            <label className="ml-3 min-w-0 flex-1 text-gray-500 dark:text-gray-200">
              Favorite
            </label>
          </div>
          {/* Filters */}
          <form className="mt-4 border-t border-gray-200">
            {filters.map((section) => (
              <Disclosure
                as="div"
                key={section.id}
                className="border-t border-gray-200 px-4 py-6"
              >
                {({ open }) => (
                  <>
                    <h3 className="-mx-2 -my-3 flow-root">
                      <Disclosure.Button className="px-2 py-3 bg-white dark:bg-gray-300 rounded-xl w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusSmIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-mobile-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              defaultChecked={option.checked}
                              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="ml-3 min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </form>
        </div>
      )}
      <div className="z-10 md:invisible w-full h-12 fixed mb-10 bg-white text-xl font-semibold py-2 px-2">
        Game Cluster
      </div>
      <span
        className="z-20 fixed cursor-pointer md:invisible top-0 right-0 p-2 flex flex-row"
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </span>
    </>
  );
};

export default MobileSidebar;
