module.exports = {
	base: '/CCSprouT/',
	dest: 'dist',
  repo: 'https://github.com/hanxuanliang/CCSprouT',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Coding Core Sprout',
      description: 'Coding Core Sprout：处于萌芽阶段的 Code Repository'
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
  ],
	themeConfig: {
		editLinks: false,
    docsDir: 'docs',
    lastUpdated: '上次更新',
		locales: {
			'/': {
				nav: require('./nav/zh'),
				sidebar: {
          // 可以写多个导航导向内容
          '/ts-axios/': getTsAxiosSidebar('初识 TypeScript', 'TypeScript 常用语法', 'ts-axios 项目初始化', 'ts-axios 基础功能实现', 'ts-axios 异常情况处理'),
          '/go/': getGoParkSidebar('Go 基础'),
          '/blog/mysql/': getMysqlSidebar('Mysql'),
          '/blog/network/': getNetworkSidebar('Network'),
          '/blog/python/': getAdPythonSidebar('AdvancePython'),
          '/blog/tomcat/': getTomcatSidebar('Tomcat容器'),
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
			// collapsable: false,
			children: [
				['', 'Introduction'],
				'install',
				'start',
			]
		},
		{
			title: groupB,
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
      children: [
        'require',
        'init',
        'base'
      ]
    },
    {
      'title': groupD,
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
      children: [
        'error',
        'enhance'
      ]
    }
	];
}

function getGoParkSidebar(groupA) {
  return [
    {
			title: groupA,
			children: [
        ['', 'Go 环境搭建'],
				'go-slice'
			]
		},
  ]
}

function getMysqlSidebar(group) {
  return [
    {
			title: group,
			children: [
        ['', 'Mysql World'],
				'single-table-Query'
			]
		},
  ]
}

function getNetworkSidebar(group) {
  return [
    {
			title: group,
			children: [
        ['', 'NetWork'],
        'IP-From',
        'about-UDP',
			]
		},
  ]
}

function getAdPythonSidebar(group) {
  return [
    {
			title: group,
			children: [
        ['', 'Python进阶'],
        'list-tuple',
        'dict-set',
        'string'
			]
		},
  ]
}

function getTomcatSidebar(group) {
  return [
    {
			title: group,
			children: [
        ['', 'Tomcat 容器'],
        'http-protocol'
			]
		},
  ]
}
