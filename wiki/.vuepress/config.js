// https://v1.vuepress.vuejs.org/config/

module.exports = {
    title: "Corehalla Wiki",
    description: "Community powered wiki for Brawlhalla",
    themeConfig: {
        prevLinks: true,
        nextLinks: true,
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about/" },
            { text: "Guide", link: "/guide/" },
            { text: "Competitive", link: "/competitive/" },
            {
                text: "GitHub",
                link: "https://github.com/Corehalla/Corehalla-Wiki"
            }
        ],
        searchPlaceholder: 'Search...',
        sidebar: 'auto',
        sidebarDepth: 2,
        smoothScroll: true,
        sidebar: [
            {
                title: 'Home',
                path: '/'
            },
            {
                type: 'group',
                title: 'About',
                path: '/about/',
                children: [
                    {
                        title: 'Legends',
                        path: '/about/legends/',
                        sidebarDepth: 3,
                        children: [
                            'about/legends/Bodvar/',
                            'about/legends/Cassidy/',
                            'about/legends/Orion/'
                        ]
                    }
                ]
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
