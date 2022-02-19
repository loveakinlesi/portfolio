import React from "react";
import Layout from "../components/layouts";
import Container from "../components/container";
import { ProgressOnScroll } from "../components/transitions";
import { SectionCard } from "../components/cards";
import { RiLinkedinFill } from "react-icons/ri";
import { HiOutlineDotsHorizontal  } from "react-icons/hi";
import { SiTwitter, SiInstagram, SiGithub } from "react-icons/si";
import me from "../images/me/podcast.png";
import { TableList, TableListItem } from "../components/table";
import { Link } from 'gatsby';
import { Helmet } from "react-helmet";


function Hero(params) {
  const details = [
    {
      name: "Full Name",
      value: "Love Jésùtímìléhìn Akinlesi",
    },
    {
      name: "Birthday",
      value: "April 25",
    },
    {
      name: "Current Role",
      value: "Frontend Engineer",
    },
    {
      name: "Location",
      value: "Lagos, Nigeria",
    },
    {
      name: "Dev Focus",
      value: "Frontend",
    },
    {
      name: "Design Focus",
      value: "Identity Design",
    },
  ];
  const education = [
    {
      logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQEPaFe4qj1KAw/company-logo_100_100/0/1519900639524?e=1651104000&v=beta&t=lPidcFYnvJThleSmkyd2BenMoZVXIrdnS-fCS41xkow",
      school: "Covenant University, Nigeria",
      grade: "B.Eng Mechanical Engineering",
      year: "2014 - 2019",
    },
  ];
  const experience = [
    {
      logo: "https://teamapt.com/assets/img/svg/logo.svg",
      company: "TeamApt",
      location: "Lagos, Nigeria",
      role: "Frontend Engineer",
    },
    {
      logo: "https://www.pwc.com/etc.clientlibs/pwc/clientlibs/rebrand-clientlibs/components-colors/resources/images/slim-header-v2/PwC-logo.svg",
      company: "PwC Nigeria",
      location: "Lagos, Nigeria",
      role: "Software Developer ",
      duration: "January 2020 – July 2021",
    },
  ];
  const languages = [
    {
      name: "English",
      level: "90",
    },
    {
      name: "Yoruba",
      level: "90",
    },
    {
      name: "Spanish",
      level: "35",
    },
  ];
  const designExperience = [
    {
      logo: "https://uploads-ssl.webflow.com/5d067abd1b310b224bc06952/5d067abd1b310b0377c0698b_fav.png",
      company: "Covenant University Convocation Planing Committee",
      location: "Ota, Nigeria",
      role: "Graphic Designer and Video Editor",
      duration: "2019",
      link: "https://www.instagram.com/the14thsetcu",
    },
    {
      logo: "https://pbs.twimg.com/profile_images/1137267646032953344/PjI6d1u2_400x400.jpg",
      company: "Candela NG",
      location: "Lagos, Nigeria",
      role: "Cofounder, Graphic and Web Designer",
      duration: "September 2018 – 2020",
      link: "https://www.instagram.com/candela.ng",
    },
  ];

  return (
    <Container padding={"py-6"}>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-none  gap-3 py-16">
        <SectionCard
        addClass={"row-span-2"}
          backgroundClass={
            "bg-cover bg-center overflow-hidden dark:bg-about-1-dark bg-about-1"
          }
        >
          <span className="mask bg-gradient-to-t from-white dark:from-black to-white dark:to-black  opacity-70 rounded-2xl"></span>
          <div className="flex-auto z-10 justify-between flex flex-col">
            <h3 className="mb-4 font-semibold text-gray-800 dark:text-white text-lg flex items-center space-x-2">
              <span>About Me</span>
            </h3>
            <div className="flex flex-col px-5 py-5 rounded-xl backdrop-blur-sm bg-white/10">
            <p className=" text-gray-900 dark:text-gray-200">
            "You can't use up creativity. The more you use the more you have." 
            </p>
            <p className="ml-auto">- Maya Angelou</p>    
            </div>
            <h1 className="mb-2 mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-800">
                Simply put, I'm a Creative.
              </span>
            </h1>


          </div>
        </SectionCard>
        <SectionCard>
          <div className="flex-auto text-center space-y-6">
            <figure
              className="mx-auto dark:bg-black bg-gray-200/50 rounded-full dark:border-primary border-2 p-8"
              style={{
                backgroundImage: `url(${me})`,
                height: "200px",
                width: "200px",
                backgroundSize: "contain",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            ></figure>
            <div className="flex items-center justify-evenly">
              <a
                href="https://twitter.com/__timilehin"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <SiTwitter size={20} className="text-primary hover:text-primary/75" />
              </a>
              <a
                href="https://www.instagram.com/thetimilehin/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <SiInstagram size={20} className="text-primary hover:text-primary/75" />
              </a>
              <a
                href="https://www.linkedin.com/in/loveakinlesi/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <RiLinkedinFill size={20} className="text-primary hover:text-primary/75" />
              </a>
              <a
                href="https://github.com/iiitma"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <SiGithub size={20} className="text-primary hover:text-primary/75" />
              </a>
            </div>
          </div>
        </SectionCard>
        <SectionCard>
          <div className="flex-auto">
            <h3 className="mb-4 font-semibold text-gray-800 dark:text-white text-lg">
              My Profile
            </h3>
            <div className="mb-6 text-sm leading-6 text-gray-600 space-y-4 dark:text-gray-400">
              <TableList>
                {details.map((details, i) => {
                  return <TableListItem key={i} {...details} />;
                })}
              </TableList>
            </div>
          </div>
        </SectionCard>
        <SectionCard
        addClass={"md:col-span-2"}
          backgroundClass={
            "bg-cover bg-center overflow-hidden bg-cci"
          }
        >
          <span className="mask bg-gradient-to-t from-gray-800 to-black  opacity-70  backdrop-blur-xl rounded-2xl"></span>
          <div className="flex-auto z-10 justify-between flex flex-col">
            {/* <h3 className="mb-4 font-semibold text-gray-800 dark:text-white text-lg flex items-center space-x-2">
              <span>About Me</span>
            </h3> */}
            <h1 className="mb-2 mt-6 text-4xl font-bold tracking-tight text-white text-center md:text-right">
              <span className="">
              In Christ, <br/>For Christ,<br/>  With Joy.
              </span>
            </h1>


          </div>
        </SectionCard>
        <SectionCard addClass="md:col-span-2">
          <div className="flex-auto">
            <h3 className="mb-4 font-semibold dark:text-white text-black text-lg flex justify-between items-center">
          <span className="">Dev Experience</span>  <Link to="/resume" className="rounded-full p-2 hover:bg-slate-200/10 cursor-pointer"><HiOutlineDotsHorizontal /></Link>
            </h3>
            <div className="md:flex md:space-x-8">
              {experience.map(
                ({ logo, company, location, role, duration }, i) => {
                  return (
                    <div
                      key={i}
                      className="mb-6 text-sm leading-6 text-gray-600dark:text-gray-400 inline-flex space-x-4 items-center flex-auto"
                    >
                        <img
                          className="inline object-fit w-12 h-12 mr-2 "
                          src={logo}
                          alt="Company logo"
                        />
                      <div>
                        <p className="font-semibold dark:text-white text-black text-base">
                          {company}
                        </p>
                        <p className="dark:text-white/75 text-black">{role}</p>
                        <p className="text-sm">{duration}</p>
                        <p className="text-xs">{location}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </SectionCard>
        <SectionCard addClass="md:row-span-2">
          <div className="flex-auto">
          <h3 className="mb-4 font-semibold dark:text-white text-black text-lg flex justify-between items-center">
          <span className="">Design Experience</span>   <Link to="/resume" className="rounded-full p-2 hover:bg-slate-200/10 cursor-pointer"><HiOutlineDotsHorizontal /></Link>
            </h3>
            <div className="md:flex md:flex-col md:space-y-8">
              {designExperience.map(
                ({ logo, company, location, role, duration }, i) => {
                  return (
                    <div
                      key={i}
                      className="mb-6 text-sm leading-6 text-gray-600 dark:text-gray-400 inline-flex space-x-4 items-start flex-auto"
                    >

                        <img
                          className="inline object-fit w-12 h-12 mr-2 rounded-full"
                          src={logo}
                          alt="Company logo"
                        />

                      <div>
                        <p className="font-semibold dark:text-white text-black text-base">
                          {company}
                        </p>
                        <p className="dark:text-white/75 text-black">{role}</p>
                        <p className="text-sm">{duration}</p>
                        <p className="text-xs">{location}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </SectionCard>
        <SectionCard>
          <div className="flex-auto justify-evenly">
            <h3 className="mb-4 font-semibold dark:text-white text-black text-lg">
              Education
            </h3>
            {education.map(({ logo, school, grade, year }, i) => {
              return (
                <div
                  key={i}
                  className="mb-6 text-sm leading-6 text-gray-600 space-y-4 dark:text-gray-400 inline-flex space-x-4 items-center"
                >
                  <div>
                    <img
                      className="inline object-cover w-12 h-12 mr-2 rounded-full"
                      src={logo}
                      alt="School logo"
                    />
                  </div>
                  <div>
                    <p className="font-semibold dark:text-white text-black text-base">
                      {school}
                    </p>
                    <p className="dark:text-white/75 text-black text-sm">
                      {grade}
                    </p>
                    <p className="text-xs">{year}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionCard>
        <SectionCard>
          <div className="flex-auto justify-evenly">
            <h3 className="mb-4 font-semibold dark:text-white text-black text-lg">
              Spoken/Written Languages
            </h3>
            {languages.map(({ name, level }, i) => {
              return (
                <div className="py-3" key={i + 1}>
                  <h6 className="text-sm font-semibold mb-2"> {name} </h6>
                  <ProgressOnScroll level={level} />
                </div>
              );
            })}
          </div>
        </SectionCard>
      </div>
    </Container>
  );
}


export default function AboutPage({ location }) {
  return (
    <Layout location={location}>
      <Helmet title="About - Love Akinlesi" defer={false} />
      <Hero />
      {/* <HeroDetails /> */}
    </Layout>
  );
}
