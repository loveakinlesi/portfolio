import React from "react";
import Container from "../components/container/index";
import { Helmet } from "react-helmet";
import Layout from "../components/layouts";
import moment from "moment";
import { timeToRead } from "../helpers/article-helpers";

export default function Notes({ location, pageContext: { note } }) {
  console.log(location);
  return (
    <Layout location={location}>
      <Helmet>
        <title>{note.title} - Love Akinlesi</title>
        <meta name="description" content={note.description || note.subtitle} />
        <meta name="theme-color" content="#131414" />
        <meta name="author" content="Love Akinlesi" />
        <meta property="og:title" content={note.title} />
        <meta
          property="og:description"
          content={note.description || note.subtitle}
        />
        <meta property="og:url" content={location.href} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={note.cover_image} />
        <meta property="twitter:title" content={note.title} />
        <meta
          property="twitter:description"
          content={note.description || note.subtitle}
        />
        <meta property="twitter:image" content={note.cover_image} />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <div style={{ minHeight: `calc(100vh - 262px)` }}>
        <Container padding={"py-32"}>
          <div className="flex flex-col">
            <div className="mb-8">
              <h2 className="mb-1 font-semibold text-white text-4xl">
                {note.title}
              </h2>
              <p className="text-white-alt text-lg mb-4">
                {note.subtitle || note.description}
              </p>
              <div className="flex items-center">
                <div className="flex items-center">
                  {note.publishedBylines.map((author, index) => {
                    return (
                      <div className="flex items-center">
                        <div className="shrink-0">
                          <img
                            className="h-6 w-6 rounded-full mr-2"
                            src={author.photo_url}
                            alt={author.user_profile_name}
                          />
                        </div>
                        <p className="text-white-alt text-sm">{author.name}</p>
                      </div>
                    );
                  })}
                </div>
                <span className="mx-2">|</span>
                <p className="text-white-alt text-sm">
                  {moment(note.post_date).format("MMMM DD, YYYY")}
                </p>
                <span className="mx-2"></span>
                <p className="text-white-alt text-sm ml-auto">{timeToRead(note.wordcount)}</p>
              </div>
             
              <div></div>
            </div>
          </div>
          <div
            className="markup w-full text-white-alt typography"
            dangerouslySetInnerHTML={{ __html: note.body_html }}
          />
        </Container>
      </div>
    </Layout>
  );
}
