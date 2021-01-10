module.exports = {
  siteMetadata: {
    siteTitle: `チャイナエステ嬢ポータル`,
    defaultTitle: `チャイナエステ嬢ポータル`,
    siteTitleShort: `チャイナエステ嬢ポータル`,
    siteDescription: `最新のアジアン・チャイナエステ嬢情報をお届けします`,
    siteUrl: `https://kyonyu-chies.work`,
    siteAuthor: `@master_lettuce`,
    siteImage: `/banner.png`,
    siteLanguage: `ja`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kyonyu-Chies.work`,
        short_name: `KCW`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-155850634-1`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://kyonyu-chies.work`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
