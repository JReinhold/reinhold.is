import * as React from 'react';
import { css } from 'emotion';
import portraitImg from '../../static/jeppe-reinhold.jpg';
import { section, Breakpoints } from '../styles';
import instagramIcon from '../../static/social-icons/instagram.svg';
import twitterIcon from '../../static/social-icons/twitter.svg';
import mailIcon from '../../static/social-icons/mail.svg';
import githubIcon from '../../static/social-icons/github.svg';
import mediumIcon from '../../static/social-icons/medium.svg';
import snapchatIcon from '../../static/social-icons/snapchat.svg';

export const WelcomeSection: React.SFC = () => (
	<section className={section}>
		<div className={container}>
			<h1 className={header}>Hi, Reinhold is me!</h1>
			<div className={introText}>
				<p>I’m a developer, 👨‍💻 product designer 🎨 and entrepreneur. 🚀</p>
				<p>
					I’m hooked on{' '}
					<a
						href="https://news.nike.com/news/nike-headspace-partnership"
						target="_blank"
					>
						mindful running, 🧠
					</a>{' '}
					mostly in{' '}
					<a href="https://goo.gl/maps/ae3A6dXX89v" target="_blank">
						Aarhus, Denmark, 🇩🇰
					</a>{' '}
					where I live.
				</p>
			</div>
			<img className={portrait} src={portraitImg} />
			<div className={socialIcons}>
				<a href="https://twitter.com/DrReinhold" target="_blank">
					<img src={twitterIcon} />
				</a>
				<a href="mailto:jeppereinhold@gmail.com">
					<img src={mailIcon} />
				</a>
				<a href="https://github.com/JReinhold" target="_blank">
					<img src={githubIcon} />
				</a>
				<a href="https://medium.com/@jreinhold" target="_blank">
					<img src={mediumIcon} />
				</a>
				<img src={snapchatIcon} />
				<img src={instagramIcon} />
			</div>
		</div>
	</section>
);

const container = css({
	display: 'grid',
	gridTemplateColumns: '100%',
	gridTemplateAreas: `
	"header"
	"text"
	"portrait"
	"socialIcons"
	`,
	'@media (min-width: 900px)': {
		marginTop: '4em',
		gridTemplateColumns: '60% auto',
		gridTemplateAreas: `
		"header			portrait"
		"text			portrait"
		"socialIcons	........"
		`,
		fontSize: '1.6em',
	},
});

const header = css({ fontSize: '2em', gridArea: 'header' });
const introText = css({ gridArea: 'text' });
const socialIcons = css({
	gridArea: 'socialIcons',
	display: 'flex',
	justifyContent: 'center',
	'& > a > img, img': {
		width: 32,
		height: 32,
		margin: 8,
		'& :hover': { fill: 'red' },
	},
});
const portrait = css({ margin: 'auto', gridArea: 'portrait' });
