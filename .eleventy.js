const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const tinycolor = require("tinycolor2");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "serverless",
    functionsDir: "./netlify/functions/",
    redirects: "netlify-toml-builders",
  });

  eleventyConfig.ignores.add("README.md");

  eleventyConfig.addFilter("tinycolor", (color) => tinycolor(color));
  eleventyConfig.addFilter("contrast", (color, textColor) => tinycolor.readability(color, textColor));
  eleventyConfig.addShortcode("randomColor", () => tinycolor.random().toHexString().substr(1));

  return {
    markdownTemplateEngine: "njk"
  }
};
