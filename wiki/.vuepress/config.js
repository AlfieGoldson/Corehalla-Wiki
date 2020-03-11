// https://v1.vuepress.vuejs.org/config/

module.exports = {
  title: "Corehalla Wiki",
  description: "Community powered wiki for Brawlhalla",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Game Mechanics", link: "/mechanics/" },
      { text: "Competitive", link: "/competitive/" },
      {
        text: "GitHub",
        link: "https://github.com/Corehalla/Corehalla-Wiki"
      }
    ]
  },
  locales: {
    "/": {
      lang: "en-US"
    },
    // "/fr-FR/": {
    //   lang: "fr-FR",
    //   description: "Wiki pour Brawlhalla"
    // }
  }
};
