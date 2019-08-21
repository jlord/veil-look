const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching your friends..." );

  const collectionName = 'notwaldorf/frands';
  const baseUrl = 'https://api.glitch.com/v1/collections/by/fullUrl/projects?orderKey=createdAt&limit=50&orderDirection=ASC'
fetch(`${baseUrl}&fullUrl=${collectionName}`).then(blob => blob.json()).then(projects => {
  const webring = projects.items;
  // description, domain, updatedAt
});
  
  // GitHub API: https://developer.github.com/v3/repos/#get
  return fetch("https://api.github.com/repos/11ty/eleventy")
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json => {
      // prune the data to return only what we want
      return {
        stargazers: json.stargazers_count
      };
    });
};