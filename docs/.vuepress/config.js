module.exports = {
  base: '/CCSprouT/',
  dest: 'dist',
  title: 'Coding Core Sprout',
  description: 'Coding Core Sprout：处于萌芽阶段的 Code 核心知识库',
  repo: 'https://github.com/hanxuanliang/CCSprouT',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [
      { text: '首页', link: '/' },
      { text: '编程规范', link: '/chapter1/' },
    ],
    sidebar: [
      {
        title: '初识 TypeScript',
        collapsable: false,
        children: [
          ['chapter1/', 'Introduction'],
          'chapter1/install',
          'chapter1/start'
        ]
      },
      {
        title: 'TypeScript 常用语法',
        collapsable: false,
        children: [
          'chapter2/type',
          'chapter2/declare',
          'chapter2/interface',
          'chapter2/class',
          'chapter2/function',
          'chapter2/generic',
          'chapter2/inference',
          'chapter2/advance'
        ]
      },
      {
        'title': 'ts-axios 项目初始化',
        collapsable: false,
        children: [
          'chapter3/require',
          'chapter3/init',
          'chapter3/base'
        ]
      },
      {
        'title': 'ts-axios 基础功能实现',
        collapsable: false,
        children: [
          'chapter4/url',
          'chapter4/data',
          'chapter4/header',
          'chapter4/response',
          'chapter4/response-header',
          'chapter4/response-data'
        ]
      },
      {
        'title': 'ts-axios 异常情况处理',
        collapsable: false,
        children: [
          'chapter5/error',
          'chapter5/enhance'
        ]
      }
    ]
  }
}
  