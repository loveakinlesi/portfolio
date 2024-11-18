import React from "react";
import { SectionCard } from "../../components/cards";
import Container from "../../components/container/index";
import Layout from "../../components/layouts/index";
import {MdOutlineOpenInNew} from 'react-icons/md'
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <Container padding={"md:pt-32 pt-16 pb-6"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20"}>
        <div className="flex-auto">
          <div className=" items-center">
            <div className="col-auto text-center max-w-lg mx-auto">
              <h3 className="mb-4 font-semibold text-white text-xl">
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
      technologies: ["Gatsby", "Javascript"],
      link: "https://loveakinlesi.com",
      image: 'https://res.cloudinary.com/iiitma2/image/upload/v1652777377/portfolio/dev/Screenshot_2022-05-09_at_21.11.02_cz5a7x.png',
    },
    {
      name: "BUILD Nigeria",
      description: "Non-Profit creating social change through education for Nigerians",
      technologies: ["Gatsby", "Typescript", "Tailwind"],
      link: "https://www.buildng.org/",
      image: 'https://res.cloudinary.com/iiitma2/image/upload/v1652777377/portfolio/dev/build_gywbdopycvwkunubunok.png',
    },
    {
      name: "Believers in Tech",
      description: "Christian Non-Profit community of people in tech",
      technologies: ["Gatsby", "Typescript"],
      link: "https://www.believersin.tech/",
      image: 'https://res.cloudinary.com/iiitma2/image/upload/v1652777377/portfolio/dev/bit_orwcrystbvahjov7iwep.png',
    },
    {
      name: "Elo.ng",
      description: "Nigerian price comparism data company",
      technologies: ["Nextjs", "Typescript", "Tailwind", "Turborepo"],
      link: "https://www.elo.ng/",
      image: 'https://res.cloudinary.com/iiitma2/image/upload/v1652777377/portfolio/dev/elo_sj9tkujkjhdsmob6aiei.png',
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
              <img src={app.image} alt={app?.description || app.name} className="rounded-md my-6" />

              {app?.description && <p className="text-white my-4">
              {app.description}
              </p>}

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
