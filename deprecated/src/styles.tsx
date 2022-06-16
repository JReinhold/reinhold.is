import { css, injectGlobal } from 'emotion';
import styled from 'react-emotion';

export const breakpoints = {
	phoneOnly: '@media (max-width: 599px)',
	tabletPortraitUp: '@media (min-width: 600px)',
	tabletLandscapeUp: '@media (min-width: 900px)',
	desktopUp: '@media (min-width: 1200px)',
	giantUp: '@media (min-width: 1800px)',
};

export const colors = {
	primaryFirst: '#134E5E', //dark blue
	primarySecond: '#71B280', //light green
	primaryGradient: '', //placeholder for dynamic gradient generated below
	accent: '#f0a70a', //orange
	lightBackground: '#fafafa', //very light grey
	lightText: '#eeeeee',
	darkText: '#333333', //very dark grey
};
colors.primaryGradient = `linear-gradient(to top right, ${colors.primaryFirst}, ${colors.primarySecond})`;

export const globalFontFamily = `
	'Courier',
	'Lucida Console',
	'Monaco',
	monospace,
	'Apple Color Emoji',
	'Segoe UI Emoji'`;

export const injectGlobalStyles = () => {
	injectGlobal({
		html: {
			background: colors.accent,
		},
		body: {
			fontFamily: globalFontFamily,
			color: colors.lightText,
			background: colors.lightBackground,
			margin: 0,
			overflowX: 'hidden', //hide sections sticking out to the right
			overflowY: 'scroll', //make sure we can still scroll vertically
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

const randomDiagonalDividers = () => {
	const MIN_HEIGHT = 20; //px
	const MAX_HEIGHT = 60; //px
	const lightBg = colors.lightBackground; //shorthand for light background, used in gradients below

	return [2, 4].reduce((styles, nth) => {
		// height if dividers are random, between the min and max
		const topHeight =
			Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT)) + MIN_HEIGHT;
		const topDirection = Math.random() < 0.5 ? 'left' : 'right';

		const bottomHeight =
			Math.floor(Math.random() * (MAX_HEIGHT - MIN_HEIGHT)) + MIN_HEIGHT;
		const bottomDirection = Math.random() < 0.5 ? 'left' : 'right';

		return {
			...styles,
			[`& > section:nth-of-type(${nth})`]: {
				background: `
				linear-gradient(${lightBg}, ${lightBg}) 0px ${
					topHeight - 1
				}px/100% calc(100% - ${topHeight + bottomHeight - 2}px) no-repeat,
				linear-gradient(to top ${topDirection}, ${lightBg} 49%, transparent 51%) 0 0/100% ${topHeight}px no-repeat,
				linear-gradient(to bottom ${bottomDirection}, ${lightBg} 49%, transparent 51%) 100% 100%/100% ${bottomHeight}px no-repeat
				`,
			},
		};
	}, {});
};

/*
	Note about the crazy linear gradient above, with the following example:

		linear-gradient(${lightBg}, ${lightBg}) 0px 30px/100% calc(100% - 60px) no-repeat,
		linear-gradient(to top right, ${lightBg} 49%, transparent 51%) 0 0/100% 30px no-repeat,
		linear-gradient(to bottom right, ${lightBg} 49%, transparent 51%) 100% 100%/100% 30px no-repeat
	
	It serves the purpose of creating the skewed dividers between sections.
	It is applied to each light section. It consits of three gradients:
		1. light fill
		2. top gradient, that makes some part of top transparent
		3. bottom gradient, that makes some part of bottom transparent
	the syntax for each gradient is:
		linear-gradient(<DIRECTION>, <FIRST_COLOR> <FIRST_COLOR_POS>, <SECOND_COLOR> <SECOND_COLOR_POS>) <X_ORIGIN> <Y_ORIGIN>/<WIDTH> <HEIGHT> <REPEAT>
	This gives:
		1. gradient light to light, starting 30px below top, ending 60px below bottom (100% - 60px)
		2. gradient towards top right corner, light to transparent, starting at 0 0 origin (top left), ending 30px below top
		3. gradient towards bottom right corner, light to transparent, starting at 100% 100% origin (bottom right), ending 30px above bottom

	The function generates random numbers for the sizes of the gradients, as well as the directions.
	An exstra pixel is added to the middle fill in top and bottom, to fix small gaps between the gradients on phones.
*/

export const indexContainer = css({
	display: 'flex',
	flexDirection: 'column',
	background: [colors.primaryFirst, colors.primaryGradient], //first is fallback color for older browsers
	'& > section:nth-child(even)': {
		color: colors.darkText,
	},
	...randomDiagonalDividers(),
});

export const section = css({
	fontSize: '1.1rem',
	padding: '3em 8%',
	[breakpoints.tabletPortraitUp]: {
		padding: '3em 16%',
	},
});

export const SectionHeader = styled('h1')({
	label: 'sectionSubHeader',
	fontSize: '2.2em',
	margin: '0 0 0.5em 0',
});

export const SectionSubHeader = styled('h2')({
	label: 'sectionSubHeader',
	margin: '1em 0',
	fontSize: '1.2em',
	fontWeight: 'normal',
});
