import React from "react";
import { SectionCard } from "../../components/cards";
import Container from "../../components/container/index";
import Layout from "../../components/layouts/index";
import { personal } from "../../assets/develop";
import {MdOutlineOpenInNew} from 'react-icons/md'
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <Container padding={"md:pyt-32 pt-16 pb-6"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20"}>
        <div className="flex-auto">
          <div className=" items-center">
            <div className="col-auto text-center max-w-lg mx-auto">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-slate-100 text-xl">
                <span>Develop</span>
              </h3>
              <h1 className="mb-2 mt-3 text-5xl md:text-6xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-[url('https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover">Websites</span>
              </h1>
            </div>
          </div>
        </div>
      </SectionCard>
    </Container>
  );
};

const Apps = () => {
  const apps = [
    {
      name: "My Personal Website",
      description: "You're currently here 😜",
      technologies: ["React", "Javascript"],
      link: "https://messagez-47382.web.app/",
      image: personal,
    },


  ];

  return (
    <Container padding={"py-2"}>
      {apps.map((app, index) => {
        return (
          <SectionCard key={index} addClass={"mt-20"}>
            <div className="flex-auto">
              <div className="col-auto max-w-lg mx-auto">
                <h3 className="mb-4 font-semibold text-gray-800 dark:text-slate-100 text-3xl capitalize">
                  <span>{app.name}</span>
                </h3>
                <img src={app.image} alt={app.image} className="rounded-md my-6" />

                <p className="text-gray-800 dark:text-white my-4">
                {app.description}
                </p>

              <p className=" text-sm text-gray-700 dark:text-slate-100 my-2">
                <span className="font-medium text-primary">Technologies: </span>
                {
                  app.technologies.map((tech, index) => {
                    return (
                      <span className="" key={tech+index}> {tech} {index < app.technologies.length-1 && "|"}  </span>
                      )
                    })
                  }
              </p>

              <div className="flex-auto mt-5">
                <a href={app.link} className="text-sm transition ease-in-out  flex space-x-4 items-center p-2 bg-dark text-white hover:bg-dark/75 dark:bg-white dark:text-dark hover:dark:bg-white-alt rounded w-fit"><span>Open Project</span> <MdOutlineOpenInNew/></a>
              </div>
              </div>
            </div>
          </SectionCard>
        );
      })}
    </Container>
  );
};

export default function Websites({ location }) {
  return (
    <Layout location={location}>
       <Helmet>
        <title>Websites - Love Akinlesi</title>
        <meta name="theme-color" content="#131414" />
        <meta
          name="description"
          content="I’m a Software Developer with a focus on modular programming.I
          have about 5 years of experience with Frontend Development tools
          including React, Angular, Vue.js and other development
          technologies such as Python, Java, GraphQL and SQL."
        />
      </Helmet>
      <Hero />
      <Apps />
    </Layout>
  );
}
