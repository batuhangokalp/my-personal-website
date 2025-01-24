/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Batuhan Gokalp`,
    siteUrl: `https://batuhangokalp.com`,
    author: `@batuhangokalp`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-jss`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
        ignore: [`**/icons`],
      },

      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Batuhan Gokalp - Full-Stack Developer`,
        short_name: `Batuhan Gokalp`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
