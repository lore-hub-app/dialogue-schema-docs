export default {
  title: "LoreHub Documentation",
  description: "Just playing around.",
  outDir: "../dist",
  themeConfig: {
    siteTitle: "Dialogue Schema",
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
        text: "Api",
        items: [
          { text: "Export Schema", link: "/export-schema/v1" },
          { text: "Document", link: "/document/v1" },
          { text: "Dialogue", link: "/dialogue/v1" },
          { text: "Dialogue Node", link: "/dialogue-node/v1" },
          { text: "Dialogue Node Option", link: "/dialogue-node-option/v1" },
          { text: "Variable", link: "/variable/v1" },
          { text: "Meta Schema", link: "/meta-schema/v1" },
          { text: "Content Block", link: "/content-block/v1" }
        ]
      },
    ],
  },
};
