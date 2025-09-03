import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-100 text-gray-900 ">
      <div className="max-w-6xl mx-auto px-4 space-y-6 md:space-y-12">
        <div className="grid grid-cols-12">
          {/* Replace the Petbook title with the one in navbar */}
          <div className=" flex justify-center col-span-full md:col-span-6 mb-6 md:mb-0">
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <span className=" font-bold text-2xl">BookFinder</span>
            </a>
          </div>

          {/* Links */}
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="mb-2 text-lg font-medium">Explore</p>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="hover:text-red-600">
                  Available Books
                </Link>
              </li>
  
            </ul>
          </div>

          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="mb-2 text-lg font-medium">Social</p>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://github.com/syedumar2"
                  className="hover:text-red-600"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/syed-umar-152b0a221/"
                  className="hover:text-red-600"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="syedumar01786@gmail.com"
                  className="hover:text-red-600"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-center items-center pt-6 border-t border-gray-300 text-sm md:flex-row">
          <span>BookFinder Take-Home Assignment Submission</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
