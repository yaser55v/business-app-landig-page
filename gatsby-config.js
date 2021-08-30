/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Family Bank",
    description: "wow",
    author: "Yasser Mahmoud",
  },
  plugins: [
    "gatsby-plugin-postcss", 
    `gatsby-plugin-react-helmet`
  ],
}
