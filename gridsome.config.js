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
  templates: {
    Province: [
      {
        path: '/provinces/:title',
        component: './src/templates/Province.vue'
      }
    ],
    District: [
      {
        path: '/districts/:title',
        component: './src/templates/District.vue'
      }
    ],
    Place: [
      {
        path: '/explore/:title',
        component: './src/templates/Place.vue'
      },
      // {
      //   path: '/explore/:slug/restuarants',
      //   component: './src/templates/PlaceRestuarants.vue'
      // }
    ],
    Host: [
      {
        path: '/stay/:title',
        component: './src/templates/Host.vue'
      },
      // {
      //   path: '/stay/:slug/photos',
      //   component: './src/templates/HostPhotos.vue'
      // },
      // {
      //   path: '/stay/:slug/rooms',
      //   component: './src/templates/HostRooms.vue'
      // },      
    ],
    Attraction: [
      {
        path: '/see/:title',
        component: './src/templates/Attraction.vue'
      }
    ],
    Activity: [
      {
        path: '/do/:title',
        component: './src/templates/Activity.vue'
      }
    ],
    Post: [
      {
        path: '/blog/:title',
        component: './src/templates/Post.vue'
      }
    ],
    Author: [
      {
        path: '/♥/:title',
        component: './src/templates/Author.vue'
      }
    ],
    Tag: [
      {
        path: '/blog/:title',
        component: './src/templates/Tag.vue'
      }
    ],
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/provinces/**/*.md",
        typeName: "Province",
        resolveAbsolutePaths: true,
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
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/places/*.md",
        typeName: "Place",
        resolveAbsolutePaths: true,
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
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/blog/**/*.md",
        typeName: "Post",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/authors/**/*.md",
        typeName: "Author",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/tags/**/*.md",
        typeName: "Tag",
        resolveAbsolutePaths: true,
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
