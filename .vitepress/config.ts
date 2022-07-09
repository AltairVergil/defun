import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav = [
	{
		text: '文档',
		activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
		items: [{
			text: '开发指引',
			link: '/guide/'
		},
		{
			text: '收集资源',
			link: '/source/'
		},
		{
			text: '视图模板',
			link: '/template/'
		}
		]
	},
	{
		text: '生态系统',
		activeMatch: `^/ecosystem/`,
		items: [
			{
				text: '资源',
				items: [
					{ text: '合作伙伴', link: '/partners/' },
					{ text: '主题', link: '/ecosystem/themes' }
				]
			},
			{
				text: '导航',
				items: [
					{ text: 'VIPTV 官网', link: 'http://viptv.work' },
					{ text: 'VIPTV 镜像', link: 'https://vc.viptv.work' }
				]
			}
		]
	},
	{
		text: '关于',
		activeMatch: `^/about/`,
		items: [
			{ text: '常见问题', link: '/about/faq' },
			{ text: '团队', link: '/about/team' },
			{ text: '版本发布', link: '/about/releases' },
			{
				text: '社区指南',
				link: '/about/community-guide'
			},
			{ text: '行为准则', link: '/about/coc' }
		]
	},
	{
		text: '赞助者',
		link: '/sponsor/'
	},
	{
		text: '合作伙伴',
		link: '/partners/',
		activeMatch: `^/partners/`
	}
]

export const sidebar = {
	'/guide/': [
		{
			text: '快速开始',
			items: [
				{
					text: '快速入门',
					link: '/guide/read'
				},
				{
					text: '安装准备',
					link: '/guide/install'
				},
				{
					text: '获取工具',
					link: '/guide/tools'
				}
			]
		},
		{
			text: '高阶工具',
			items: [
				{
					text: '播放组件',
					link: '/guide/plays'
				},
				{
					text: '解析封装',
					link: '/guide/jiexi'
				},
				{
					text: '代理教程',
					link: '/guide/phpdl'
				},
				{
					text: '语法相关',
					link: '/guide/css'
				},

			]
		},
		{
			text: '资源接口',
			items: [
				{
					text: '电视直播',
					link: '/guide/tvbs'
				},
				{
					text: '网络直播',
					link: '/guide/live'
				},
				{
					text: '影视接口',
					link: '/guide/movie'
				},
				{
					text: '音乐接口',
					link: '/guide/music'
				},
				{
					text: '追书资源',
					link: '/guide/book'
				}
			]
		}
	],
	'/source/': [
		{
			text: '影视直播',
			items: [
				{
					text: '北邮直播',
					link: '/source/byou'
				},
				{
					text: '咪咕直播',
					link: '/source/migu'
				},
				{
					text: '天途直播',
					link: '/source/ttou'
				},
				{
					text: '世界直播',
					link: '/source/org'
				},
				{
					text: '成人直播',
					link: '/source/xxx'
				},
				{
					text: '资源采集',
					link: '/source/movie'
				},
				{
					text: '一锅端系列',
					link: '/source/ygd'
				}
			]
		},
		{
			text: '电脑软件',
			items: [
				{
					text: '广告设计',
					link: '/source/ads'
				},
				{
					text: '其它软件',
					link: '/source/windows'
				}
			]
		},
		{
			text: '手机软件',
			items: [
				{
					text: '影视小说',
					link: '/source/mlive'
				}
			]
		},
		{
			text: '电视盒子',
			items: [
				{
					text: '电视盒子',
					link: '/source/tvhezi'
				}
			]
		}
	],
	'/template/': [
		{
			text: '800CMS',
			items: [
				{
					text: '800CMS',
					link: '/template/800cms/Base'
				},

			]
		},
		{
			text: 'MACCMS',
			items: [
				{
					text: 'MACCMS',
					link: '/template/maccms/Base'
				},

			]
		}
	]
}

export default defineConfigWithTheme<ThemeConfig>({
	extends: baseConfig,

	lang: 'zh-CN',
	title: 'defun.top',
	description: 'defun.top - 得丰网络工作室',
	srcDir: 'src',
	srcExclude: ['tutorial/**/description.md'],
	scrollOffset: 'header',

	head: [
		['meta', { name: 'twitter:site', content: '@vuejs' }],
		['meta', { name: 'twitter:card', content: 'summary' }],
		[
			'meta',
			{
				name: 'twitter:image',
				content: 'https://vuejs.org/images/logo.png'
			}
		],
		[
			'link',
			{
				rel: 'preconnect',
				href: 'https://sponsors.vuejs.org'
			}
		],
		[
			'script',
			{},
			fs.readFileSync(
				path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
				'utf-8'
			)
		],
		[
			'script',
			{
				src: 'https://cdn.usefathom.com/script.js',
				'data-site': 'XNOLWPLB',
				'data-spa': 'auto',
				defer: ''
			}
		]
	],

	themeConfig: {
		nav,
		sidebar,


		carbonAds: {
			code: 'CEBDT27Y',
			placement: 'vuejsorg'
		},
		socialLinks: [
			{ icon: 'languages', link: '/translations/' },
			{ icon: 'github', link: 'https://github.com/viptvx/' }
		],
		editLink: {
			repo: 'vuejs-translations/docs-zh-cn',
			text: '在 GitHub 上编辑此页'
		},
		footer: {
			license: {
				text: 'MIT License',
				link: 'https://opensource.org/licenses/MIT'
			},
			copyright: `Copyright © 2014-${new Date().getFullYear()} defun`
		}
	},

	markdown: {
		config(md) {
			md.use(headerPlugin)
		}
	},

	vite: {
		define: {
			__VUE_OPTIONS_API__: false
		},

		server: {
			host: true,
			fs: {
				// for when developing with locally linked theme
				allow: ['../..']
			}
		},
		build: {
			minify: 'terser',
			chunkSizeWarningLimit: Infinity
		},
		json: {
			stringify: true
		}
	},

	vue: {
		reactivityTransform: true
	}
})
