import React, { SVGAttributes } from 'react';
import { css } from 'emotion';
import { colors } from '../styles';

interface SocialIconLinkProps {
	url?: string;
	label: string;
	IconComponent: React.SFC<SVGAttributes<SVGElement>> | React.ComponentClass<SVGAttributes<SVGElement>>;
	disabled?: boolean;
}

export const SocialIconLink: React.SFC<SocialIconLinkProps> = ({
	url,
	label,
	IconComponent,
	disabled = false
}) => {
	if (disabled) {
		return <IconComponent className={css(socialIconLink, disabledSocialIcon)}/>
	}
	
	return (
		<a className={socialIconLink} href={url} target="_blank" aria-label={label}>
			<IconComponent/>
		</a>
	);
};

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
