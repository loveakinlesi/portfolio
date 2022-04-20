import React, { Fragment } from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import {
  HiOutlineBriefcase,
  HiMenuAlt1,
  HiOutlineBookmark,
  HiOutlineMenuAlt4,
  HiOutlineShoppingBag,
  HiOutlineX,
} from "react-icons/hi";
import { Popover, Transition } from "@headlessui/react";
import { RiGithubFill, RiInstagramLine, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";

export default function Navbar({ location }) {
  const routes = [
    { label: "Works", to: "/#works", icon: HiOutlineBriefcase },
    { label: "Blog", to: "/blog", icon: HiMenuAlt1 },
    { label: "Store", to: "/store", icon: HiOutlineShoppingBag },
    { label: "Resume", to: "/resume", icon: HiOutlineBookmark },
  ];

  const socials = [
    {
      label: "Twitter",
      link: "https://twitter.com/__timilehin",
      icon: RiTwitterFill,
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/thetimilehin/",
      icon: RiInstagramLine,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/loveakinlesi",
      icon: RiLinkedinFill,
    },
    { label: "Github", link: "https://github.com/iiitma", icon: RiGithubFill },
  ];

  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-transparent supports-backdrop-blur:bg-black/95">
      <div className="max-w-5xl mx-auto container px-4">
        <div className="p-4">
          <div className="relative flex items-center">
            <Link
              to="/"
              className="mr-3 flex-none w-auto overflow-hidden text-white"
            >
              <span>
                Love <strong>Akinlesi</strong>
              </span>
            </Link>
            <div className="hidden items-center lg:flex ml-auto relative">
              <nav className="font-medium leading-6 text-white text-sm">
                <ul className="flex space-x-8">
                  {routes.map((item) => {
                    return (
                      <li key={item.label}>
                        <NavbarItemLink
                          item={item}
                          currentRoute={location.pathname}
                        />
                      </li>
                    );
                  })}

                  <li className="text-white-alt/75">|</li>
                </ul>
              </nav>

              <nav className="ml-6">
                <ul className="flex align-middle space-x-4">
                  {socials.map((item) => {
                    return (
                      <li key={item.label}>
                        <a
                          href={item.link}
                          className="py-2 rounded-md text-white"
                        >
                          <item.icon size={20} />
                        </a>
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
                p-1 rounded-md text-lg text-white focus:outline-none`}
                    >
                      {open ? (
                        <HiOutlineX size={20} />
                      ) : (
                        <HiOutlineMenuAlt4 size={20} />
                      )}
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
                      <Popover.Panel className="absolute z-10  max-w-sm min-w-xs px-0 transform right-0 top-[45px] w-[250px]">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 p-7 lg:grid-cols-2 bg-dark">
                            {routes.map((item) => (
                              <NavbarItemLink
                                key={item.label}
                                item={item}
                                type={"mini"}
                                currentRoute={location.pathname}
                              />
                            ))}
                          </div>
                          <div className="p-4 bg-gray-50">
                            <div className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-white-alt/10 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                              <span className="flex items-center">
                                <span className="text-sm font-medium text-gray-900">
                                  Socials
                                </span>
                              </span>
                              <span className="block text-sm text-gray-500">
                                Connect with me
                              </span>
                            </div>
                            <nav className="ml-6">
                              <ul className="flex align-middle space-x-4">
                                {socials.map((item) => {
                                  return (
                                    <li key={item.label}>
                                      <a
                                        href={item.link}
                                        className="py-2 rounded-md text-dark"
                                      >
                                        <item.icon size={20} />
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavbarItemLink = ({ item, type = "main", currentRoute }) => {
  const navbarItemClass = classnames({
    "text-white": currentRoute === item.to,
    "text-white-alt/75": currentRoute !== item.to,
  });

  return type === "main" ? (
    <Link
      to={item.to}
      className={`${navbarItemClass} hover:text-white py-2 rounded-md transition duration-2500 ease-linear  text-[12.8px]`}
      aria-current="page"
      title={item.title}
    >
      {item.label}
    </Link>
  ) : (
    <Link
      key={item.label}
      to={item.to}
      className={`${navbarItemClass} flex items-center p-2 -m-3 group transition duration-150 ease-in-out rounded-lg hover:bg-white-alt/10 focus:outline-none cursor-pointer hover:text-white`}
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
