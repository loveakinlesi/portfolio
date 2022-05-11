const fetch = require('node-fetch');
const axios = require('axios');
const moment = require('moment');

const API = 'https://loveakinlesi.substack.com/api/v1'

const get = (endpoint) => axios.get(`${API}/${endpoint}`);

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


exports.createPages = async ({ actions: { createPage } }) => {
    const allArchives = await getAllArchives();
    const latestPosts = await getLatestPosts();
    const authors = await getAuthors();
    const allPosts = await getAllPosts();
  
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
  };