module.exports = {
  title: 'Brett Commandeur',
  description: 'Writings on Development',
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about' },
    ],
    sidebar: {
      '/blog/': [
        'vuepress',
        'livejournal-prototype'
      ]
    }
  }
}

