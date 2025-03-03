// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Crypto Price Tracker Documentation',
  tagline: 'Documentation for the Crypto Price Tracker project',
  url: 'http://localhost:3000',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-repo/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Crypto Price Tracker',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'someSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/your-repo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Your Company.`,
    },
  },
};

module.exports = config;
