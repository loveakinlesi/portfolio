import React from "react";
import Layout from "../components/layouts";
import Container from "../components/container";
import {  SectionCard } from "../components/cards";
import { Helmet } from "react-helmet";




const Hero = () => {
  return (
    <Container padding={"md:py-32 py-16"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20"}>
        <div className="flex-auto">
          <div className=" items-center">
            <div className="col-auto text-center max-w-xl mx-auto">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-slate-100 text-xl">
                <span>oops!</span>
              </h3>
              <h1 className="mb-2 mt-3 text-7xl md:text-9xl font-bold tracking-tight text-dark dark:text-white">
                <span className="bg-notfound bg-center bg-clip-text bg-cover text-transparent">404</span>
              </h1>
                <p className="text-gray-700 dark:text-slate-200 mt-4">
                The page you're looking for doesn't exist!
                </p>
            </div>
          </div>
        </div>
      </SectionCard>
    </Container>
  );
};

export default function NotFound({ location }) {
 

  return (
    <Layout location={location}>
      <Helmet>
      <title>Page Not Found - Love Akinlesi</title>
      <meta name="theme-color" content="#131414" />
        </Helmet> 
      <Hero/>
    </Layout>
  );
}
