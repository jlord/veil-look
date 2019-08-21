const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching your friends..." );

  const collectionName = 'notwaldorf/frands';
  const baseUrl = 'https://api.glitch.com/v1/collections/by/fullUrl/projects?orderKey=createdAt&limit=50&orderDirection=ASC'
  
  // One day this might break and then @jlord will fix it.
  return fetch(`${baseUrl}&fullUrl=${collectionName}`)
    .then(res => res.json())
    .then(json => {
      const items = json.items;
      const friends = [];
      json.items.forEach(p => {
        friends.push({domain: p.domain, description: p.description, lastUpdate: p.updatedAt});
      });
      console.log(friends);
      return friends;
    });
};