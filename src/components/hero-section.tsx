import * as React from 'react';
import { css } from 'emotion';
import portraitImg from '../assets/jeppe-reinhold.jpg';
import { section, breakpoints, colors } from '../styles';
import {
	GoogleInboxIcon,
	GitHubIcon,
	TwitterIcon,
	InstagramIcon,
	MediumIcon,
	LinkedInIcon,
	SnapchatIcon,
} from './svg-icons';

export const HeroSection: React.SFC = () => (
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
						aria-label="read about mindful running with nike and headspace"
					>
						mindful running, 🧠
					</a>{' '}
					mostly in{' '}
					<a
						href="https://goo.gl/maps/ae3A6dXX89v"
						target="_blank"
						aria-label="see aarhus google maps"
					>
						Aarhus, Denmark, 🇩🇰
					</a>{' '}
					where I live.
				</p>
			</div>
			<img className={portrait} src={portraitImg} />
			<div className={socialIconContainer}>
				<a
					className={socialIconLink}
					href="https://twitter.com/DrReinhold"
					target="_blank"
					aria-label="visit twitter profile"
				>
					<TwitterIcon />
				</a>
				<a
					className={socialIconLink}
					href="mailto:jeppereinhold@gmail.com"
					aria-label="send e-mail"
				>
					<GoogleInboxIcon />
				</a>
				<a
					className={socialIconLink}
					href="https://github.com/JReinhold"
					target="_blank"
					aria-label="visit github profile"
				>
					<GitHubIcon />
				</a>
				<a
					className={socialIconLink}
					href="https://linkedin.com/in/jeppereinhold"
					target="_blank"
					aria-label="visit linkedin profile"
				>
					<LinkedInIcon />
				</a>
				<a
					className={socialIconLink}
					href="https://medium.com/@jreinhold"
					target="_blank"
					aria-label="visit medium profile"
				>
					<MediumIcon />
				</a>
				<InstagramIcon className={css(socialIconLink, disabledSocialIcon)} />
				<SnapchatIcon className={css(socialIconLink, disabledSocialIcon)} />
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
	[breakpoints.tabletLandscapeUp]: {
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
const socialIconContainer = css({
	gridArea: 'socialIcons',
	display: 'flex',
	justifyContent: 'center',
});

const socialIconLink = css({
	fontSize: '2em',
	margin: '0 0.1em',
	'&:link, :visited, :active': {
		color: colors.lightText,
	},
	'&:hover': {
		color: colors.accent,
	},
});

const disabledSocialIcon = css({
	color: '#aaaaaa',
	'&:hover': {
		color: '#888888',
	},
});
const portrait = css({ margin: 'auto', gridArea: 'portrait' });
