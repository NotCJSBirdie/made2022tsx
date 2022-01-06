import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="py-12">
      <section
        style={{ backgroundColor: "#EFEEE5" }}
        className="flex flex-col  mx-auto overflow-hidden  dark:bg-gray-800 md:flex-row md:h-48"
      >
        <div className="md:flex md:items-center md:justify-center md:w-1/2 0 md:dark:bg-gray-800">
          <div className="px-6 py-6 md:px-8 md:py-0">
            <h2
              id="yesevamain"
              className="text-2xl font-bold text-black dark:text-white md:text-black"
            >
              Join our newsletter for £10 off
            </h2>

            <p
              id="mont"
              className="mt-2 text-sm text-black dark:text-white md:text-black"
            >
              We'll email you a voucher worth £10 off your first order of £50.
              By subscribing you agree to our Terms and Conditions and Privacy &
              Cookies Policy.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
          <form>
            <div className="flex flex-col overflow-hidden border  dark:border-gray-600 lg:flex-row">
              <input
                id="mont"
                className="border-black border-2 px-16 py-3 text-gray-700 placeholder-gray-500 bg-transparent outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                type="text"
                name="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
              />

              <button
                id="mont"
                className="ml-4 px-12 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-black hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              >
                GO
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
