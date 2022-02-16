import React from "react";
import { Link } from "gatsby";
import moment from "moment";

export const Card = ({ image, children }) => {
  return (
    <div className={`rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl`}>
      {children}
    </div>
  );
};

export const SectionCard = ({ backgroundClass, children, addClass }) => {
  return (
    <div
      className={`-mx-4 p-6 flex flex-col-reverse sm:mx-0 sm:p-10 rounded-2xl  relative  ${
        backgroundClass ? backgroundClass : "dark:bg-black-alt bg-gray-50"
      } ${!!addClass && addClass}`}
    >
      

      {children}
    </div>
  );
};


export const ArticleCard = ({ backgroundImage, children, addClass, backgroundClass, link }) => {
  const style= backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
  } : null
  return (
    <Link to={link}
      className={`-mx-4 p-6 flex flex-col-reverse sm:mx-0 sm:p-10 rounded-2xl xl:flex-row relative  shadow-sm bg-cover bg-center bg-no-repeat hover:bg-scale-110 ${
        backgroundClass ? backgroundClass : "dark:bg-black-alt bg-gray-50"
      } ${!!addClass && addClass}`}
      style={style}
    >
      {children}
    </Link>
  );
};

export const SectionCardImage = ({ src, alt, type, backgroundSize, backgroundPosition }) => {
  console.log({ src, alt, type });
  return (
    <div className="w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]">
      <div className="aspect-w-[1216] aspect-h-[700] sm:aspect-w-[1376] sm:aspect-h-[664] shadow-lg rounded-lg bg-gray-100 overflow-hidden dark:bg-neutral-500/10">
      <figure
            className="w-full"
            style={{
              backgroundImage: `url(${src})`,
              height: "auto",
              width: "auto",
              backgroundSize: backgroundSize || "cover",
              backgroundPosition: backgroundPosition || "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></figure>
      </div>
    </div>
  );
};

export const SectionCardIcon = ({ component }) => {
  return (
    <div className="w-full flex-none mb-10 xl:mb-0 xl:ml-8 xl:w-[29rem]">
      <div className="aspect-w-[1216] aspect-h-[700] sm:aspect-w-[1376] sm:aspect-h-[664]  rounded-lg overflow-hidden">
        {component}
      </div>
    </div>
  );
};

export const BlogCard = ({ title, tag, description, image, link }) => {
  return (
    <li className="relative flex flex-col sm:flex-row lg:flex-col items-start">
      <div className="order-1 sm:ml-6 lg:ml-0  w-full sm:w-1/2 lg:w-full">
        <h3 className="mb-1 text-gray-900 font-semibold dark:text-gray-200">
          <Link
            to={link}
            className="before:absolute before:inset-0 hover:text-gray-500 dark:hover:text-white"
          >
            <span className="mb-1 block text-sm leading-6 text-purple-600">
              {tag}
            </span>{" "}
            {title}
          </Link>
        </h3>
        <div className="prose prose-sm text-gray-800 dark:text-gray-400 dark:prose-dark">
          <p>{description}</p>
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className="shadow-md rounded-lg bg-gray-50 object-cover w-full sm:w-1/2 lg:w-full mb-6 sm:mb-0 lg:mb-6 h-[180px]"
      />
    </li>
  );
};

export const TLDRCard = ({ title, date, image, link }) => {
  return (
    <Link to={link} className="relative flex items-start gap-3 group p-2">
    <img
        src={image}
        alt={title}
        className="shadow-md rounded-lg bg-gray-50 object-cover w-16 h-16"
      />
      <div className="w-full">
        <h3 className="mb-1 text-gray-900 font-semibold text-sm dark:text-gray-200 before:inset-0">
            {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-xs">
          {moment(date).calendar()}
        </p>
      </div>

    </Link>
  );
};
