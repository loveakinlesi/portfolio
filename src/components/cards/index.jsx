import React from "react";
import { Link } from "gatsby";
import moment from "moment";



export const SectionCard = ({ backgroundClass, children, addClass }) => {
  return (
    <div
      className={`p-6 flex flex-col-reverse sm:mx-0 sm:p-10 rounded-2xl  relative  ${
        backgroundClass ? backgroundClass : "bg-black-alt"
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
      className={`-mx-4 p-6 flex flex-col-reverse sm:mx-0 sm:p-10 rounded-2xl xl:flex-row relative  shadow-sm bg-cover bg-center bg-no-repeat  ease-in-out transition delay-150 ${
        backgroundClass ? backgroundClass : "bg-black-alt"
      } ${!!addClass && addClass}`}
      style={style}
    >
      {children}
    </Link>
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


export const AuthorCard = ({author}) => {
  return (
    <div className="pb-3 max-w-sm mx-auto bg-dark rounded-xl flex items-center space-x-4">
      <div className="shrink-0">
        <img className="h-16 w-16 rounded-full" src={author.photo_url} alt={author.user_profile_name}/>
      </div>
      <div>
        <div className="text-xl font-medium text-white">{author.name}</div>
        <p className="text-white-alt text-sm">{author.bio}</p>
      </div>
    </div>
  )
}