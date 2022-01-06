import "./Sale.css";

const Sale = () => {
  return (
    <div>
      <header className=" body-font bg-black text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 px-32"></a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">
              <span id="first">Biggest sale ever:</span>
              <span id="second"> up to 50% off</span>
            </a>
          </nav>
          <div id="right" className="flex flex-row ">
            <h1 className="text-sm">SHOWROOMS</h1>
            <h1 className="text-sm pl-4">HELP CENTRE</h1>
            <h1 className="text-sm pl-4">EN/GB</h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Sale;
