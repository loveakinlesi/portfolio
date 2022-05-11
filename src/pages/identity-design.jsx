import React from "react";
import Layout from "../components/layouts";
import Container from "../components/container";
import { SectionCard } from "../components/cards";
import * as imgs from "../assets/design";
import { FadeInSection } from "../components/transitions";
import StackGrid from "react-stack-grid";
import useWindowSize from "../helpers/useWindowSize";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <Container padding={"md:py-16 py-16"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20"}>
        <FadeInSection className="flex-auto">
          <div className=" items-center">
            <div className="col-auto text-center max-w-lg mx-auto">
              <h3 className="mb-4 font-semibold text-white-alt text-xl">
                <span>Design</span>
              </h3>
              <h1 className="mb-2 mt-3 text-6xl font-bold tracking-tight text-white">
                <span className="">Identity Design</span>
              </h1>
              <p className="text-white-alt">
                Brand identity is the face of a brand. It is the visual
                component of a brand that represents it's emotional and even
                philosophical concept. The message in the design needs to be
                clear and consistent.
              </p>
            </div>
          </div>
        </FadeInSection>
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
    .filter((img) => img.id.includes("id"));

  return (
    <Container padding={"md:py-8 py-4"}>
      <StackGrid
        className="gap-2"
        monitorImagesLoaded={true}
        duration={3}
        gutterHeight={10}
        gutterWidth={10}
        columnWidth={width <= 425 ? "100%" : width <= 768 ? "50%" : "33.33%"}
      >
        <FadeInSection>
          <SectionCard backgroundClass={"bg-white"}>
            <h3 className="mb-2 mt-3 text-3xl xs:text-xl font-bold tracking-tight text-dark break-words">
              "Design is the silent ambassador of your brand"
            </h3>
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

export default function IdentityDesign({ location }) {
  return (
    <Layout location={location}>
      <Helmet>
        <title>Identity Design - Love Akinlesi</title>
        <meta name="theme-color" content="#131414" />
        <meta
          name="description"
          content="Brand identity is the face of a brand. It is the visual
          component of a brand that represents it's emotional and even
          philosophical concept. The message in the design needs to be
          clear and consistent."
        />
      </Helmet>
      <Hero />
      <Gallery />
    </Layout>
  );
}
