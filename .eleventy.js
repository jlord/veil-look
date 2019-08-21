const fetch = require('node-fetch');

// docs: https://www.11ty.io/docs/config/
module.exports = function(eleventyConfig) {
  // eleventyConfig.addFilter( "myFilter", function() {});
  eleventyConfig.addPassthroughCopy('css');
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist"
    }
  };
};