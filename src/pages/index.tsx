import { graphql } from 'gatsby';
import * as React from 'react';
import { injectGlobal } from 'emotion';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
	data: {
		site: {
			siteMetadata: {
				siteName: string;
			};
		};
	};
}

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				siteName
			}
		}
	}
`;

injectGlobal({
	'*': {
		fontFamily: `'American Typewriter',
			'Lucida Console',
			'Monaco',
			'Courier',
			monospace,
			'Apple Color Emoji',
			'Segoe UI Emoji'`,
	},
});



export default ({ data }: IndexPageProps) => {
	const { siteName } = data.site.siteMetadata;
	return (
		<>
			<section>
				<h1>Hi, Reinhold is me!</h1>
				<p>
					I’m a developer, designer, entrepreneur. I’m addicted to mindful
					running, mostly in Aarhus, Denmark, where I live.
				</p>
				<div>social icons here</div>
			</section>
			<section>
				<h1>Bio</h1>
				<p>
					Longer text about me. I could write pages and pages about myself, but
					that would be useless. True value comes in interaction with other
					people, likeminded or not. So, what do YOU think that I am? What
					defines me, from your perspective? Let’s do an exercise. In the
					textbox below, write the first thing that comes to mind when you think
					of me. I’ve written a little something to get you started, just don’t
					get caried away with flattery.
				</p>
			</section>
		</>
	);
};
