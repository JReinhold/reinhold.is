import { css, injectGlobal } from 'emotion';

export const breakpoints = {
	phoneOnly: '@media (max-width: 599px)',
	tabletPortraitUp: '@media (min-width: 600px)',
	tabletLandscapeUp: '@media (min-width: 900px)',
	desktopUp: '@media (min-width: 1200px)',
	giantUp: '@media (min-width: 1800px)',
}

export const colors = {
	primaryFirst: '#134E5E', //dark blue
	primarySecond: '#71B280', //light green
	primaryGradient: '',
	accent: '#f0a70a', //orange
	lightBackground: '#fdfdfd',
	lightText: '#eeeeee',
	darkText: '#333333'
};
colors.primaryGradient = `linear-gradient(to top right, ${
	colors.primaryFirst
}, ${colors.primarySecond})`;

//add something with reusable breakpoints here, maybe as a const enum something?
//add some overscroll styles
export const injectGlobalStyles = () => {
	injectGlobal({
		html: {
			background: colors.accent,
		},
		body: {
			fontFamily: `
			'Courier',
			'Lucida Console',
			'Monaco',
			monospace,
			'Apple Color Emoji',
			'Segoe UI Emoji'`,
			color: colors.lightText,
			background: colors.lightBackground,
			margin: 0,
			overflowX: 'hidden', //hide sections sticking out to the right
			overflowY: 'scroll', //make sure we can still scroll vertically
			paddingBottom: '40px' //fix weird overscroll at bottom of page
		},
		'h1, h2, h3, h4, h5, h6': {
			margin: 0,
		},
		a: {
			fontWeight: 600,
			textDecoration: 'none',
			'&:link, :visited, :active, :hover': {
				color: colors.accent,
			},
			'&:hover': {
				textDecoration: 'underline',
			},
		},
	});
};

export const indexContainer = css({
	display: 'flex',
	flexDirection: 'column',
	'& > section:nth-child(even)': {
		background: colors.lightBackground,
		color: colors.darkText,
	},
	'& > section:nth-child(odd)': {
		background: [colors.primaryFirst, colors.primaryGradient], //first is fallback color for older browsers
	},
});

export const section = css({
	fontSize: '1.1rem',
	padding: '2em',
	display: 'flex',
	justifyContent: 'center',
	width: '101%',
	margin: '-3% 0 3% -4%',
	'& > div': {
		width: '75%',
		transform: 'rotate(-3deg)',
	},
	transform: 'rotate(3deg)',
});

export const sectionHeader = css({
	fontSize: '2.2em',
});
