const sidebar = {
  guide: [{
      title: '入门',
      collapsable: false,
      children: [
        '/guide/read',
        '/guide/install',
        '/guide/tools'
      ]
    },
    {
      title: '高阶',
      collapsable: false,
      children: [
        '/guide/plays',
        '/guide/jiexi',
        '/guide/phpdl',
        '/guide/css'
      ]
    },
    {
      title: '接口',
      collapsable: false,
      children: [
        '/guide/tv',
        '/guide/live',
        '/guide/movie',
        '/guide/music',
        '/guide/book'
      ]
    }
  ],
  source: [
    {
      title: '影视直播',
      collapsable: false,
      children: [
        '/source/byou',
        '/source/migu',
        '/source/ttou',
        '/source/org',
        '/source/xxx',
        '/source/movie',
        '/source/ygd'
      ]
    },
    {
      title: '电脑软件',
      collapsable: false,
      children: [
        '/source/ads',
        '/source/windows',

      ]
    },
    {
      title: '手机软件',
      collapsable: false,
      children: [
        '/source/mlive'
      ]
    },
    {
      title: '电视盒子',
      collapsable: false,
      children: [
        '/source/tvhezi'
      ]
    }
  ],
  template: [{
      title: '800CMS',
      collapsable: false,
      children: [
        '/template/800cms/Base'
      ]
    },
    {
      title: 'MACCMS',
      collapsable: false,
      children: [
        '/template/maccms/Base'
      ]
    }
  ]
}

module.exports = {
  title: 'VIPTV 工作室',
  description: 'VIPTV 云视听 - 跨平台极致体验，高清.流畅.简洁，http://viptv.work',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    [
      'link',
      {
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        rel: 'stylesheet'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/images/icons/apple-icon-152x152.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/ms-icon-144x144.png'
      }
    ],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }],
    // localization for china

  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [{
        text: '官方文档',
        ariaLabel: '文档菜单',
        items: [{
            text: '开发指引',
            link: '/guide/'
          },
          {
            text: '收集资源',
            link: '/source/'
          },
          {
            text: '关于我们',
            link: '/about/'
          }
        ]
      },
      {
        text: '相关链接',
        items: [{
          text: 'VIPTV-WEB 体验',
          items: [{
              text: 'VIPTV 官网',
              link: 'http://viptv.work'
            },
            {
              text: 'vercel 镜像',
              link: 'https://vc.viptv.work'
            },
            {
              text: 'vercel 镜像',
              link: 'https://vc-viptv.vercel.app/'
            },
          ]
        }]
      }
    ],
    repo: 'viptvx/viptvx',
    editLinks: false,
    editLinkText: 'Edit this on GitHub!',
    lastUpdated: 'Last updated',
    docsDir: 'src',
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      '/guide/': sidebar.guide,
      '/source/': sidebar.source,
      '/template/': sidebar.template
    },
    smoothScroll: false
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer(timestamp) {
          const date = new Date(timestamp)

          const digits = [
            date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(),
            date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()
          ].map(num => String(num).padStart(2, '0'))

          return '{0}-{1}-{2}, {3}:{4}:{5} UTC'.replace(/{(\d)}/g, (_, num) => digits[num])
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: '新内容可用',
            buttonText: '刷新'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}
