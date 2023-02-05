import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="bg-black border-b border-gray-700 w-full h-full">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex md:flex-row flex-col items-center justify-around md:justify-between h-20 ">
          <div className="flex-shrink-0">
            <h1 href="#" title="" className="flex text-white font-bold text-xl">
              Fahmi Sugiarto
            </h1>
          </div>

          <div className=" flex items-center space-x-10">
            <Link to="/beginner">
              <h1 className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">
                Beginer
              </h1>
            </Link>

            <Link to="/easy">
              <h1 className="text-sm font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70">
                Easy
              </h1>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
