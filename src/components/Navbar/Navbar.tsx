import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="px-4 py-2 lg:max-w-6xl ">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-8 items-center mx-4l̥">
            <Link
              to="/"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <span className="font-bold text-2xl">BookFinder</span>
            </Link>

            <div className=" md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Available Books
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
