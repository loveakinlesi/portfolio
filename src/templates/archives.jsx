
   
import React from 'react';
import Container from '../components/container';
import { Helmet } from 'react-helmet';
import Layout from '../components/layouts';
import { ArticleCardComponent } from '../components/substack/article';


export default function Archives({ location, pageContext: { allArchives }, }) {
  return  <Layout location={location}>
    <Helmet>
      <title>Archives - Love Akinlesi</title>
      <meta name="description" content="Coding. Design. Tech Trends. And every other thing along those lines." />
      <meta name="theme-color" content="#131414" />
        </Helmet> 

     <Container padding={"py-32"}>
   <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-none  gap-6">
    <div className="md:col-span-2">
      <h3 className="mb-4 font-semibold text-white text-2xl flex items-center space-x-2">
        <span>Archives</span>
      </h3>

      <div className="grid md:grid-cols-2 grid-cols-none  gap-3">
        {
          allArchives.map((article, index)=>{
            return (
              <ArticleCardComponent key={index} article={article} size={2} />
            )
          })
        }

     </div>


    </div>

   </div>
   </Container>

  </Layout>};