import { User } from "../../types";
import { Link, redirect, useLocation } from "react-router-dom";

import { ShoppingCart } from "lucide-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { auth } from "../../libs/auth";

import { useCookies } from "react-cookie";

interface SiteNavigationProps {
  isAuthenticated?: boolean;
  user?: User | null;
}

export function Header({ isAuthenticated, user }: SiteNavigationProps) {
  const location = useLocation();

  const [cookies] = useCookies(["cart-count"]);

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
                  src="https://trikot.ridoatmanto.com/bvb-logo.svg"
                  alt="BVB Trikot Logo"
                  className="h-8 float-left"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Die Borussen Trikot
                </span>
              </Link>
            </div>
            <div className="text-md italic mb-4 text-slate-500">
              Die Schwarzgelben official shop.
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
            {!isAuthenticated && (
              <>
                <li>
                  <Link
                    to="/login"
                    className={
                      location.pathname === "/login"
                        ? activePageClass
                        : pageClass
                    }
                  >
                    Login
                  </Link>
                </li>
              </>
            )}

            {isAuthenticated && user && (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className={
                      location.pathname === "/dashboard"
                        ? activePageClass
                        : pageClass
                    }
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className={
                      location.pathname === "/cart"
                        ? activePageClass
                        : pageClass
                    }
                  >
                    <ShoppingCart
                      className={
                        "-ml-2 pr-0 inline-block w-6 h-6 text-gray-800 dark:text-white" +
                        (location.pathname === "/cart"
                          ? activePageClass
                          : pageClass)
                      }
                    />
                    {cookies["cart-count"] > 0 && (
                      <span className="inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                        {cookies["cart-count"]}
                      </span>
                    )}
                  </Link>
                </li>
              </>
            )}

            {/* <li>
              <Link
                to="/order"
                className={
                  location.pathname === "/order" ? activePageClass : pageClass
                }
              >
                Order
              </Link>
            </li> */}

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

export const action = async () => {
  // e.preventDefault();
  auth.logout();
  return redirect("/login");
};
