import Link from "next/link";

import { useTheme } from "../store/theme-context";

function Header() {
  const { theme, toggleTheme } = useTheme();

  const themeHandler = () => {
    toggleTheme(theme === "dark" ? "light" : "dark");
  };

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-800 stroke-current stroke-1"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 stroke-current stroke-1 text-gray-50"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  );

  const lightButton = (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={themeHandler}
      className="p-3 bg-gray-200 rounded dark:bg-gray-800 focus:border-dotted focus:border-gray-100 dark:focus:border-dotted dark:focus:border-white">
      {lightIcon}
    </button>
  );

  const darkButton = (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={themeHandler}
      className="p-3 bg-gray-200 rounded dark:bg-gray-800 focus:border-dotted focus:border-gray-100 dark:focus:border-dotted dark:focus:border-white">
      {darkIcon}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 z-10 w-full py-6 bg-white md:py-7 2xl:py-8 dark:bg-black">
      <div className="container px-5 mx-auto md:px-10">
        <nav className="flex items-center justify-between text-gray-800 dark:text-gray-50">
          {theme === "light" ? lightButton : darkButton}
          <div className="space-x-4 text-lg md:space-x-7">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
            <Link href="/newsletter">
              <a>Newsletter</a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
