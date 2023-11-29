// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'HomeWizard Energy API Documentation',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://api-documentation.homewizard.com',
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/homewizard/api-documentation/edit/main'
                },
                theme: {
                    customCss: './src/css/custom.css'
                }
            })
        ]
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'API Documentation',
                logo: {
                    alt: 'HomeWizard Energy Logo',
                    src: 'img/logo.svg'
                },
                items: [
                    {
                        href: 'https://www.homewizard.com',
                        label: 'Go to HomeWizard',
                        position: 'right'
                    }
                ]
            },
            algolia: {
                appId: '7BN6NHDFB3',
                apiKey: '627ac09960f78327bfece9bf65f54d52',
                indexName: 'api-documentation-homewizard',
                insights: true,
                contextualSearch: true
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Introduction',
                                to: '/docs/introduction'
                            },
                            {
                                label: 'Changelog',
                                to: '/docs/changelog'
                            },
                            {
                                label: 'Contribute',
                                href: 'https://github.com/homewizard/api-documentation/'
                            }
                        ]
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Facebook',
                                href: 'https://www.facebook.com/HomeWizardBV/'
                            },
                            {
                                label: 'X / Twitter',
                                href: 'https://twitter.com/HomeWizard_NL'
                            },
                            {
                                label: 'Linkedin',
                                href: 'https://www.linkedin.com/company/homewizard'
                            }
                        ]
                    },
                    {
                        title: 'Us',
                        items: [
                            {
                                label: 'HomeWizard',
                                href: 'https://homewizard.com/'
                            },
                            {
                                label: 'HomeWizard Support',
                                href: 'https://helpdesk.homewizard.com/nl/'
                            }
                        ]
                    }
                ]
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula
            }
        })
}

export default config
