import React from "react";
import { Link } from "gatsby";
import me from "../../images/icon.png";

export default function Footer() {
  // const footerItems = [
  //   [
  //     {
  //       title: "About",
  //       "list-item": [
  //         // {"name": "Links", "link": "/about"},
  //         { name: "Education", link: "/about" },
  //         { name: "Experience", link: "/about" },
  //         { name: "Languages", link: "/about" },
  //       ],
  //     },
  //     {
  //       title: "Design",
  //       "list-item": [
  //         { name: "Identity Design", link: "/design/identity-design" },
  //         { name: "Illustrations", link: "/design/illustations" },
  //         { name: "Tools & Resources", link: "/design" },
  //       ],
  //     },
  //   ],
  //   [
  //     {
  //       title: "Develop",
  //       "list-item": [
  //         { name: "Programming Languages", link: "/develop" },
  //         { name: "Web Applications", link: "/develop/web-apps" },
  //         { name: "Packages", link: "/develop/packages" },
  //       ],
  //     },
  //     {
  //       title: "Blog",
  //       "list-item": [
  //         { name: "Latest Articles", link: "/blog" },
  //         { name: "Recent TLDR", link: "/blog" },
  //         { name: "Archives", link: "/blog/archives", title: "Coming Soon" },
  //       ],
  //     },
  //   ],
  //   [
  //     {
  //       title: "Podcast",
  //       "list-item": [
  //         { name: "Links", link: "/about#links" },
  //         { name: "Education", link: "/about#education" },
  //         { name: "Experience", link: "/about#experience" },
  //         { name: "Languages", link: "/about#languages" },
  //       ],
  //     },
  //     {
  //       title: "Socials",
  //       "list-item": [
  //         { name: "Links", link: "/about#links" },
  //         { name: "Education", link: "/about#education" },
  //         { name: "Experience", link: "/about#experience" },
  //         { name: "Languages", link: "/about#languages" },
  //       ],
  //     },
  //   ],
  // ];

  return (
    <footer className="py-16 px-8 text-sm leading-6 bg-dark text-white-alt">
      <div className="max-w-5xl mx-auto divide-y divide-slate-700 px-4 sm:px-6 md:px-8 ">
        {/* <div className="flex">
                            {
                                footerItems.map((group, index) => (
                                    <div className="flex-none w-1/3 space-y-10 sm:space-y-8 lg:flex lg:space-y-0"  key={index}>
                                        {
                                            group.map((item, index) => (
                                                <div className="lg:flex-none lg:w-1/2" key={index}>
                                                <h2 className="font-semibold text-slate-900 dark:text-slate-100">{item.title}</h2>
                                                <ul className="mt-3 space-y-2">
                                                    {
                                                            item["list-item"].map((listItem, index) => (
                                                                <li key={index}>
                                                                <Link className="hover:text-slate-900 dark:hover:text-slate-300" to={listItem.link}>
                                                                   { listItem.name}
                                                                </Link>
                                                            </li>
                                                            ))
                                                    }
                                                </ul>
                                                </div>
                                            ))
                                        }
                                </div>
                                ))
                            }
                </div> */}
        <div className="mt-16 pt-10">
        <div className="md:flex justify-between items-center">
          <Link
            to="/"
            className="mr-3 flex w-auto overflow-hidden text-white text-2xl items-center space-x-2"
          >
          
            <figure
              className=""
              style={{
                backgroundImage: `url(${me})`,
                height: "40px",
                width: "40px",
                backgroundSize: "contain",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            ></figure>

            <span>
              <span className="font-normal font-cursive">Love</span>{" "}
              <span className="font-semibold">Akinlesi</span>
            </span>
            <span className="text-sm"> </span>
          </Link>
        

          <p className="md:float-right">
          ©{new Date().getFullYear()}, Made with love💜 and{" "}
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              className="text-primary"
              rel="noreferrer"
            >
              Gatsby
            </a>.
          </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
