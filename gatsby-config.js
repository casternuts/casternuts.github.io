'use strict'

module.exports = {
  siteMetadata: {
    title: 'Casternuts Log',
    description: 'casternuts의 블로그 입니다.',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://casternuts.github.io',
    author: {
      name: 'casternuts',
      url: 'https://github.com/casternuts',
      email: 'show5960@gmail.com'
    }
  },
  pathPrefix: '/casternuts.github.io',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/page-me`,
        name: `page-me`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://casternuts.github.io'
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://casternuts.github.io',
        sitemap: 'https://casternuts.github.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-material-ui`,
    'gatsby-plugin-sitemap'
  ]
}
