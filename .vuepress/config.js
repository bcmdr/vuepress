module.exports = {
  title: 'Brett Commandeur',
  description: 'Developer Documentation',
  themeConfig: {
    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'Resume', link: '/resume/' },
    ],
    sidebar: {
      // sidebar for pages under /foo/
      '/docs/': [
        '',
        'javascript',
        'vue'
      ],
      // sidebar for pages under /bar/
      '/resume/': [
        ''
      ]
    }
  }
}

