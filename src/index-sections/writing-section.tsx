import React from 'react';
import {
	section,
	SectionSubHeader,
	SectionHeader,
	colors,
	breakpoints,
} from '../styles';
import { graphql, StaticQuery } from 'gatsby';
import { css } from 'emotion';

interface MediumPostsData {
	allMediumPost: {
		edges: [
			{
				node: {
					id: string;
					title: string;
					createdAt: string;
					uniqueSlug: string;
					author: {
						username: string;
					};
					virtuals: {
						readingTime: number;
						totalClapCount: number;
						subtitle: string;
					};
				};
			}
		];
	};
}

const WritingSection: React.SFC = () => {
	return (
		<section className={section}>
			<SectionHeader>✍️ Writing</SectionHeader>
			<SectionSubHeader>
				This isn't that impressive, there's not a lot here yet. But that's
				great! It motivates me to write more in the future.
			</SectionSubHeader>
			<div className={articleContainer}>
				<StaticQuery
					query={graphql`
						query MediumPosts {
							allMediumPost(sort: { fields: [createdAt], order: DESC }) {
								edges {
									node {
										id
										title
										createdAt
										uniqueSlug
										author {
											username
										}
										virtuals {
											readingTime
											subtitle
											totalClapCount
										}
									}
								}
							}
						}
					`}
				>
					{(data: MediumPostsData) => {
						const posts = data.allMediumPost.edges;
						return posts.map(({ node }) => {
							console.log(node);
							const {
								id,
								title,
								createdAt,
								virtuals,
								author,
								uniqueSlug,
							} = node;
							const year = createdAt.substr(0, 4);
							const url = `https://medium.com/@${
								author.username
							}/${uniqueSlug}`;

							return (
								<div key={id}>
									<a target="_blank" href={url}>
										{title}
									</a>
									<p className={subtitle}>{virtuals.subtitle}</p>
									<span className={yearStyle}>
										🗓 {year} - 🕘 {virtuals.readingTime.toFixed(0)} min - 👏{' '}
										{virtuals.totalClapCount}
									</span>
								</div>
							);
						});
					}}
				</StaticQuery>
			</div>
		</section>
	);
};

export default WritingSection; //has to be default export due to https://github.com/gatsbyjs/gatsby/issues/6337

const articleContainer = css({
	display: 'grid',
	gridGap: '1em',
	[breakpoints.tabletPortraitUp]: {
		gridTemplateColumns: 'repeat(auto-fit, minmax(20em, 1fr))',
	},
});

const subtitle = css({
	margin: '0 0 0.5em 0',
});

const yearStyle = css({
	display: 'block',
	label: 'year',
	color: colors.lightText + 'dd',
});
