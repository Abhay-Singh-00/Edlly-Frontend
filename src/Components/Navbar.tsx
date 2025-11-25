import React, { useState, useRef, useEffect } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside profile
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 fixed w-full z-30">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-2">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-9 w-9"
            alt="Logo"
          />
          <span className="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-wide">
            Eddly
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#features"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
          >
            Post
          </a>
          <a
            href="#pricing"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
          >
            Chat
          </a>
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
          >
            Live
          </a>
          <a
            href="#notes"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
          >
            Notes
          </a>
          <a
            href="#notes"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
          >
            Practice
          </a>
        </div>

        {/* Search (desktop only) */}
        <form className="hidden md:block flex items-center flex-grow max-w-md mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
        </form>

        {/* Mobile: Hamburger + Profile at rightmost */}
        <div className="flex items-center gap-2 md:hidden ml-auto">
          {/* Hamburger (mobile only) */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 w-9 h-9 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          {/* Profile (always at rightmost) */}
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((open) => !open)}
              className="focus:outline-none"
            >
              <img
                className="h-9 w-9 rounded-full border-2 border-blue-400 shadow hover:scale-105 transition"
                src="https://randomuser.me/api/portraits/men/35.jpg"
                alt="profile"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-20 animate-fadeIn">
                <div className="flex flex-col items-center py-4 border-b border-gray-100 dark:border-gray-700">
                  <img
                    src="https://randomuser.me/api/portraits/men/5.jpg"
                    alt="profile"
                    className="w-14 h-14 rounded-full border-2 border-blue-400 mb-2"
                  />
                  <h2 className="font-bold text-gray-800 dark:text-gray-100">
                    Abhay Singh
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    @abhay
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    abhay@example.com
                  </p>
                </div>
                <ul className="text-sm text-gray-700 dark:text-gray-200 divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-2 px-2">
                    <a
                      href="#profile"
                      className="block hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      View Profile
                    </a>
                  </li>
                  <li className="py-2 px-2">
                    <a
                      href="#settings"
                      className="block hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      Settings
                    </a>
                  </li>
                  <li className="py-2 px-2">
                    <button
                      type="button"
                      className="block w-full text-left hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => setDarkMode((prev) => !prev)}
                    >
                      {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                  </li>
                  <li className="py-2 px-2">
                    <a
                      href="#logout"
                      className="block hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Profile (desktop only) */}
        <div className="hidden md:block relative" ref={profileRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen((open) => !open)}
            className="focus:outline-none"
          >
            <img
              className="h-10 w-10 rounded-full border-2 border-blue-400 shadow hover:scale-105 transition"
              src="https://randomuser.me/api/portraits/men/42.jpg"
              alt="profile"
            />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg z-20 animate-fadeIn">
              <div className="flex flex-col items-center py-4 border-b border-gray-100 dark:border-gray-700">
                <img
                  src="https://randomuser.me/api/portraits/men/35.jpg"
                  alt="profile"
                  className="w-14 h-14 rounded-full border-2 border-blue-400 mb-2"
                />
                <h2 className="font-bold text-gray-800 dark:text-gray-100">
                  Abhay Singh
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  @abhay
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  abhay@example.com
                </p>
              </div>
              <ul className="text-sm text-gray-700 dark:text-gray-200 divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-2 px-2">
                  <a
                    href="#profile"
                    className="block hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    View Profile
                  </a>
                </li>
                <li className="py-2 px-2">
                  <a
                    href="#settings"
                    className="block hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Settings
                  </a>
                </li>
                <li className="py-2 px-2">
                  <button
                    type="button"
                    className="block w-full text-left hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setDarkMode((prev) => !prev)}
                  >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                  </button>
                </li>
                <li className="py-2 px-2">
                  <a
                    href="#logout"
                    className="block hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-4 space-y-4 animate-slideDown">
          {/* Search (mobile) */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />

          {/* Links (mobile only) */}
          <div className="flex flex-col space-y-2">
            <a
              href="#features"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Post
            </a>
            <a
              href="#pricing"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Chat
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Live
            </a>
            <a
              href="#notes"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Notes
            </a>
            <a
              href="#notes"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition"
            >
              Practice
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
