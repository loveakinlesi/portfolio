import React, { Fragment } from "react";
import { Link } from "gatsby";
import classnames from "classnames";
// import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { GiJigsawBox } from "react-icons/gi";
import {
  HiCode,
  HiMenuAlt1,
  HiOutlineBookmark,
  HiOutlineMenuAlt4,
  HiOutlinePencilAlt,
  HiOutlineUser,
  HiOutlineX,
} from "react-icons/hi";
import {  Popover, Transition } from "@headlessui/react";

export default function Navbar({ location }) {

  const routes = [
    { label: "About", to: "/about", icon: HiOutlineUser },
    { label: "Blog", to: "/blog", icon: HiMenuAlt1 },
    { label: "Design", to: "/design", icon: HiOutlinePencilAlt },
    { label: "Develop", to: "/develop", icon: HiCode },
    // { label: "Podcast", to: "/podcast", icon: HiOutlineMicrophone, title:"Coming Soon" },
    { label: "Resume", to: "/resume", icon: HiOutlineBookmark },
    { label: "NFTs", to: "/nfts", icon: GiJigsawBox },
  ];

  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-transparent supports-backdrop-blur:bg-white/95 dark:supports-backdrop-blur:bg-black/95">
      <div className="max-w-8xl mx-auto xl:container">
        <div className="p-4 lg:px-8 mx-4 lg:mx-0">
          <div className="relative flex items-center">
            <Link
              to="/"
              className="mr-3 flex-none w-auto overflow-hidden dark:text-white"
            >
              <span>
                Love <strong>Akinlesi</strong>
              </span>
            </Link>
            <div className="hidden items-center lg:flex ml-auto relative">
              <nav className="font-medium leading-6 dark:text-white text-sm">
                <ul className="flex space-x-8">
                  {routes.map((item) => {
                    return (
                      <li key={item.label}>
                        <NavbarItemLink
                          item ={item}
                          currentRoute={location.pathname}
                        />
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="lg:hidden ml-auto">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                ${open ? "" : "text-opacity-90"}
                p-1 rounded-md text-lg dark:text-white focus:outline-none`}
                    >
                   {  open ? <HiOutlineX size={20} />  : <HiOutlineMenuAlt4 size={20} />}
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 w-max max-w-sm px-0 transform right-0 top-[45px]">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            {routes.map((item) => (
                              <NavbarItemLink
                                key={item.label}
                                item ={item}
                                type={"mini"}
                                currentRoute={location.pathname}
                              />
                            ))}
                          </div>
                          <div className="p-4 bg-gray-50">
                            <a
                              href="##"
                              className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <span className="flex items-center">
                                <span className="text-sm font-medium text-gray-900">
                                  Documentation
                                </span>
                              </span>
                              <span className="block text-sm text-gray-500">
                                Start integrating products and tools
                              </span>
                            </a>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
            {/* <div className="border-l border-gray-800/10 dark:border-gray-400/50 lg:border-0 ml-3 pl-3 items-center">
              <button
                onClick={switchTheme}
                className="p-1 px-2 rounded-md text-lg text-purple-600 dark:text-purple-400"
              >
                {theme === "dark" ? (
                  <MdOutlineDarkMode size={20} />
                ) : (
                  <MdOutlineLightMode size={20} />
                )}{" "}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

const NavbarItemLink = ({item, type = "main", currentRoute }) => {
  const navbarItemClass = classnames({
    "text-primary": currentRoute === item.to,
  });

  return type === "main" ? (
    <Link
      to={item.to}
      className={`${navbarItemClass} hover:text-primary dark:hover:text-primary py-2 rounded-md`}
      aria-current="page"
      title={item.title}
    >
      {item.label}
    </Link>
  ) : (
    <Link
      key={item.label}
      to={item.to}
      className={`${navbarItemClass} flex items-center p-2 -m-3 group transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none cursor-pointer hover:text-primary dark:hover:text-primary`}
    >
      <div className="flex items-center justify-center flex-shrink-0">
        <item.icon className="" size="22" aria-hidden="true" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium ">{item.label}</p>
      </div>
    </Link>
  );
};
