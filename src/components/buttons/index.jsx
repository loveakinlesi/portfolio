import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";
import { BiChevronRight } from "react-icons/bi";

export const MoreLink = ({ label, children, textColor, to }) => {
  const textClasss = classNames({
    textColor: textColor,
    "text-purple-600": !textColor,
  });

  return (
    <Link
      to={to}
      className={`text-sm ${textClasss} flex space-x-1 align-middle items-center my-2`}
    >
      <span>{label || children}</span> <BiChevronRight size={18} />
    </Link>
  );
};



export const ContainerButton = ({ label, children, textColor, to, bgColor }) => {

    const bgClass = ` ${bgColor ? bgColor : "bg-gray-700  hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"}`;
    const textClass = `text-sm font-medium text-white whitespace-nowrap dark:text-gray-100  dark:hover:text-white`;
    const ringClass = `focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-400 dark:focus:ring-offset-0 dark:focus:ring-gray-50`

  return (
    <Link
      to={to}
      className={`group inline-flex items-center py-2  px-6 rounded-md focus:outline-none ${bgClass} ${textClass} ${ringClass}`}
    >
      {label || children}
    </Link>
  );
};

