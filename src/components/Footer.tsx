import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-end justify-center text-gray-900">
              <span id="brand" className="ml-3 text-6xl">
                M A D E
              </span>
            </a>
            <div className="py-10"></div>
            <p
              id="montf"
              className="flex justify-end mt-2 text-sm text-gray-500"
            >
              Trust
            </p>
            <div className="py-10"></div>
            <div className="-w-1/3 flex justify-end">
              <h1
                id="montf"
                className="flex flex-row items-center border-2 border-black rounded-lg p-2"
              >
                <FontAwesomeIcon icon={faApple} />
                <div className="px-2"></div>
                App Store
              </h1>
            </div>
            <div className="py-2"></div>
            <div className="flex flex-row justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-twitter"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
              <div className="px-2"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
              <div className="px-2"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
              <div className="px-2"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-pinterest"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="8" y1="20" x2="12" y2="11" />
                <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2
                id="yesevaf"
                className="title-font font-medium text-black tracking-widest text-md mb-3"
              >
                About us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Investors
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    About MADE
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Designers
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Customer Reviews
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Diversity and Inclusion
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Modern Slavery Act
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Press HUB
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    TV Advert
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Gender Pay Gap Support
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2
                id="yesevaf"
                className="title-font font-medium text-black tracking-widest text-md mb-3"
              >
                How we help
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Tracking your order
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Help & FAQs
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Deliveries
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Returns and Refunds
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Care and Maintenance
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Product Recall
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Affiliates
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Buying and Care Guides
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Furniture Financing
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2
                id="yesevaf"
                className="title-font font-medium text-black tracking-widest text-md mb-3"
              >
                MADE services
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Inspiration
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    TalentLAB
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    MADE Vouchers
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Visit our showrooms
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2
                id="yesevaf"
                className="title-font font-medium text-black tracking-widest text-md mb-3"
              >
                Shop by room
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Living room furniture
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Dining room furniture
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Kitchen furniture
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Bedroom furniture
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Bathroom furniture
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Office furniture
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Hallway furniture
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Garden furniture
                  </a>
                </li>
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Furniture
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2
                id="yesevaf"
                className="title-font font-medium text-black tracking-widest text-md mb-3"
              >
                Offers
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    id="montf"
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Sale
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-white py-12 mx-6 border-t-2 border-black">
          <div className="container mx-auto py-4 flex flex-wrap flex-col sm:flex-row">
            <section className="flex flex-row text-gray-500 text-sm text-center sm:text-left">
              <p id="montf" className="px-2">
                Terms and Conditions
              </p>
              <p id="montf" className="px-2">
                Cookies and Privacy Policy
              </p>
              <p id="montf" className="px-2">
                Sitemap
              </p>
            </section>
            <span
              id="montf"
              className="inline-flex text-sm sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"
            >
              Registered Number: 07101408 | Registered Office: 5 Singer Street,
              London, EC2A 4BQ
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
