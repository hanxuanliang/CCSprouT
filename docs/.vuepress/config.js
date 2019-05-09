module.exports = {
	base: '/CCSprouT/',
	dest: 'dist',
	title: 'Coding Core Sprout',
	description: 'Coding Core Sprout：处于萌芽阶段的 Code 核心知识库',
  repo: 'https://github.com/hanxuanliang/CCSprouT',
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom'
  ],
	themeConfig: {
		editLinks: false,
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
		locales: {
			'/': {
				nav: require('./nav/zh'),
				sidebar: {
          // 可以写多个导航导向内容
          '/ts-axios/': getTsAxiosSidebar('初识 TypeScript', 'TypeScript 常用语法', 'ts-axios 项目初始化', 'ts-axios 基础功能实现', 'ts-axios 异常情况处理'),
          '/blog/mysql/': getMysqlSidebar('Mysql'),
          '/blog/network/': getNetworkSidebar('Network'),
				}
			}
		},
  },
  extraWatchFiles: [
    '.vuepress/nav/zh.js',
  ]
}

function getTsAxiosSidebar(groupA, groupB, groupC, groupD, groupE) {
	return [
		{
			title: groupA,
			collapsable: false,
			children: [
				['', 'Introduction'],
				'install',
				'start',
			]
		},
		{
			title: groupB,
			collapsable: false,
			children: [ 
        'type',
        'declare',
        'interface',
        'class',
        'function',
        'generic',
        'inference',
        'advance' 
      ]
    },
    {
      'title': groupC,
      collapsable: false,
      children: [
        'require',
        'init',
        'base'
      ]
    },
    {
      'title': groupD,
      collapsable: false,
      children: [
        'url',
        'data',
        'header',
        'response',
        'response-header',
        'response-data'
      ]
    },
    {
      'title': groupE,
      collapsable: false,
      children: [
        'error',
        'enhance'
      ]
    }
	];
}

function getMysqlSidebar(group) {
  return [
    {
			title: group,
			collapsable: false,
			children: [
        ['', 'Introduction'],
				'single-table-Query'
			]
		},
  ]
}

function getNetworkSidebar(group) {
  return [
    {
			title: group,
			collapsable: false,
			children: [
        ['', 'Introduction'],
        'IP-From',
        'about-UDP',
			]
		},
  ]
}
