import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#0A0A0A] md:m-4 md:rounded-full sticky top-0 z-30 ">
        <div className=" px-2 ">
          <div className="relative flex h-16 items-center justify-between ">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden ">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setNavbarOpen((prev) => !prev)}
              >
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              <span className="text-white ml-52 flex">
                <FontAwesomeIcon
                  icon={faStarOfLife}
                  className="mr-2 text-2xl text-[#BA622F] "
                />
                BANCARIA
              </span>
            </div>
            <div className="md:flex w-full hidden ">
              <div className=" w-full flex md:justify-around">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-white tracking-widest flex items-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <FontAwesomeIcon
                    icon={faStarOfLife}
                    className="mr-2 text-2xl text-[#BA622F] "
                  />
                  BANCARIA
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {navbarOpen ? <MobileMenu /> : null}
      </nav>
    </>
  );
}

export default NavBar;
