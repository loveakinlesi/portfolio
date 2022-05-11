import React from "react";
import { Helmet } from "react-helmet";
import { MoreLink } from "../components/buttons";
import { AuthorCard, SectionCard } from "../components/cards";
import Container from "../components/container";
import Layout from "../components/layouts";
import { ArticleCardComponent } from "../components/substack/article";
import { SubscribeComponent } from "../components/substack/subscribe";
import { FadeInSection } from "../components/transitions";

const BlogHeader = () => {
  return (
    <Container padding={"py-8"}>
      <SectionCard backgroundClass={"bg-transparent"} addClass={"mt-20"}>
        <FadeInSection className="flex-auto">
          <div className=" items-center">
            <div className="col-auto text-center max-w-xl mx-auto">
              <h3 className="mb-4 font-semibold text-white text-xl">
                <span>Blog</span>
              </h3>
              <h1 className="mb-2 mt-3 text-7xl md:text-8xl font-bold tracking-tight text-white">
                <span className="bg-blog-hero bg-center bg-clip-text bg-cover text-transparent">
                  Love's Notes
                </span>
              </h1>
              <p className="text-white-alt mt-4">
                Coding. Design. Tech Trends. And every other thing along those
                lines.
              </p>
            </div>
          </div>
        </FadeInSection>
      </SectionCard>
    </Container>
  );
};

const LatestSection = ({ latestPosts }) => {
  return (
    <FadeInSection delay="delay-[1750]" className="md:col-span-2">

        <h3 className="mb-4 font-semibold text-white text-2xl flex items-center space-x-2 ">
          <span>Latest Notes</span>
        </h3>


      <div className="grid md:grid-cols-2 grid-cols-none  gap-3">
        <ArticleCardComponent article={latestPosts[0]} size={2} />
        {latestPosts.slice(1, latestPosts.length).map((article, index) => {
          return <ArticleCardComponent key={index} article={article} />;
        })}
      </div>

      {latestPosts.length === 5 && (
        <div className="flex justify-center mt-8">
          <MoreLink textColor={"text-white"} to={"/blog/archives"}>
            View Archives
          </MoreLink>
        </div>
      )}
    </FadeInSection>
  );
};

const AuthorSection = ({ authors }) => {
  return (
    <div className="sticky top-16">
        {/* <h3 className="mb-0 font-semibold text-white text-sm flex items-center space-x-2 ">
          <span>Author{authors.length > 1 && 's'}</span>
        </h3> */}

      {authors.map((author, index) => {
        return <AuthorCard key={index} author={author} />;
      })}
    </div>
  );
};

const SearchSection = ({}) => {
  return (
    <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-white-alt" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-white-alt block bg-dark w-full border border-white-alt/50 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-white/50 focus:ring-white/50 focus:ring-1 sm:text-sm"
          placeholder="Search for Love's notes..."
          type="text"
          name="search"
        />
      </label>
  )
}

const SubscribeSection = ({}) => {
  return (
    <div className="px-3">
    <div className="align-center my-8">
      <h3 className="mb-4 font-semibold text-white text-xl flex items-center space-x-2">
        <span>Subscribe to get updates</span>
      </h3>
      <SubscribeComponent />
    </div>
  </div>
  )
}


export default function Blog({
  location,
  pageContext: { latestPosts, authors },
}) {
  return (
    <Layout location={location}>
      <Helmet>
      <title>Blog - Love Akinlesi</title>
      <meta name="description" content="Coding. Design. Tech Trends. And every other thing along those lines." />
      <meta name="theme-color" content="#131414" />
        </Helmet> 
      <div style={{ minHeight: `calc(100vh - 262px)` }}>
        <BlogHeader />
        <Container padding={"py-16"}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-none  gap-6 relative">
            <LatestSection latestPosts={latestPosts} />
            <div className="md:col-span-1">
              <AuthorSection authors={authors} />
              <SubscribeSection/>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
