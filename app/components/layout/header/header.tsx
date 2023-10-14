"use client";
import { useTheme } from "next-themes";
import {
  UserIcon,
  MoonIcon,
  SunIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur
    flex-none lg:z-50 border-b lg:border-slate-900/10
    dark:border-slate-50/[0.06] dark:bg-slate-900/75"
    >
      <div className="max-w-8xl mx-auto">
        <div className="py-4 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="relative flex items-center text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
            <a
              className="flex hover:text-sky-500 dark:hover:text-sky-400"
              href="/"
            >
              <MusicalNoteIcon className="w-6 h-6 mr-2" />
              <span className="">World Radio Online</span>
            </a>
            <div className="relative flex items-center ml-auto">
              <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 hidden sm:block">
                <ul className="flex space-x-8">
                  <li>
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="#"
                    >
                      Podcasts
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="#"
                    >
                      Radio List
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <button onClick={handleThemeChange} type="button">
                  <span className="dark:hidden">
                    <SunIcon
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-sky-400 cursor-pointer"
                    />
                  </span>
                  <span className="hidden dark:inline">
                    <MoonIcon
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-sky-400 cursor-pointer"
                    />
                  </span>
                </button>
                <UserIcon
                  viewBox="0 0 24 24"
                  className="w-6 h-6 ml-4 text-sky-500 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
