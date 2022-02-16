import React from "react";
import Layout from "../../components/layouts";
import Container from "../../components/container";
import { SectionCard } from "../../components/cards";
import me from "../../images/me/design.png";
import { ill1, id5 } from "../../assets/design";
import { Link } from "gatsby";

const Hero = () => {
    const sections = [
      {
        title: "identity design",
        text: "Branding & Logos",
        image: id5,
        imageSize: "250px",
        bgColor: "dark:bg-white bg-dark/10",
        size: "md:col-span-2",
        link:"identity-design"
      },
      {
        title: "illustrations",
        text: "Digital Drawings",
        image: ill1,
        imageSize: "250px",
        bgColor: "bg-[#f0dbcb]",
        size: "",
        link:"illustrations"
      }
    ]


  return (
    <Container padding={"md:py-32 py-16"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20"}>
        <div className="flex-auto">
          <div className="grid md:grid-cols-2 items-center">
            <div className="col-auto">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-white text-2xl">
                <span>Design</span>
              </h3>
              <h1 className="mb-2 mt-3 text-6xl font-bold tracking-tight text-dark dark:text-white">
                <span className="">Creativity x Fun.</span>
              </h1>
              <p className="text-gray-700 dark:text-slate-200">
                When it comes to design, I'm a minimalist creative designer. I
                am passionate about solving problems with design tools
                (Engineering and Creative). I help people and brands capture
                their thoughts and communicate their ideas through minimalist
                designs.
              </p>
            </div>

            <figure
              className="mx-auto col-auto w-[250px]"
              style={{
                backgroundImage: `url(${me})`,
                height: "250px",
                width: "250px",
                backgroundSize: "contain",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            ></figure>
          </div>
        </div>
      </SectionCard>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-none  gap-4 mt-4">
            {
              sections.map((section, index) =>{
                return (

                  <SectionCard backgroundClass={section.bgColor} addClass={`overflow-hidden ${section.size}`} key={index}>
                  <Link to={section.link} className="flex-auto ">
                  <h3 className="font-semibold text-gray-800 text-lg tracking-none leading-none">{section.title}</h3>
                    <p className="font-light text-xs text-gray-700">{section.text}</p>
                    <figure
                      className="w-fit float-right"
                      style={{
                        backgroundImage: `url(${section.image})`,
                        height: section.imageSize,
                        width: section.imageSize,
                        backgroundSize: "contain",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></figure>
        
                  </Link>
                </SectionCard>

                )
              })
            }
      </div>
    </Container>
  );
};

const Tools = () => {
  const tools = [
    {
      name: "Adobe Photoshop",
      icon: "https://img.icons8.com/color/50/000000/adobe-photoshop.png",
    },
    {
      name: "Adobe Illustrator",
      icon: "https://img.icons8.com/color/50/000000/adobe-illustrator.png",
    },
    {
      name: "Adobe XD",
      icon: "https://img.icons8.com/color/50/000000/adobe-xd.png",
    },
    {
      name: "Figma",
      icon: "https://img.icons8.com/color/50/000000/figma--v1.png",
    },
    {
      name: "Adobe Kuler",
      icon: "https://uxpro.cc/media/toolboximage/adobecolors_logo_ef95b5184e.png",
    },
    {
      name: "Dribbble",
      icon: "https://img.icons8.com/fluency/48/000000/dribbble.png",
    },
    {
      name: "Behance",
      icon: "https://img.icons8.com/color/50/000000/behance.png",
    },
    {
      name: "Unsplash",
      icon: "https://img.icons8.com/material-rounded/50/ffffff/unsplash--v2.png",
    },
    {
      name: "Icons8",
      icon: "https://img.icons8.com/color/48/000000/icons8-new-logo.png",
    },
  ];
  return (
    <Container padding={"py-20"} topClasses={"bg-dark bg-opacity-10 dark:bg-white dark:bg-opacity-5"}>

        <h3 className="font-semibold text-gray-800 dark:text-white text-2xl tracking-none leading-none text-center mb-8">Tools & Resources</h3>
      <div className="flex flex-auto justify-evenly flex-wrap gap-4">
      {
        tools.map(({name, icon}, index) => {
          return (
            <div className="flex flex-col items-center rounded-md p-3 group hover:bg-black-alt/10 dark:hover:bg-white/10 space-y-2" key={index}>
            <img src={icon} alt={name} className="w-8" />
            <p className="text-dark dark:text-white text-xs whitespace-pre-wrap">{name}</p>
            </div>
          )
        })
      }

      </div>

      </Container>
  )
}

export default function Design({ location }) {
  return (
    <Layout location={location}>
      <Hero />
      <Tools/>
    </Layout>
  );
}
