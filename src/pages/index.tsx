import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from 'emotion';
import { WelcomeSection } from '../components/welcome-section';
import { section, injectGlobalStyles, sectionHeader } from '../styles';
import { BioSection } from '../components/bio-section';

injectGlobalStyles();

export default () => {
	return (
		<div className={container}>
			<WelcomeSection />
			<BioSection/>

			<section>
				<div>
					<h1 className={sectionHeader}>Work</h1>
					<p>
						Longer text about me. I could write pages and pages about myself,
						but that would be useless. True value comes in interaction with
						other people, likeminded or not. So, what do YOU think that I am?
						What defines me, from your perspective? Let’s do an exercise. In the
						textbox below, write the first thing that comes to mind when you
						think of me. I’ve written a little something to get you started,
						just don’t get caried away with flattery.
					</p>
				</div>
			</section>
			<section>
				<h1 className={sectionHeader}>Talks</h1>
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
			<section>
				<h1 className={sectionHeader}>Writing</h1>
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
			<section>
				<h1 className={sectionHeader}>Personal Mission Statement</h1>
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
		</div>
	);
};

const container = css({
	display: 'flex',
	flexDirection: 'column',
	'& > section:nth-child(2n)': {
		background: '#fdfdfd'
	},
	'& > section:nth-child(2n+1)': {
		background: ['#00b09b', 'linear-gradient(to bottom, #96c93d, #00b09b)'], //first is fallback color for old browsers
	}
});
