module.exports = {
  siteMetadata: {
    title: "Love Akinlesi",
    siteUrl: "https://www.loveakinlesi.com",
    description: "I’m Love — a designer and developer based in Lagos, Nigeria."
  },
  trailingSlash: "never",
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T3WGQHL",
        includeInDevelopment: false,
      },
    },
    'gatsby-plugin-postcss',
    "gatsby-plugin-react-helmet",
    { resolve: "gatsby-plugin-sitemap",
    options: {
      excludes: ['/404', '/404.html']
    }
  },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    
  ],
};
