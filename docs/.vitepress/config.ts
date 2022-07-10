import {
  title,
  description,
  ogImage
} from './meta'

export default {
  lang: "en-US",
  title: title,
  description: description,
  outDir: "../dist",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'keywords', content: 'lorehub, dialogue schema, dialogue system, unity dialogue system, dialogue system unity, godot dialogue system, dialog manager, ue4 dialogue system' }],
    ['meta', { property: 'og:title', content: title }],
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: 'https://LoreHub.app' }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: 'LoreHub' }],
    ['meta', { name: 'twitter:description', content: description }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  themeConfig: {
    siteTitle: "Docs & Tutorials",
    logo: "/favicon.ico",
    editLink: {
      pattern:
        "https://github.com/lore-hub-app/dialogue-schema-docs/edit/main/docs/:path",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/lore-hub-app" },
      { icon: "twitter", link: "https://twitter.com/LoreHubApp" },
      { icon: "discord", link: "https://discord.gg/R5bhwjyGcS" },
    ],
    nav: [{ text: "LoreHub", link: "https://LoreHub.app" }],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Dialogue Schema", link: "/introduction/index" },
          { text: "Concept", link: "/introduction/concept" },
          { text: "Examples", link: "/introduction/examples" }
        ],
      },
      {
        text: "Tutorials",
        items: [
          { text: "Dialogue System Unity", link: "/tutorials/unity/index" },
        ]
      },
      {
        text: "Dialogue Schema Api",
        items: [
          { text: "Export Schema", link: "/dialogue-schema-api/export-schema/v1" },
          { text: "Document", link: "/dialogue-schema-api/document/v1" },
          { text: "Dialogue", link: "/dialogue-schema-api/dialogue/v1" },
          { text: "Dialogue Node", link: "/dialogue-schema-api/dialogue-node/v1" },
          { text: "Dialogue Node Option", link: "/dialogue-schema-api/dialogue-node-option/v1" },
          { text: "Variable", link: "/dialogue-schema-api/variable/v1" },
          { text: "Meta Schema", link: "/dialogue-schema-api/meta-schema/v1" },
          { text: "Content Block", link: "/dialogue-schema-api/content-block/v1" }
        ]
      },
    ],
  },
};
