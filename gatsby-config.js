module.exports = {
  pathPrefix: "/southfact-gatsby-site",
  siteMetadata: {
    title: `Southern Forest Area Change Tools - SouthFACT`,
    description: `SouthFACT!`,
    author: `jbliss`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
