import React from "react";
import { SectionCard } from "../../components/cards";
import Container from "../../components/container/index";
import Layout from "../../components/layouts/index";
import {MdOutlineOpenInNew} from 'react-icons/md'
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <Container padding={"md:pyt-32 pt-16 pb-6"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20"}>
        <div className="flex-auto">
          <div className=" items-center">
            <div className="col-auto text-center max-w-lg mx-auto">
              <h3 className="mb-4 font-semibold text-white text-xl">
                <span>Develop</span>
              </h3>
              <h1 className="mb-2 mt-3 text-5xl md:text-6xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-[url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')] bg-cover">Packages</span>
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
      name: "js-randomize",
      description: "js-randomize is a simple javascript utility to generate random values in your code.",
      technologies: ["Typescript", "npm"],
      link: "https://www.npmjs.com/package/js-randomize",
      image: 'https://res.cloudinary.com/iiitma2/image/upload/v1652776942/portfolio/dev/randomize_mhg5ai.png',
    },
     {
      name: "React Dynamic Fonts",
      description: "React Dynamic Fonts is a lightweight and flexible React library that allows you to dynamically change fonts in your React applications.",
      technologies: ["Typescript", "React", "npm"],
      link: "https://www.npmjs.com/package/react-dynamic-fonts",
      image: 'https://res.cloudinary.com/iiitma2/image/upload/v1652776942/portfolio/dev/react-dynamic-fonts_y2vfysr7o0ifbzz3oedz.png',
    },


  ];

  return (
    <Container padding={"py-2"}>
      {apps.map((app, index) => {
        return (
          <SectionCard key={index} addClass={"mt-20"}>
            <div className="flex-auto">
              <div className="col-auto max-w-lg mx-auto">
                <h3 className="mb-4 font-semibold text-slate-100 text-3xl capitalize">
                  <span>{app.name}</span>
                </h3>
                <img src={app.image} alt={app.description} className="rounded-md my-6" />

                <p className="text-white my-4">
                {app.description}
                </p>

              <p className=" text-sm text-slate-100 my-2">
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
                <a href={app.link} className="text-sm transition ease-in-out  flex space-x-4 items-center p-2 bg-white text-dark hover:bg-white-alt rounded w-fit"><span>Open Project</span> <MdOutlineOpenInNew/></a>
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
        <title>Packages - Love Akinlesi</title>
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
