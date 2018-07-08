import { css, injectGlobal } from 'emotion';

//add something with reusable breakpoints here, maybe as a const enum something?
//add some overscroll styles
export const injectGlobalStyles = () => {
	injectGlobal({
		'*': {
			fontFamily: `'American Typewriter',
			'Lucida Console',
			'Monaco',
			'Courier',
			monospace,
			'Apple Color Emoji',
			'Segoe UI Emoji'`,
			color: '#333333',
		},
		body: {
			margin: 0,
		},
		'h1, h2, h3, h4, h5, h6': {
			margin: 0,
		},
	});
};

export const section = css({
	fontSize: '1.2rem',
	padding: '2em',
	display: 'flex',
	justifyContent: 'center',
	'& > div': {
		width: '75%',
		minWidth: '1000px',
	},
});

export const sectionHeader = css({
	fontSize: '2.2em'
})
