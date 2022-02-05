module.exports = {
  siteMetadata: {
    title: "dimetrio.codes",
    titleTemplate: "%s",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://dimetrio.codes", // No trailing slash allowed!
    image: "/snape.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@dimetrio89",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
		{
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (e.g. <pre class="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (e.g. for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: "language-",
							// This is used to allow setting a language for inline code
							// (i.e. single backticks) by creating a separator.
							// This separator is a string and will do no white-space
							// stripping.
							// A suggested value for English speakers is the non-ascii
							// character '›'.
							inlineCodeMarker: null,
							// This lets you set up language aliases.  For example,
							// setting this to '{ sh: "bash" }' will let you use
							// the language "sh" which will highlight using the
							// bash highlighter.
							aliases: {},
							// This toggles the display of line numbers globally alongside the code.
							// To use it, add the following line in gatsby-browser.js
							// right after importing the prism color scheme:
							//  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
							// Defaults to false.
							// If you wish to only show line numbers on certain code blocks,
							// leave false and use the {numberLines: true} syntax below
							showLineNumbers: false,
							// If setting this to true, the parser won't handle and highlight inline
							// code used in markdown i.e. single backtick code like `this`.
							noInlineHighlight: true,
							// This adds a new language definition to Prism or extend an already
							// existing language definition. More details on this option can be
							// found under the header "Add new language definition or extend an
							// existing language" below.
							languageExtensions: [
								{
									language: "superscript",
									extend: "javascript",
									definition: {
										superscript_types: /(SuperType)/,
									},
									insertBefore: {
										function: {
											superscript_keywords: /(superif|superelse)/,
										},
									},
								},
							],
							// Customize the prompt used in shell output
							// Values below are default
							prompt: {
								user: "root",
								host: "localhost",
								global: false,
							},
							// By default the HTML entities <>&'" are escaped.
							// Add additional HTML escapes by providing a mapping
							// of HTML entities and their escape value IE: { '}': '&#123;' }
							escapeEntities: {},
						},
					}
				
				]
			}
		},
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 70,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    `gatsby-transformer-sharp`,
		"gatsby-plugin-postcss",
		{
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
		{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages_images",
        path: "./src/pages/assets",
      },
      __key: "pages_images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
		{
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: `./src/content/articles/`,
      },
    },
		{
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "dimetrio.codes",
        short_name: "dimetrio.codes",
        start_url: '/',
        background_color: "#fff",
        theme_color: "#fff",
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
		}
  ],
};
