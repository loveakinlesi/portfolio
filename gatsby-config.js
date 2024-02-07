module.exports = {
  siteMetadata: {
    title: "Love Akinlesi",
    siteUrl: "https://www.loveakinlesi.com",
    description: "I’m Love — a designer and developer based in Lagos, Nigeria."
  },
  flags: {
    DEV_SSR: true
  },
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
    "gatsby-plugin-sitemap",
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
