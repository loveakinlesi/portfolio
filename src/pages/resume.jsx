import React from "react";
import Layout from "../components/layouts";
import Container from "../components/container";
import { SectionCard } from "../components/cards";
import { HiOutlineCode } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";
import { Helmet } from 'react-helmet'
import { FadeInSection } from "../components/transitions";

const Hero = () => {
  const resumes = [
    {
      title: "Dev Resume",
      component: HiOutlineCode,
      color: "develop",
      link: "https://drive.google.com/file/d/1pakcHrwM03CSYv25vxD5joJsTdQBGpN9/view?usp=sharing",
      description:
        "Applicably for software engineering roles; especially frontend-related roles.",
      version: "2021.08",
    },
    {
      title: "Design Resume",
      component: MdOutlineDesignServices,
      color: "design",
      link: "https://drive.google.com/uc?export=download&id=122oSw5DzDlWSXfKsXw8UauaXnhIckudg",
      description: " Applicably for graphics designer, UI/UX roles.",
      version: "2022.02",
    },
  ];

  return (
    <Container padding={"md:py-32 py-16"}>
      <div className="py-16 grid sm:grid-cols-2">
        <SectionCard backgroundClass={"bg-transparent"} addClass={`p-0`}>
          <FadeInSection className="flex-auto z-10 justify-evenly flex flex-col">
            <h3 className="mb-4 font-semibold text-white-alt text-lg flex items-center space-x-2">
              <span>Resume</span>
            </h3>
            <h1 className="mb-2 mt-6 text-4xl font-bold tracking-tight text-white ">
              <span className="">
                Download My Resume Templates
              </span>
            </h1>

            <h6 className=" text-white/50">
              Kindly remeber that these copies are for personal use only and
              should only be taken as a guideline to creating yours.
            </h6>
          </FadeInSection>
        </SectionCard>

        <SectionCard backgroundClass={"bg-transparent"}>
          <FadeInSection delay="delay-500" className="flex-auto space-y-6 justify-evenly sm:flex flex-col">
            {
              resumes.map((resume, index)=> {
                return (
                  <a
                  key={index}
                  href={resume.link}
                  download={`Love Akinlesi's ${resume.title} v${resume.version}`}
                  className={`group block max-w-xs mx-auto rounded-lg p-6 shadow-lg space-y-3 bg-dark border border-white/20  bg-whitering-1 ring-white/5 hover:bg-primary  cursor-pointer`}
                >
                  <div className="flex items-center space-x-3">
                    <resume.component
                      className={`h-6 w-6 text-primary  group-hover:text-dark`}
                    />
                    <h3 className="text-white-alt group-hover:text-dark text-lg font-semibold">
                      {resume.title}{" "}
                      <span className="text-xs text-primary group-hover:text-dark font-normal">
                        v{resume.version}
                      </span>
                    </h3>
                  </div>
                  <p className="text-slate-400 group-hover:text-dark text-sm">
                    {resume.description}
                  </p>
                </a>
                )
              })
            }

          </FadeInSection>
        </SectionCard>
      </div>
    </Container>
  );
};

export default function Resume({ location }) {
  return (
    <Layout location={location}>
      <Helmet title="Resume - Love Akinlesi" defer={false} />
      <Hero />
    </Layout>
  );
}
