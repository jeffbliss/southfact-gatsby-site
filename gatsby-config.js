module.exports = {
  pathPrefix: "/southfact-gatsby-site",
  siteMetadata: {
    author: `jbliss, dmichelson`,
    githubRepo: `https://github.com/SouthFACT/southfact-gatsby-site`,
    description: `Southern Forest Area Change Tools - SouthFACT`,
    title: `SouthFACT`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            resolve: `gatsby-plugin-netlify-cms-paths`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              wrapperStyle:
                'margin-left: 0!important;',
              maxWidth: 650,
              linkImagesToOriginal: true,
            },
          },
          
        ],
      },
    },
    `gatsby-plugin-netlify-cms-paths`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-react-leaflet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-resolve-src',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
