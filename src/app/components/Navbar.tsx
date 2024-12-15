export default function Navbar() {
  return (
    <nav className="bg-black text-white py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#home">Hustlr.</a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#features"
              className="hover:text-blue-500 focus:underline focus:underline-offset-8 decoration-2 transition"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-500 focus:underline focus:underline-offset-8 decoration-2 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 focus:underline focus:underline-offset-8 decoration-2 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button className="block md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
