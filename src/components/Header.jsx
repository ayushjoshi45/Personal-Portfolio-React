import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
function Header() {
  const [menu, openMenu] = useState(false);
  const menuRef = useRef(null);
  const [menuh,setMenuh]=useState(0);
  useEffect(() => {
    if (menu && menuRef.current) {
      const menuHeight = menuRef.current.offsetHeight;  // Calculate height
      setMenuh(menuHeight)  // You can use this height for any logic
    }
  }, [menu]);
  return (
    <>
      <div className="text-white flex items-center justify-between mt-4">
        <div className="text-3xl">
          <span className="inline md:hidden">A</span>
          <span className="inline text-[#6200EE] md:hidden">J</span>
          <span className="hidden md:inline">Ayush</span>
          <span className="text-[#6200EE] hidden md:inline">Joshi</span>
        </div>
        <div className="bg-[#222222] rounded-full p-1 flex items-center justify-center">
          <div
            className="md:hidden cursor-pointer"
            onClick={() => openMenu(!menu)}
          >
            <i
              className={`ri-menu-${menu ? "unfold" : "fold"}-line text-3xl `}
            ></i>
          </div>

          {/* Menu Items */}
          <div
            className={`${
              menu ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-[#222222] md:bg-transparent md:static md:flex md:items-center md:justify-center`}
          >
            <ul
            ref={menuRef}
             className="flex flex-col md:flex-row items-center text-2xl gap-5 p-4 md:p-0">
              <li className="px-5 py-2 hover:bg-[#6200EE] rounded-full">
                <Link to="/">Home</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#6200EE] rounded-full">
                <Link to="/work">Work</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#6200EE] rounded-full">
                <Link to="/about">About</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#6200EE] rounded-full">
                <Link to="/contact" target="_blank">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* <ul className={`${menu?"block":"hidden"} flex items-center justify-center text-2xl`}>
          <li className="px-5 py-2 hover:bg-[#6200EE] rounded-full">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 py-2 hover:bg-[#6200EE] rounded-full">
            <Link to="/work">Work</Link>
          </li>
          <li className="px-5 py-2 hover:bg-[#6200EE] rounded-full">
            <Link to="/about">About</Link>
          </li>
          <li className="px-5 py-2 hover:bg-[#6200EE] rounded-full">
            <Link to="/contact">Contact</Link>
            </li>
            </ul> */}
        </div>
        <div>
          <div className="flex items-center justify-center text-2xl gap-5">
            {/* <Link to="https://x.com/ayushjoshi45"><i className="ri-twitter-x-line rounded-full bg-black px-2 py-2"></i></Link> */}
            {/* <Link to="https://www.linkedin.com/in/ayush-joshi-439470252/"><i className="ri-linkedin-line rounded-full bg-black px-2 py-2"></i></Link> */}
            <Link to="https://github.com/ayushjoshi45">
              <i className="ri-github-line rounded-full bg-black px-2 py-2"></i>
            </Link>
            <button className="px-4 py-2 bg-[#6200EE] rounded-full hover:bg-[#7B1EFF] hover:scale-105 transition-transform duration-600 ease-in-out ">
              Hire Me
            </button>
          </div>
        </div>
      </div>
      {<Hero slide={menu} height={menuh} />}
    </>
  );
}

export default Header;
