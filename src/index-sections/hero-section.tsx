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
} from '../components/svg-icons';
import { SocialIconLink } from '../components/social-icon-link';

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
						Aarhus, Denmark 🇩🇰
					</a>{' '}
					where I live.
				</p>
			</div>
			<img className={portrait} src={portraitImg} />
			<div className={socialIconContainer}>
				{renderSocialIcons()}
			</div>
		</div>
	</section>
);

const renderSocialIcons = () => {
	const links = [
		{
			url: 'https://twitter.com/DrReinhold',
			label: 'visit twitter profile',
			icon: TwitterIcon,
		},

		{
			url: 'mailto:jeppereinhold@gmail.com',
			label: 'send e-mail',
			icon: GoogleInboxIcon,
		},
		{
			url: 'https://github.com/JReinhold',
			label: 'visit github profile',
			icon: GitHubIcon,
		},
		{
			url: 'https://linkedin.com/in/jeppereinhold',
			label: 'visit linkedin profile',
			icon: LinkedInIcon,
		},
		{
			url: 'https://medium.com/@jreinhold/latest',
			label: 'see medium publications',
			icon: MediumIcon,
		},
		{
			disabled: true,
			label: 'no instagram profile',
			icon: InstagramIcon,
		},
		{
			disabled: true,
			label: 'no snapchat profile',
			icon: SnapchatIcon,
		},
	];

	return links.map(({url, label, icon, disabled}) => (
		<SocialIconLink key={label} url={url} label={label} IconComponent={icon} disabled={disabled}/>
	))
};

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
		marginTop: '2em',
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

const portrait = css({ margin: 'auto', gridArea: 'portrait' });
