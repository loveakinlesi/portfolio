import React from "react";
import Layout from "../../components/layouts";
import Container from "../../components/container";
import { SectionCard } from "../../components/cards";
import * as imgs from "../../assets/design";
import { FadeInSection } from "../../components/transitions";
import StackGrid from "react-stack-grid";
import useWindowSize from "../../helpers/useWindowSize";
import { Helmet } from "react-helmet";

const baseUrl = process.env.DEPLOY_URL
  ? process.env.DEPLOY_URL
  : "http://localhost:3000";

const Hero = () => {
  return (
    <Container padding={"md:py-32 py-16"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20"}>
        <div className="flex-auto">
          <div className=" items-center">
            <div className="col-auto text-center max-w-lg mx-auto">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-slate-100 text-xl">
                <span>Design</span>
              </h3>
              <h1 className="mb-2 mt-3 text-6xl font-bold tracking-tight text-dark dark:text-white">
                <span className="">Illustrations</span>
              </h1>
                <p className="text-gray-700 dark:text-slate-200">
                An illustration is a visualization or a depiction made by an artist, such as a drawing, sketch, painting, photograph, or other kind of image of things seen, remembered or imagined, using a graphical representation. Most of my illustrative designs are digital sketches of actual people and are drawn in Adobe Illustrator.
                </p>
            </div>
          </div>
        </div>
      </SectionCard>
    </Container>
  );
};

const Gallery = () => {
  const [width] = useWindowSize();
  const images = Object.entries(imgs)
    .map((img) => {
      return { id: img[0], value: img[1] };
    })
    .filter((img) => img.id.includes("ill"));

  return (
    <Container padding={"py-0"}>
      <StackGrid
        className="gap-2"
        monitorImagesLoaded={true}
        duration={3}
        gutterHeight={0}
        gutterWidth={10}
        columnWidth={width <= 425 ? "100%" : width <= 768 ? "50%" : "33.33%"}
      >
             <FadeInSection>
            <SectionCard>

            <h3 className="mb-2 mt-3 md:text-5xl text-3xl font-bold tracking-tight text-dark dark:text-white break-words">"Design is creativity having fun."</h3>

            </SectionCard>
          </FadeInSection>
        {images.map((image, i) => {
          return (
            <FadeInSection key={image.id}>
              <img
                src={image.value}
                className="rounded-md pointer-events-none"
                alt=""
              />
            </FadeInSection>
          );
        })}
      </StackGrid>
    </Container>
  );
};

export default function Illustrations({ location }) {
  return (
    <Layout location={location}>
       <Helmet title="Illustrations - Love Akinlesi" defer={false} />
      <Hero />
      <Gallery />
    </Layout>
  );
}
