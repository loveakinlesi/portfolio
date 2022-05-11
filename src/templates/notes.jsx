import React from "react";
import Container from '../components/container/index';
import { Helmet } from 'react-helmet';
import Layout from "../components/layouts";
import moment from 'moment'

export default function Notes({
  location,
  pageContext: { note },
}) {

    console.log(location)
  return (
    <Layout location={location}>
    <Helmet>
    <title>{note.title} - Love Akinlesi</title>
    <meta name="description" content={note.description || note.subtitle} />
    <meta name="theme-color" content="#131414" />
    <meta name="author" content="Love Akinlesi"/>
    <meta property="og:title" content={note.title}/>
    <meta property="og:description"  content={note.description || note.subtitle} />
    <meta property="og:url" content={location.href}/>
    <meta property="og:type" content="article"/>
    <meta property="og:image" content={note.cover_image}/>
    <meta property="twitter:title" content={note.title}/>
    <meta property="twitter:description"  content={note.description || note.subtitle} />
    <meta property="twitter:image" content={note.cover_image}/>
    <meta property="twitter:card" content="summary_large_image"/>
      </Helmet> 
    <div style={{ minHeight: `calc(100vh - 262px)` }}>
      <Container padding={"py-32"}>
         <div className="flex flex-col">
             <div className="mb-8">
                 <h2 className="mb-1 font-semibold text-white text-4xl">{note.title}</h2>
                 <p className="text-white-alt text-lg mb-4">{note.subtitle || note.description}</p>
                 {/* <div className="flex mb-4">
                      {
                          note.publishedBylines.map((author)=>{
                              return (  <p className="text-white-alt">{author.name}</p>)
                          })
                      }
                    </div> */}
                <div>
                <p className="text-white-alt text-sm"> {moment(note.post_date).format('MMMM DD, YYYY')}</p>
                </div>


             </div>
             </div>   
      <div className="markup w-full text-white-alt typography" dangerouslySetInnerHTML={{__html: note.body_html}} />
      </Container>
    </div>
  </Layout>
  );
}
