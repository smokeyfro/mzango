class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  siteName: "Mzango",
  siteUrl: `https://mzango.com`,
  titleTemplate: "%s - Mzango",
  siteDescription: "The unofficial backpackers guide to South Africa",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/provinces/**/*.md",
        typeName: "Province",
        resolveAbsolutePaths: true,
        route: '/provinces/:slug',
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/districts/**/*.md",
        typeName: "District",
        resolveAbsolutePaths: true,
        route: '/districts/:slug',
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/attractions/**/*.md",
        typeName: "Attraction",
        resolveAbsolutePaths: true,
        route: '/see/:slug',
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/places/**/*.md",
        typeName: "Place",
        resolveAbsolutePaths: true,
        route: '/explore/:slug',
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/hosts/**/*.md",
        typeName: "Host",
        resolveAbsolutePaths: true,
        route: '/stay/:slug',
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/magazine/**/*.md",
        typeName: "Post",
        resolveAbsolutePaths: true,
        route: "/magazine/:slug",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/activities/**/*.md",
        typeName: "Activity",
        resolveAbsolutePaths: true,
        route: "/do/:slug",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.MZ_GA
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Mzango - Backpackers Guide to South Africa',
          feed_url: 'https://mzango.com/feed.xml',
          site_url: 'https://mzango.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://mzango.com/' + node.slug,
          date: node.date
        }),
        output: {
          dir: './static',
          name: 'feed.xml'
        }
      }
    },
  ],
  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                'src/assets/**/*.css',
                'src/**/*.vue',
                'src/**/*.js'
              ],
              extractors: [
                {
                  extractor: TailwindExtractor,
                  extensions: ['css', 'vue', 'js']
                }
              ],
              whitelistPatterns: [/shiki/]
            }),
          ])
        }

        return options
      })
  },
}
