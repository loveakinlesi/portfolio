import React from "react";
import Layout from "../components/layouts";
import Container from "../components/container";
import { BsArrowRight } from "react-icons/bs";
import me from "../images/me/podcast.png";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { FadeInSection } from "../components/transitions";


const Hero = () => {
  return (
    <div className=" min-h-[90vh] page-header bg-hero-image bg-fixed">
      <div className="absolute h-[90vh] w-screen bg-gradient-to-t from-dark  backdrop-blur-md bg-blend-darken z-20"></div>
      <div className="container mx-auto z-30 px-4">
        <FadeInSection className="text-center ">
          <FadeInSection delay="delay-550">
            <figure
              className="mx-auto"
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
          <h1 className="text-6xl text-white">
            <span className="font-cursive">Love</span>{" "}
            <span className="font-medium">Akinlesi</span>{" "}
          </h1>

          <div className="prose mt-10 flex mx-auto">
            <p className="text-white-alt font-sans font-medium  text-justify">
             I’m Love — a UK-based software engineer and hobbyist designer passionate about building innovative, user-focused digital experiences. Starting as an engineering product designer, I fell in love with solving complex problems and now blend visual design, web development, and creative content to craft solutions that make an impact. Beyond coding and designing, I enjoy mentoring, sharing knowledge, and helping others break into tech while constantly exploring new ideas and possibilities.
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

const Aboutme = () => {
  const creating = [
    {
      title: "Illustrations",
      target: null,
      link: "/illustrations",
      description: "You can see some of my selected illustration designs here.",
    },
    {
      title: "Identity Design",
      target: null,
      link: "/identity-design",
      description:
        "A collection of some of logo designs for various brands over the years.",
    },
    {
      title: "The Melanin Faces NFT Collection",
      target: "_blank",
      link: "https://opensea.io/collection/the-melanin-faces",
      description:
        "A collection of 10,000 dark skinned female faces expressing beauty, individuality and diversity in the black community.",
    },
    {
      title: "Code x Coffee.",
      target: null,
      link: "/develop",
      description:
        "30% code 70% coffee😭! It's a weird lifestyle but I love every bit of it. This is my space for everything coding.",
    },
    {
      title: "Love's Notes",
      target: null,
      link: "/blog",
      description:
        "Coding. Design. Tech Trends. And every other thing along those lines.",
    },
  ];

  return (
    <Container padding={"py-32"}>
      <FadeInSection id="works">
        <h1 className="mb-8 text-6xl ">
          <span className="text-lg text-white-alt font-medium ">
            Simply put, I'm a
          </span>
          <br />{" "}
          <span className="text-[aliceblue] font-bold">
            Christian Creative.
          </span>
        </h1>
      </FadeInSection>

      <div>
        <div className="grid md:grid-cols-2 gap-8">
          {creating.map((item, index) => {
            return (
              <FadeInSection
                delay="delay-400"
                className="my-4 group"
                key={index}
              >
                <Link
                  target={item.target}
                  to={item.link}
                  className="text-lg text-white/75 group-hover:text-white flex align-middle space-x-4 mb-2 transition ease-in-out delay-150"
                >
                  <span className="leading-none">{item.title}</span>
                  <BsArrowRight className="group-hover:translate-x-full transition ease-in-out delay-150" />
                </Link>
                <div className="prose text-sm text-white-alt/50">
                  <p>{item.description}</p>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </Container>
  );
};


// const StepperExample = () => (
//   <Stepper vertical={true} initialStep={STEP1}>
//   <Step
//     stepId={STEP1}
//     data="Step 1 initial state"
//     title="Step One"
//     description="This step is optional"
//   >
//     <Step1 vertical={true} />
//   </Step>
//   <Step stepId={STEP2} title="Step Two" description="Name is required">
//     <Step2 vertical={true} />
//   </Step>
//   <Step stepId={STEP3} title="Step Three" >
//     <Step3 vertical={true} />
//   </Step>
// </Stepper>
// );

export default function IndexPage({ location }) {
  return (
    <Layout location={location}>
      <Helmet>
        <title>Love Akinlesi</title>
        <meta name="theme-color" content="#131414" />
        <meta
          name="description"
          content="I’m Love — a designer and developer based in Lagos, Nigeria."
        />
      </Helmet>
      <Hero />
      <Aboutme />
      {/* <StepperExample /> */}
    </Layout>
  );
}
