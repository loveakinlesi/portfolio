import React from "react";
import { ArticleCard } from "../cards";

import { getArticleDate, getArticleLink, randomBgImage } from '../../helpers/article-helpers'

export const ArticleCardComponent = ({article, backgroundClass, size=1 }) => {

    const link = getArticleLink(article.slug, article.post_date);
    const articleDate = getArticleDate(article.post_date);


    return (
      <ArticleCard
        link={link}
        addClass={`${size === 2 ? "md:col-span-2" : "col-span-1"} `}
        backgroundImage={article.cover_image || randomBgImage()}
        backgroundClass={
          `bg-cover bg-center overflow-hidden ${backgroundClass}`
        }
      >
        <span className={`mask bg-gradient-to-t from-gray-800 to-black  ${backgroundClass ? "opacity-30":"opacity-60 dark:opacity-60"}  backdrop-blur-xl rounded-2xl`}></span>
        <div className="flex-auto z-10 justify-between flex flex-col">
          <div className="md:max-w-xs">
          <p className="text-xs uppercase text-slate-300">{article.type}</p>
          <h1 className="mb-2 md:text-3xl text-2xl  font-bold tracking-tight text-white">
          {article.title}
          </h1>
          <p className="text-xs text-white-alt">{article.subtitle || article.description}</p>
          </div>
          <div className="flex justify-end text-sm items-center text-white gap-1 mt-4">
          <p className="text-xs font-semibold text-white-alt">{articleDate}</p>
          </div>
        </div>
  
  
      </ArticleCard>
    )
  };