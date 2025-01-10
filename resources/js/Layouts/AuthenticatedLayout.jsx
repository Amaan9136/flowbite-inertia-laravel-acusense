import { Toaster } from "react-hot-toast";

import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import useStore from "@/Store/useThemeStore";
import { Link, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { route } from "ziggy-js";
import AuthSideBar from "./AuthSideBar";

export default function AuthenticatedLayout({ header, children }) {
  const user = usePage().props.auth.user;
  const { isDarkMode, toggleTheme } = useStore();

  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-black/60 dark:bg-gray-900 dark:text-white/60">
      <nav className="border-b-2 border-[#343E4E] bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <Link href="/">
                  <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-white" />
                </Link>
              </div>

              <h2 className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex px-1 pt-[1.34rem] text-xl font-semibold leading-tight text-gray-800 dark:text-white">
                {header}
              </h2>
            </div>

            <div className="hidden sm:ms-6 sm:flex sm:items-center">
              <div className="relative ms-3">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-white dark:bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-gray-500 dark:text-white transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                      >
                        {user.name}

                        <svg
                          className="-me-0.5 ms-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route("profile.edit")}>
                      Profile
                    </Dropdown.Link>
                    <Dropdown.Link
                      href={route("logout")}
                      method="post"
                      as="button"
                    >
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
              <motion.button
                onClick={toggleTheme}
                className="rounded-md ml-4 px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                key={isDarkMode ? "sun" : "moon"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                {isDarkMode ? (
                  <FaSun className="text-yellow-500 text-2xl transition-transform duration-300 transform hover:scale-110" />
                ) : (
                  <FaMoon className="text-blue-500 text-2xl transition-transform duration-300 transform hover:scale-110" />
                )}
              </motion.button>
            </div>

            <div className="-me-2 flex items-center sm:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown(
                    (previousState) => !previousState
                  )
                }
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={
                      !showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={
                      showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"
          }
        >
          <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-700">
            <div className="px-4">
              <div className="text-base font-medium text-gray-800 dark:text-white">
                {user.name}
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {user.email}
              </div>
            </div>

            <div className="mt-3 space-y-1">
              <ResponsiveNavLink
                href={route("dashboard")}
                active={route().current("dashboard")}
              >
                Dashboard
              </ResponsiveNavLink>
              <ResponsiveNavLink
                href={route("profile.edit")}
                active={route().current("profile.edit")}
              >
                Profile
              </ResponsiveNavLink>
              <ResponsiveNavLink
                method="post"
                href={route("logout")}
                as="button"
                active={route().current("logout")}
              >
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <AuthSideBar />
        <main className="flex-1">{children}</main>
        <Toaster />
      </div>
    </div>
  );
}
