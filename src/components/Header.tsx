import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900  md:mb-0">
            <span id="brand" className="ml-3 text-6xl">
              M A D E
            </span>
            <span id="header1" className="ml-6 items-center text-md">
              SHOP
            </span>
            <span id="header1" className="ml-3 text-md">
              IDEAS
            </span>
            <span id="header1" className="ml-3 text-md">
              ABOUT
            </span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>

              <input
                id="input"
                type="text"
                className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600  "
                placeholder="Search for products"
              />
            </div>
          </nav>
          <div className="flex flex-row">
            <button className="inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none hover:bg-gray-200  text-base mt-4 md:mt-0 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </button>
            <button className="inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-heart"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>
            </button>
            <button className="inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-cart"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="6" cy="19" r="2" />
                <circle cx="17" cy="19" r="2" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap px-5 pb-5 flex-col md:flex-row items-center justify-start">
          <div className="flex flex-wrap title-font font-medium items-center text-gray-900  md:mb-0">
            <span id="tabs" className="mx-4 text-md">
              Sale
            </span>
            <span id="tabs" className="mx-4 text-md">
              Sofas
            </span>
            <span id="tabs" className="mx-4 text-md">
              Chairs
            </span>
            <span id="tabs" className="mx-4 text-md">
              Tables
            </span>
            <span id="tabs" className="mx-4 text-md">
              Storage
            </span>
            <span id="tabs" className="mx-4 text-md">
              Beds
            </span>
            <span id="tabs" className="mx-4 text-md">
              Lighting
            </span>
            <span id="tabs" className="mx-4 text-md">
              Textiles
            </span>
            <span id="tabs" className="mx-4 text-md">
              Decor
            </span>
            <span id="tabs" className="mx-4 text-md">
              Garden
            </span>
            <span id="tabs" className="mx-4 text-md">
              Kitchen
            </span>
            <span id="tabs" className="mx-4 text-md">
              Lifestyle
            </span>
            <span id="tabs" className="mx-4 text-md">
              New In
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
