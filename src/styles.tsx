import { css, injectGlobal } from 'emotion';

//add something with reusable breakpoints here, maybe as a const enum something?
//add some overscroll styles
export const injectGlobalStyles = () => {
	injectGlobal({
		body: {
			fontFamily: `'American Typewriter',
			'Lucida Console',
			'Monaco',
			'Courier',
			monospace,
			'Apple Color Emoji',
			'Segoe UI Emoji'`,
			lineHeight: 1.5,
			color: '#333333',
			margin: 0,
			overflowX: 'hidden', //hide sections sticking out to the right
			overflowY: 'scroll', //make sure we can still scroll vertically,
		},
		'h1, h2, h3, h4, h5, h6': {
			margin: 0,
		},
		'a:link, a:visited, a:active': {
			color: '#333333'
		},
		'a:hover': {
			color: '#cccccc'
		}
	});
};

export const indexContainer = css({
	display: 'flex',
	flexDirection: 'column',
	'& > section:nth-child(2n)': {
		background: '#fdfdfd'
	},
	'& > section:nth-child(2n+1)': {
		background: ['#00b09b', 'linear-gradient(to bottom right, #96c93d, #00b09b)'], //first is fallback color for old browsers
	}
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
		minWidth: '1000px',
		transform: 'rotate(-3deg)',
	},
	transform: 'rotate(3deg)',
});

export const sectionHeader = css({
	fontSize: '2.2em',
});
