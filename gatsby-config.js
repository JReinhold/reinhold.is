module.exports = {
	siteMetadata: {
		siteName: `reinhold.is`,
	},
	plugins: [
		'gatsby-plugin-typescript',
		'gatsby-plugin-emotion',
		{ resolve: 'gatsby-source-medium', options: { username: '@jreinhold' } },
	],
};
