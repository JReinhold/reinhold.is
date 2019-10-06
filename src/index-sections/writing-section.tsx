import React from 'react';
import {
	section,
	SectionSubHeader,
	SectionHeader,
	colors,
	breakpoints,
} from '../styles';
import { css } from 'emotion';

const posts = [
	{
		title: 'A story of Apple’s excruciating & outdated legal practices',
		subtitle: 'From a developer’s point of view',
		readingTime: 7,
		url:
			'https://medium.com/@jreinhold/a-story-of-apples-excruciating-outdated-legal-practices-e5c144f0aeeb',
		year: 2017,
	},
];

export const WritingSection: React.SFC = () => {
	return (
		<section className={section}>
			<SectionHeader>✍️ Writing</SectionHeader>
			<SectionSubHeader>
				This isn't that impressive, there's not a lot here yet. But that's
				great! It motivates me to write more in the future.
			</SectionSubHeader>
			<div className={articleContainer}>
				{posts.map(post => {
					const { title, subtitle, year, url, readingTime } = post;

					return (
						<div key={url}>
							<a target="_blank" href={url}>
								{title}
							</a>
							<p className={subtitleStyle}>{subtitle}</p>
							<span className={yearStyle}>
								🗓 {year} - 🕘 {readingTime} min
							</span>
						</div>
					);
				})}
			</div>
		</section>
	);
};

const articleContainer = css({
	display: 'grid',
	gridGap: '1em',
	[breakpoints.tabletPortraitUp]: {
		gridTemplateColumns: 'repeat(auto-fit, minmax(20em, 1fr))',
	},
});

const subtitleStyle = css({
	margin: '0 0 0.5em 0',
});

const yearStyle = css({
	display: 'block',
	label: 'year',
	color: colors.lightText + 'dd',
});
