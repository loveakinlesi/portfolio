import React from "react";
import Layout from "../components/layouts";
import Container from "../components/container";
import { SectionCard, BlogCard } from "../components/cards";
import { ContainerButton, MoreLink } from "../components/buttons";
import { BiChevronRight } from "react-icons/bi";
import { FaPodcast, FaSpotify } from "react-icons/fa";
import { SiGooglepodcasts } from "react-icons/si";
import me from "../images/me/main.png";
import {ill16} from "../assets/design";

const Hero = () => {
  return (
    <div className=" min-h-[85vh] page-header bg-hero-image dark:bg-hero-image-dark bg-fixed">
      <div className="absolute h-[85vh] w-screen bg-gradient-to-t from-white dark:from-black  backdrop-blur-md bg-blend-lighten dark:bg-blend-darken z-20"></div>
      <div className="container mx-auto z-30">
        <div className="text-center ">
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
          <p>Hi, I'm</p>
          <h1 className="text-6xl">
            <span className="font-cursive">Love</span>{" "}
            <span className="font-medium">Akinlesi</span>{" "}
          </h1>
          <h6 className="font-semibold uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-800">
            CHRISTIAN + DESIGNER + DEVELOPER
          </h6>
          {/* <p className="text-sm">PODCASTER + BLOGGER</p> */}
        </div>
      </div>
    </div>
  );
};

const Aboutme = () => {
  return (
    <Container padding={"py-32"}>
      <div className="md:flex items-center gap-4">
        <h1 className="mb-8 text-6xl ">
          <span className="text-lg text-slate-800 dark:text-slate-200 font-medium ">
            Simply put, I'm a
          </span>
          <br /> <span className="text-primary font-bold">Christian Creative.</span>
        </h1>
        <div>
          <div className="mb-10 prose max-w-3xl text-gray-800 dark:text-gray-400">
            <p className="text-xl font-medium prose-lime mb-0">
              Above all, I am passionate about Christ and the furtherance of His
              Gospel.
            </p>
            <p className="mt-2">
              By Grace, over the
              years, I have built up a diverse range of skills in design and engineering. These skills serve as my tools for problem solving. I love to approach every challenge with positivity and enthusiasm. When I'm not designing or coding, I love to share whatever I know and brainstom ideas. 
            </p>
          </div>
          <MoreLink to={"/about"}>More about me</MoreLink>
        </div>
      </div>
    </Container>
  );
};

const Develop = () => {
  return (
    <Container
      padding={"py-6"}
      topClasses={
        "bg-cover bg-center relative bg-opacity-30 bg-[url('https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80')] dark:bg-[url('https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')]"
      }
    >
      <div className="absolute h-full top-0 left-0 w-full bg-gradient-to-t from-white to-white  dark:from-black  dark:to-black opacity-50  backdrop-blur-md bg-blend-darken z-10"></div>

      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20 z-20"}>
        <div className="flex-auto">
          <div className=" items-center">
            <div className="col-auto md:text-center max-w-lg mx-auto">
              <h3 className="mb-4 font-semibold text-slate-700 dark:text-white text-lg ">
                Develop
              </h3>
              <p className="text-4xl sm:text-6xl font-bold tracking-tight text-dark dark:text-white">
                Code x Coffee.
              </p>
              <div className="mb-6  leading-6 text-dark dark:text-gray-200">
                <p className="mt-4 max-w-3xl space-y-6">
                  30% code 70% coffee😭 It's a weird lifestyle but I love every
                  bit of it. The beautiful art of creating something new by just
                  typing a bunch of characters 🌚. This snippet describes the
                  life.
                </p>
              </div>
              <ContainerButton
                to="/develop"
                bgColor={"bg-neutral-500 hover:bg-purple-500 "}
              >
                Learn more <BiChevronRight size={18} />
              </ContainerButton>
            </div>
          </div>
        </div>
      </SectionCard>
    </Container>
  );
};

const Design = () => {
  return (
    <Container padding={"py-6"} topClasses={"bg-white dark:bg-black relative"}>
      <SectionCard
        backgroundClass={"bg-transparent"}
        addClass={"my-20 z-20 xl:flex"}
      >
        <div className="md:flex items-center justify-between">
          <div className="mb-4">
            <div className="col-auto max-w-lg mx-auto">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-white text-lg ">
                Design
              </h3>
              <p className="text-4xl sm:text-6xl font-bold tracking-tight dark:text-white text-gray-800 ">
                Creative x Fun.
              </p>
              <div className="mb-6  leading-6 text-gray-800 dark:text-gray-200">
                <p className="mt-4 max-w-3xl space-y-6">
                  The mantra is simple really "Think More; Design Less". That's
                  the ideology behind my minimalist and creative designs. And I
                  ensure to have fun while at it, drawing inspiration from any
                  and everywhere.
                </p>
              </div>
              <ContainerButton
                to="/design"
                bgColor={"bg-neutral-500 hover:bg-purple-500 "}
              >
                Learn more <BiChevronRight size={18} />
              </ContainerButton>
            </div>
          </div>
          <figure
            className="w-fit rounded-lg"
            style={{
              backgroundImage: `url(${ill16})`,
              height: 300,
              width: 300,
              backgroundSize: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></figure>
        </div>
      </SectionCard>
    </Container>
  );
};

const Blog = () => {
  const featuredPosts = [
    {
      title: "Abeg App Review",
      tag: "Reviews",
      image:
        "https://www.makemoney.ng/wp-content/uploads/2021/09/Abeg-App-1-1.jpg",
      link: "/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title:
        "Meta is already replacing Oculus Quest 2 with Meta Quest 2 in its ads",
      tag: "Tech News",
      link: "/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2021/11/meta-quest-2-rebrand.jpg",
    },
    {
      title:
        "What is brand identity? And how to design and develop a great one.",
      tag: "Design",
      link: "/",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/07/4bdf40b3-59ba-46b5-bbfd-7d202f02748b-1.jpg?auto=format&q=60&fit=max&w=930",
    },
  ];
  return (
    <Container padding={"pt-24 pb-6"}>
      <div className="flex-auto">
        <h2 className="mb-2 text-3xl tracking-tight text-gray-900 font-bold dark:text-gray-200">
          The Blog
        </h2>
        <div className="mb-10 prose text-gray-600 max-w-3xl dark:prose-dark">
          {/* <p className="">Share x Learn.</p> */}
          <p>
            When I’m not Coding, Designing, Recording Podcasts, I write...
            sometimes😜
          </p>
        </div>
        <GridView classes="grid-cols-1 lg:grid-cols-3">
          {featuredPosts.map(
            ({ title, tag, image, description, link }, index) => {
              return (
                <BlogCard
                  title={title}
                  tag={tag}
                  description={description}
                  image={image}
                  link={link}
                  key={index}
                />
              );
            }
          )}
        </GridView>

        <ContainerButton to="/develop">
          See all blog posts <BiChevronRight size={18} />
        </ContainerButton>
      </div>
    </Container>
  );
};

const Podcast = () => {
  return (
    <Container padding={"py-32"}>
      <SectionCard
        backgroundClass={
          "bg-cover bg-center overflow-hidden dark:bg-podcast-card bg-podcast-card-dark"
        }
      >
        <span className="mask bg-gradient-to-t from-white dark:from-black to-white dark:to-black  opacity-70 rounded-2xl"></span>
        <div className="flex-auto z-10">
          <h3 className="mb-4 font-semibold text-gray-800 dark:text-white text-lg flex items-center space-x-2">
            <span>Podcast</span> <FaPodcast /> <SiGooglepodcasts />{" "}
            <FaSpotify />
          </h3>
          <p className="text-4xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-violet-800">
            Recharge
            <br />
            <span className="text-black dark:text-gray-200">
              Aaaaand, breathe.{" "}
            </span>
          </p>

          <div className="mb-6  leading-6 text-gray-800 dark:text-gray-400">
            <p className="mt-4 max-w-3xl space-y-6">
              I enjoy talking about the things I’m passionate about. Tune in to
              my conversations and learn a thing or two.
            </p>
          </div>
          <ContainerButton
            to="/develop"
            bgColor={"bg-purple-600 hover:bg-purple-500 "}
          >
            Learn more <BiChevronRight size={18} />
          </ContainerButton>
        </div>
      </SectionCard>
    </Container>
  );
};

const GridView = ({ children, classes, gridSize = 3 }) => {
  const gridClass = "grid-cols-1 xl:grid-cols-" + gridSize;
  return (
    <ul
      className={`grid  ${
        classes ? classes : gridClass
      } gap-y-10 gap-x-6 items-start mb-10`}
    >
      {children}
    </ul>
  );
};

export default function IndexPage({ location }) {
  return (
    <Layout location={location}>
      <Hero />
      <Aboutme />
      <Develop />
      <Design />
      {/* <Blog /> */}
      {/* <Podcast /> */}
    </Layout>
  );
}
