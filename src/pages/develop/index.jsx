import React, { useState } from "react";
import Layout from "../../components/layouts";
import Container from "../../components/container";
import { SectionCard } from "../../components/cards";
import me from "../../images/me/dev.png";
import { Link } from "gatsby";
import { FadeInSection, ProgressOnScroll } from "../../components/transitions/index";
import { HiOutlineChevronRight } from "react-icons/hi";
import Mobile from "../../helpers/mobile";
import { Helmet } from "react-helmet";


const Hero = () => {
  const sections = [
    {
      title: "Web Applications",
      text: "Application software that runs on a web server? easy-peasy!",
      imageSize: "225px",
      bgColor:
        "bg-[url('https://images.unsplash.com/photo-1620202674364-d83769d3f443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2467&q=80')] bg-cover",
      size: "",
      link: "web-apps",
    },
    {
      title: "Websites",
      text: "A collection of web pages and related content? Sheesh!",
      imageSize: "250px",
      bgColor:
        "bg-[url('https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover",
      size: "",
      link: "websites",
    },
    {
      title: "Packages",
      text: "npm install -s what ?",
      imageSize: "250px",
      bgColor:
        "bg-[url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')] bg-cover",
      size: "",
      link: "packages",
    },
  ];

  return (
    <Container padding={"md:py-32 py-16"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20"}>
        <div className="flex-auto">
          <div className="grid md:grid-cols-2 items-center">
            <FadeInSection className="col-auto">
              <h3 className="mb-4 font-semibold text-white text-2xl">
                <span> Develop </span>
              </h3>
              <h1 className="mb-2 mt-3 text-6xl font-bold tracking-tight text-white">
                <span className=""> Code x Coffee. </span>
              </h1>
              <p className="text-white-alt">
                I’m a Software Developer with a focus on modular programming.I
                have about 5 years of experience with Frontend Development tools
                including React, Angular, Vue.js and other development
                technologies such as Python, Java, GraphQL and SQL.
              </p>
              <div className="mt-8">
                <a
                  href="https://github.com/iiitma"
                  className="text-white-alt/50 hover:text-white text-sm inline-flex items-center gap-2 transition-colors ease-linear duration-2000"
                >
                  
                  <span> Check out my Github profile </span>
                  <HiOutlineChevronRight />
                </a>
              </div>
            </FadeInSection>
            <FadeInSection delay="delay-500">
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
            </FadeInSection>
          </div>
        </div>
      </SectionCard>
      <FadeInSection delay="delay-100" className="grid md:grid-cols-3  grid-cols-none  gap-4 md:mt-32 mt-4">
        
        {sections.map((section, index) => {
          return (
            <Link to={section.link} className="">
              <SectionCard
                backgroundClass={section.bgColor}
                addClass={`overflow-hidden ${section.size} h-[200px]`}
                key={index}
              >
                <div className="flex-auto z-30">
                  <h3 className="font-semibold text-white text-2xl tracking-none leading-none">
                    
                    {section.title}
                  </h3>
                  <p className="font-light text-white"> {section.text} </p>
                </div>
                <span className="mask bg-gradient-to-t from-gray-800 to-black  opacity-50  backdrop-blur-xl rounded-2xl">
                  
                </span>
              </SectionCard>
            </Link>
          );
        })}
      </FadeInSection>
    </Container>
  );
};


// 

const Languages = () => {
  const { isMobile } = Mobile();
  const [collapsed, setcollapsed] = useState(true);
  const languages = [
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
      level: "90",
    },
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/color/48/000000/typescript.png",
      level: "89",
    },
    {
      name: "HTML",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      level: "85",
    },

    {
      name: "CSS/Sass",
      icon: "https://img.icons8.com/color/48/000000/sass.png",
      level: "85",
    },
    {
      name: "Python",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png",
      level: "80",
    },
    {
      name: "Dart",
      icon: "https://img.icons8.com/color/48/000000/dart.png",
      level: "80",
    },
    {
      name: "SQL",
      icon: "https://img.icons8.com/fluency/48/000000/database.png",
      level: "76",
    },
    {
      name: "php",
      icon: "https://img.icons8.com/ios-filled/50/ffffff/php-logo.png",
      level: "65",
    },
    {
      name: "Java",
      icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
      level: "50",
    },
    {
      name: "R",
      icon: "https://img.icons8.com/external-becris-flat-becris/64/000000/external-r-data-science-becris-flat-becris.png",
      level: "50",
    },
    {
      name: "C",
      icon: "https://img.icons8.com/color/48/000000/c-programming.png",
      level: "45",
    },
  ];

  const length = () => {
    return isMobile && collapsed ? 6 : languages.length;
  };

  return (
    <Container padding={"py-8"}>
      <SectionCard>
        <FadeInSection className="flex-auto justify-evenly">
          <h3 className="mb-4 font-semibold text-white text-lg">
            Programming Languages
          </h3>
          <div className="grid md:grid-cols-4 sm:grid-cols-2">
            {languages.slice(0, length()).map(({ name, level, icon }, i) => {
              return (
                <div
                  className="py-3 flex space-x-2 items-center my-1"
                  key={i + 1}
                >
                  <img src={icon} alt={name} className="w-8" />
                  <div className="flex-auto">
                    <h6 className="text-sm font-semibold mb-2"> {name} </h6>
                    <ProgressOnScroll level={level} />
                  </div>
                </div>
              );
            })}
          </div>
          {isMobile && (
            <div className="flex justify-center mt-8">
              <button
                className={"text-white text-sm"}
                onClick={() => {
                  setcollapsed(!collapsed);
                }}
              >
                
                {collapsed ? "See All" : "Hide"}
              </button>
            </div>
          )}
        </FadeInSection>
      </SectionCard>
    </Container>
  );
};

const Frameworks = () => {
  const frameworks = [
    {
      name: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      name: "Angular",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png",
    },
    {
      name: "Vue.js",
      icon: "https://img.icons8.com/color/48/000000/vue-js.png",
    },
    {
      name: "React",
      icon: "https://img.icons8.com/color/48/000000/react-native.png",
    },

    {
      name: "Gatsby",
      icon: "https://img.icons8.com/color/48/000000/gatsbyjs.png",
    },
    {
      name: "Strapi",
      icon: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e476609-36f2-4c5e-bcf7-783c5fbdea96%2Fstrapilogo.png?table=block&id=2e389f6d-8262-4cf2-9fee-9c5223defab9&spaceId=5d044f48-c072-4cec-a376-a9ab588fe6d6&width=250&userId=&cache=v2",
    },
    {
      name: "Flutter",
      icon: "https://img.icons8.com/color/48/000000/flutter.png",
    },
    {
      name: "Firebase",
      icon: "https://img.icons8.com/color/48/000000/firebase.png",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      name: "Flask",
      icon: "https://www.kindpng.com/picc/m/188-1882559_python-flask-hd-png-download.png",
    },
    {
      name: "GraphQL",
      icon: "https://img.icons8.com/color/50/000000/graphql.png",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    },
  ];
  return (
    <Container padding={"py-8"}>
      <SectionCard>
        <FadeInSection className="flex-auto justify-evenly">
          <h3 className="mb-4 font-semibold text-white text-lg">
            Frameworks & Libraries
          </h3>
          <div className="flex flex-wrap justify-evenly">
            {frameworks.map(({ name, icon }, index) => {
              return (
                <div
                  className="flex flex-col items-center rounded-md p-3 group hover:bg-white/10 space-y-2"
                  key={index}
                >
                  <img src={icon} alt={name} className="w-8" />
                  <p className="text-white text-xs whitespace-pre-wrap">
                    
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </SectionCard>
    </Container>
  );
};

const Tools = () => {
  const tools = [
    {
      name: "Xcode",
      icon: "https://developer.apple.com/assets/elements/icons/xcode-12/xcode-12-96x96_2x.png",
    },
    {
      name: "VS Code",
      icon: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png",
    },
    {
      name: "PyCharm",
      icon: "https://img.icons8.com/color/48/000000/pycharm.png",
    },
    {
      name: "Postnan",
      icon: "https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8",
    },

    {
      name: "Github",
      icon: "https://img.icons8.com/fluency-systems-filled/50/ffffff/github.png",
    },
    {
      name: "Google Cloud Platform",
      icon: "https://img.icons8.com/color/48/000000/google-cloud-platform.png",
    },
    {
      name: "Microsoft Azure",
      icon: "https://img.icons8.com/fluency/48/000000/azure-1.png",
    },
    {
      name: "Amazon Web Service",
      icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    },
    {
      name: "Heroku",
      icon: "https://img.icons8.com/color/48/000000/heroku.png",
    },
    {
      name: "NPM",
      icon: "https://img.icons8.com/color/48/000000/npm.png",
    },
    {
      name: "Docker",
      icon: "https://img.icons8.com/fluency/48/000000/docker.png",
    },
  ];
  return (
    <Container padding={"py-8"}>
      <SectionCard>
        <FadeInSection className="flex-auto justify-evenly">
          <h3 className="mb-4 font-semibold text-white text-lg">
            Tools & Services
          </h3>
          <div className="flex flex-wrap justify-evenly ">
            {tools.map(({ name, icon }, index) => {
              return (
                <div
                  className="flex flex-col items-center rounded-md p-3 group hover:bg-white/10 space-y-2"
                  key={index}
                >
                  <img src={icon} alt={name} className="w-8" />
                  <p className="text-white-alt text-xs ">
                    
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </SectionCard>
    </Container>
  );
};
export default function Develop({ location }) {
  return (
    <Layout location={location}>
      <Helmet title="Develop - Love Akinlesi" defer={false} />
      <Hero />
      <Languages />
      <Frameworks />
      <Tools />
    </Layout>
  );
}
