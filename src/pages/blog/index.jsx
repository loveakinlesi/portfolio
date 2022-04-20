import React from "react";
import Layout from "../../components/layouts";
import Container from "../../components/container";
import { SectionCard} from "../../components/cards";
import { Helmet } from "react-helmet";
import {FadeInSection} from "../../components/transitions";


const ComingSoon = () => {
  return (
    <Container padding={"md:py-32 py-16"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20"}>
        <FadeInSection className="flex-auto">
          <div className=" items-center">
            <div className="col-auto text-center max-w-xl mx-auto">
              <h3 className="mb-4 font-semibold text-white text-xl">
                <span>Blog</span>
              </h3>
              <h1 className="mb-2 mt-3 text-7xl md:text-8xl font-bold tracking-tight text-dark dark:text-white">
                <span className="bg-blog-hero bg-center bg-clip-text bg-cover text-transparent">
                  Coming Soon
                </span>
              </h1>
              <p className="text-white-alt mt-4">
                Stay tuned for articles with topics on
                coding, tech products, design, and others
              </p>
            </div>
          </div>
        </FadeInSection>
      </SectionCard>
    </Container>
  );
};

export default function Blog({ location }) {

  return (
    <Layout location={location}>
      <Helmet title="Blog - Love Akinlesi" defer={false} />
      <div style={{height: `calc(100vh - 262px)`}}>
      <ComingSoon />
      </div>
    </Layout>
  );
}
