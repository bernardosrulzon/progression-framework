module.exports = {
  siteMetadata: {
    title: 'Monzo Progression',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/frameworks`,
        name: 'frameworks',
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#2991cc`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'progression-framework',
        short_name: 'progression-framework',
        start_url: '/',
        background_color: '#14233c',
        theme_color: '#14233c',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
  ],
}
