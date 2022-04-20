import React from "react";
import Layout from "../../components/layouts";
import Container from "../../components/container";
import NavbarItemLink from "../../components/navbars";
import { Link } from "gatsby";
import { ContainerButton, MoreLink } from "../../components/buttons";
import { BlogCard, SectionCard, ArticleCard, TLDRCard } from "../../components/cards";
import { BiChevronRight, BiSearch } from "react-icons/bi";
import {AiOutlineEye } from "react-icons/ai";
import abbreviate from "../../helpers/abbreviate";
import { Helmet } from "react-helmet";


const Article = ({title, category, backgroundImage, backgroundClass, views, link, size=1 }) => {

  return (
    <ArticleCard
      link={link}
      addClass={`${size === 2 ? "md:col-span-2" : "col-span-1"} `}
      backgroundImage={backgroundImage}
      backgroundClass={
        `bg-cover bg-center overflow-hidden ${backgroundClass}`
      }
    >
      <span className={`mask bg-gradient-to-t from-gray-800 to-black  ${backgroundClass ? "opacity-30":"opacity-40 dark:opacity-40"}  backdrop-blur-xl rounded-2xl`}></span>
      <div className="flex-auto z-10 justify-between flex flex-col">
        <div className="md:max-w-xs">
        <p className="text-xs uppercase text-slate-300">{category}</p>
        <h1 className="mb-2 md:text-3xl text-2xl  font-bold tracking-tight text-white">
        {title}
        </h1>
        </div>
        <div className="flex justify-end text-sm items-center text-white gap-1">
          <AiOutlineEye size={16}/>
          <p className="font-semibold ">
          {abbreviate(views)}
          </p>
        </div>
      </div>


    </ArticleCard>
  )
}

const ComingSoon = () => {
  return (
    <Container padding={"md:py-32 py-16"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20"}>
        <div className="flex-auto">
          <div className=" items-center">
            <div className="col-auto text-center max-w-xl mx-auto">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-slate-100 text-xl">
                <span>Blog</span>
              </h3>
              <h1 className="mb-2 mt-3 text-7xl md:text-8xl font-bold tracking-tight text-dark dark:text-white">
                <span className="bg-cci bg-center bg-clip-text bg-cover text-transparent">Coming Soon</span>
              </h1>
                <p className="text-gray-700 dark:text-slate-200 mt-4">
                Stay tuned for articles with topics related to christianity, tech, product and graphic design, and others
                </p>
            </div>
          </div>
        </div>
      </SectionCard>
    </Container>
  );
};

export default function Blog({ location }) {
  const articles = [
    {
      title: "Do I even to write comments in my code?",
      category: "Software Engineering",
      backgroundImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
      views: 368,
      link: "/do-i-even"
    },
    {
      title: "Tailwind CSS vs Bootstrap",
      category: "Hot Takes",
      backgroundImage: "https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      views: 15000,
      link: "/do-i-even"
    },
    {
      title: "What is Identity Design",
      category: "Design",
        backgroundImage: "https://images.unsplash.com/photo-1586521532926-7db207e5b019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      views: 8373,
      link: "/do-i-even"
    },
    {
      title: "Creating your first react app",
      category: "React",
        backgroundImage: "https://images.unsplash.com/photo-1492760864391-753aaae87234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
      views: 200,
      link: "/do-i-even"
    },
    {
      title: "Flutter",
      category: "App Development",
        backgroundImage: "https://images.unsplash.com/photo-1559762717-99c81ac85459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      views: 83,
      link: "/do-i-even"
    }
  ];  
  
  const tldrs = [
    {
      title: "LG Display shows off a versatile lineup of transparent OLED screens at CES 2022",
      date: new Date(),
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
      link: "/do-i-even"
    },
    {
      title: "Massive groups of fish create waves to deter predators",
      date: new Date(),
      image: "https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
      link: "/do-i-even"
    },
    {
      title: "Maui Shell Offers a Beautiful Vision for the Future of Linux",
      date: new Date(),
      image: "https://images.unsplash.com/photo-1586521532926-7db207e5b019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      link: "/do-i-even"
    }
  ]



  return (
    <Layout location={location}>
       <Helmet title="Blog - Love Akinlesi" defer={false} />
      <ComingSoon/>
          <Container padding={"py-32"}>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-none  gap-6">
      <div className="md:col-span-2">
        <h3 className="mb-4 font-semibold text-gray-800 dark:text-white text-2xl flex items-center space-x-2">
          <span>Latest Articles</span>
        </h3>

        <div className="grid md:grid-cols-2 grid-cols-none  gap-3">
        <Article {...articles[0]} size={2}  />
          {
            articles.slice(1, articles.length).map((article, index)=>{
              return (
                <Article key={index} {...article}  />
              )
            })
          }

       </div>

       <div className="flex justify-center mt-8">
       <MoreLink textColor={"text-gray-800 dark:text-white"} to={"/blog/archives"}>View Archives</MoreLink>
       </div>

      </div>
      <div className="md:col-span-1">
        <h3 className="mb-4 font-semibold text-gray-800 dark:text-white text-lg flex items-center space-x-2">
          <span>Recent TLDR</span>
        </h3>
        <div className="grid grid-cols-none  gap-3 mb-6">
          {
            tldrs.map((tldr, index)=>{
              return (
                <TLDRCard key={index} {...tldr}  />
              )
            })
          }

       </div>
       <h3 className="mb-4 font-semibold text-gray-800 dark:text-white text-lg flex items-center space-x-2">
          <span>Feautured VoiceNotes</span>
        </h3> 
        <SectionCard
        addClass={"row-span-2"}
          backgroundClass={
            "bg-cover bg-center overflow-hidden dark:bg-about-1-dark bg-about-1"
          }
        >
          <span className="mask bg-gradient-to-t from-white dark:from-black to-white dark:to-black  opacity-70 rounded-2xl"></span>
          <div className="flex-auto z-10 justify-between flex flex-col">
            <h3 className="mb-4 font-semibold text-gray-800 dark:text-white text-2xl flex items-center space-x-2">
              <span>Subscribe to get updates</span>
            </h3>
            <div className="flex flex-col px-5 py-5 rounded-xl backdrop-blur-sm bg-white/10">
            <p className=" text-gray-900 dark:text-gray-200">
            "You can't use up creativity. The more you use the more you have." 
            </p>
            <p className="ml-auto">- Maya Angelou</p>    
            </div>
  
          </div>
        </SectionCard>
      </div>
     </div>
     </Container>
    </Layout>
  );
}
