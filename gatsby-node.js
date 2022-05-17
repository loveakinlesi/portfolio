const fetch = require('node-fetch');
const axios = require('axios');
const moment = require('moment');

require('dotenv').config({
  path: `.env`,
});


const get = (endpoint) => axios.get(`${process.env.API}/${endpoint}`);

const getImagesFromFolder = (data) => axios.post(`https://${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search`, data)

const getLatestPosts = async () => {
    const { data: posts } = await get(`/posts?limit=5`);
    return posts
}

const getAllPosts = async () => {
    const { data: posts } = await get(`/posts`);
    return posts
}

const getAllArchives = async () => {
    const { data: archives } = await get(`/archive`);
    return archives
}

const getAuthors = async () => {
    const { data: authors } = await get(`/publication/users?public=true`);
    return authors
}

const getIllustrations = async () => {
  const { data: illustrations } = await getImagesFromFolder({
    expression: "folder:portfolio/illustrations/*",
    sort_by: [{"public_id": "desc"}]
  });
  return illustrations
}

const getIdentityDesigns = async () => {
  const { data: identity } = await getImagesFromFolder({
    expression: "folder:portfolio/identity-design/*",
    sort_by: [{"public_id": "desc"}]
  });
  return identity
}






exports.createPages = async ({ actions: { createPage } }) => {
    const allArchives = await getAllArchives();
    const latestPosts = await getLatestPosts();
    const authors = await getAuthors();
    const allPosts = await getAllPosts();
    const illustrations = await getIllustrations();
    const identityDesigns = await getIdentityDesigns();
  
    // Create a page that lists all archive posts.
    createPage({
      path: `/blog/archives`,
      component: require.resolve('./src/templates/archives.jsx'),
      context: { allArchives }
    });

    // Create a page that lists the latest posts.
    createPage({
        path: `/blog`,
        component: require.resolve('./src/templates/blog.jsx'),
        context: { latestPosts, authors }
    });
  
    // Create a page for each Post.
    allPosts.forEach(note => {
      createPage({
        path: moment(note.post_date).format(`[/blog/]YYYY/MM[/${note.slug}]`),
        component: require.resolve('./src/templates/notes.jsx'),
        context: { note }
      });
    })

    // Create a page that lists the images for illustration.
    createPage({
      path: `/illustrations`,
      component: require.resolve('./src/templates/design.jsx'),
      context: { images: illustrations.resources, name: 'illustration' }
  });

  createPage({
    path: `/identity-design`,
    component: require.resolve('./src/templates/design.jsx'),
    context: { images: identityDesigns.resources, name: 'identity' }
});
};