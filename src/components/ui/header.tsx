import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { DarkThemeToggle, Flowbite } from "flowbite-react";

export function Header() {
  const location = useLocation();
  const activePageClass =
    "leading-{100} block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
  const pageClass =
    "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <div className="grid grid-rows-2">
            <div className="text-black">
              <Link to="/" className="space-x-3 rtl:space-x-reverse">
                <img
                  src="./productiv.svg"
                  alt="Productive Logo"
                  className="h-8 float-left"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Productiv
                </span>
              </Link>
            </div>
            <div className="text-md italic mb-4 text-slate-500">
              Your best productivity companion.
            </div>
          </div>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-slate-100 dark:bg-gray-800 md:dark:bg-slate-800 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/" ? activePageClass : pageClass
                }
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/activity"
                className={
                  location.pathname === "/activity"
                    ? activePageClass
                    : pageClass
                }
              >
                Log Activity
              </Link>
            </li>
            <li>
              <Flowbite theme={{ mode: "dark" }}>
                <DarkThemeToggle className="md:-mt-1" />
              </Flowbite>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
