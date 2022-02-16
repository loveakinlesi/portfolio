import React from "react";
import Layout from "../components/layouts";
import Container from "../components/container";
import {  SectionCard } from "../components/cards";




const ComingSoon = () => {
  return (
    <Container padding={"md:py-32 py-16"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"my-20"}>
        <div className="flex-auto">
          <div className=" items-center">
            <div className="col-auto text-center max-w-xl mx-auto">
              <h3 className="mb-4 font-semibold text-gray-800 dark:text-slate-100 text-xl">
                <span>NFTs</span>
              </h3>
              <h1 className="mb-2 mt-3 text-7xl md:text-8xl font-bold tracking-tight text-dark dark:text-white">
                <span className="bg-develop-image bg-center bg-clip-text bg-cover text-transparent">Coming Soon</span>
              </h1>
                <p className="text-gray-700 dark:text-slate-200 mt-4">
                Stay tuned for exclusive collections and items.
                </p>
            </div>
          </div>
        </div>
      </SectionCard>
    </Container>
  );
};

export default function NFTs({ location }) {
 

  return (
    <Layout location={location}>
      <ComingSoon/>
    </Layout>
  );
}
