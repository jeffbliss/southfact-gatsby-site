module.exports = {
  pathPrefix: "/southfact-gatsby-site",
  siteMetadata: {
    author: `jbliss, dmichelson`,
    githubRepo: "https://github.com/SouthFACT/southfact-gatsby-site",
    description: `Southern Forest Area Change Tools - SouthFACT`,
    title: `SouthFACT`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
