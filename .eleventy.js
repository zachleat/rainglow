const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");
const tinycolor = require("tinycolor2");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
    name: "serverless",
    functionsDir: "./netlify/functions/",
  });

  eleventyConfig.addShortcode("randomColor", () => {
    return tinycolor.random().toHexString().substr(1);
  });

  eleventyConfig.addFilter("textReadability", function(color) {
    return {
      white: tinycolor.readability(color, "#fff"),
      black: tinycolor.readability(color, "#000")
    };
  });

  eleventyConfig.addFilter("tinycolor", (color) => tinycolor(color));

  return {
    markdownTemplateEngine: "njk"
  }
};
