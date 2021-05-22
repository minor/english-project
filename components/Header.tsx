import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);
  const [flyerTwo, setFlyerTwo] = React.useState(false);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 z-30 w-full transition duration-300 ease-in-out clearNav md:bg-opacity-90">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="text-lg font-semibold tracking-widest rounded-lg focus:outline-none focus:shadow-outline"
          >
            <h1 className="text-4xl tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl">
              <img className="float-left h-10" src="/bridge_black.svg" />
              &nbsp;&nbsp;C2CMHA
            </h1>
          </a>
          <button
            className="px-3 py-1 leading-none text-white outline-none cursor-pointer md:hidden focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-wrap items-center justify-end flex-grow">
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900'
                  "
                  onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
                >
                  <span className="tr04">Locations</span>
                  <svg
                    className={
                      flyer === true
                        ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                        : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    }
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  onMouseLeave={() => setFlyer(false)}
                  className={
                    flyer
                      ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 g327 border transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  }
                >
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-white ring-opacity-5">
                    <div className="relative grid gap-6 px-2 py-6 bg-white sm:gap-8 ">
                      <a
                        href="/california"
                        className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-200 tr04"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            California
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Check out our plan for California!
                          </p>
                        </div>
                      </a>
                      <a
                        href="/newyork"
                        className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-200 tr04"
                      >
                        <div className="ml-4">
                          <p className="text-base font-medium text-black">
                            New York
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            Check out our plan for New York!
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <li>
                <a
                  href="/#team"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Team
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <a className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  FAQ
                </a>
              </li>
              <li>
                <button
                  aria-label="Toggle Dark Mode"
                  type="button"
                  className="w-10 h-10 p-3 mr-4 bg-transparent rounded md:mr-0 dark:bg-black"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {mounted && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-800 dark:text-gray-200"
                    >
                      {theme === "dark" ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      ) : (
                        <svg className="svg-icon" viewBox="0 0 20 20">
                          <path
                            fill="none"
                            d="M10.544 8.717l1.166-.855 1.166.855-.467-1.399 1.012-.778h-1.244l-.467-1.243-.466 1.244H10l1.011.778-.467 1.398zm5.442.855l-.467 1.244h-1.244l1.011.777-.467 1.4 1.167-.855 1.165.855-.466-1.4 1.011-.777h-1.244l-.466-1.244zm-8.979-3.02c0-2.259.795-4.33 2.117-5.955A9.418 9.418 0 00.594 9.98c0 5.207 4.211 9.426 9.406 9.426 2.94 0 5.972-1.354 7.696-3.472-.289.026-.987.044-1.283.044-5.194.001-9.406-4.219-9.406-9.426M10 18.55c-4.715 0-8.551-3.845-8.551-8.57 0-3.783 2.407-6.999 5.842-8.131a10.32 10.32 0 00-1.139 4.703c0 5.368 4.125 9.788 9.365 10.245A9.733 9.733 0 0110 18.55m9.406-16.246h-1.71l-.642-1.71-.642 1.71h-1.71l1.39 1.069-.642 1.924 1.604-1.176 1.604 1.176-.642-1.924 1.39-1.069z"
                          />
                        </svg>
                      )}
                    </svg>
                  )}
                </button>
              </li>
              <li>
                <a
                  className="inline-flex items-center px-4 py-2 mb-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent bg-gray-900 rounded-lg md:mt-2 text-md md:mt-0 md:ml-4"
                  href="#learnmore"
                >
                  <span className="justify-center">Learn More</span>
                  <svg
                    className="flex w-3 h-3 ml-2 -mr-1 text-gray-400 fill-current animate-pulse"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
