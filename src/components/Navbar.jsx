import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../images/logo.svg';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="container mx-auto px-5 flex justify-between items-center py-6">
      {/* Nav Links */}
      <div className="flex flex-1 justify-start items-center">
        {/* logo */}
        <div className="mr-8 cursor-pointer">
          <img className="w-16 h-4" src={logo} alt="Logo" />
        </div>
        {/* nav container */}
        <ul className="lg:flex flex-row hidden text-white">
          <li className="mx-4 font-sans font-semibold text-[18px] ">
            <a href="#home">Home</a>
          </li>
          <li className="mx-4 font-sans font-semibold text-[18px] ">
            <a href="#wgpt3">What is GPT3</a>
          </li>
          <li className="mx-4 font-sans font-semibold text-[18px] ">
            <a href="#possibility">Open AI</a>
          </li>
          <li className="mx-4 font-sans font-semibold text-[18px] ">
            <a href="#feature">Case Study </a>
          </li>
          <li className="mx-4 font-sans font-semibold text-[18px] ">
            <a href="#blog">Library</a>
          </li>
        </ul>
      </div>
      {/* navbar sign */}
      <div className="hidden justify-center items-center sm:flex ">
        <p className="text-white mx-2 cursor-pointer font-semibold hover:bg-red-500 px-3 py-1 rounded-sm duration-300">
          Sign In
        </p>
        <button className="text-white mx-2 bg-red-500 font-semibold px-3 py-1 rounded-sm hover:bg-blue-400">
          Sign Up
        </button>
      </div>
      {/* mobile menu */}
      <div className="block lg:hidden">
        {toggleMenu && (
          <div className="absolute top-[100px] right-2 ">
            <ul className="flex flex-col items-start text-white w-[185px] rounded-md py-5 px-3 space-y-3 bg-[#2e1f4dfa] ">
              <li className="mx-4 font-sans font-semibold text-[18px] ">
                <a href="#home">Home</a>
              </li>
              <li className="mx-4 font-sans font-semibold text-[18px] ">
                <a href="#wgpt3">What is GPT3</a>
              </li>
              <li className="mx-4 font-sans font-semibold text-[18px] ">
                <a href="#possibility">Open AI</a>
              </li>
              <li className="mx-4 font-sans font-semibold text-[18px] ">
                <a href="#feature">Case Study </a>
              </li>
              <li className="mx-4 font-sans font-semibold text-[18px] ">
                <a href="#blog">Library</a>
              </li>
            </ul>
          </div>
        )}
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
