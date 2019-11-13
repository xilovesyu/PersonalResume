/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {

  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/data/blogs`,
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data/profile`,
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data/experience`,
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/data/education`,
      }
    }
  ],
}
