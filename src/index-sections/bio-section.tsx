import React, { EventHandler } from 'react';
import { section, colors, breakpoints, SectionHeader } from '../styles';
import { css } from 'emotion';
import { WriteMyBio } from '../components/write-my-bio';

interface BioSectionState {
	longVersion: boolean;
}

export class BioSection extends React.PureComponent<{}, BioSectionState> {
	readonly state = {
		longVersion: true,
	};

	componentDidMount() {
		// default to long bio on tabletLandscape and up
		// have to do it in componentDidMount because window is undefined at build time
		this.setState({ longVersion: window.innerWidth > 900 });
	}

	handleBioLength: EventHandler<React.MouseEvent> = e => {
		e.preventDefault();
		this.setState({ longVersion: !this.state.longVersion });
	};

	renderShortBio = () => {
		return (
			<div className={twoColumn}>
				<p>
					I've always <em>loved</em> tinkering with computers.
				</p>
				<p>
					During my Computer Science studies in 2016, I co-founded{' '}
					<a href="https://bambuu.dk" target="_blank">
						bambuu
					</a>
					, a digital agency doing web development and design. I was the project
					manager and <em>main frontend developer</em>, but had my fair share of
					ventures into <em>Node.js and Java backends</em>.
				</p>
				<p>
					In 2018 I co-founded{' '}
					<a href="https://reccoon.dk" target="_blank">
						Reccoon
					</a>
					, a SaaS with the missions of making waste management more
					environmental friendly. I was in charge of building a kick ass
					administration dashboard in <em>React</em>, along with a
					cross-platform companion app with <em>React Native</em>. Unfortunately
					it didn't work out in the end, mainly do to businessy stuff.
				</p>
				<p>
					I've also co-founded{' '}
					<a href="https://unihelpr.dk" target="_blank">
						UniHelpr
					</a>
					, a SaaS that matches university students into groups, in an effort to
					give them a better start on their journey. I'm building all the
					integrations and infrastructure that is surrounding the matching
					algorithm, using <em>Node.js</em>. It's quite successful actually.
				</p>
				<p>
					I want to build products and services that have a <em>positive</em>{' '}
					impact on the environmental and societal issues we are facing during
					the coming decades.
				</p>
			</div>
		);
	};

	renderLongBio = () => {
		return (
			<div className={twoColumn}>
				<p>
					For as long as I can remember, I've <em>loved</em> working with
					computers. When I was 11 years old I wanted to learn programming, so I
					grabbed my sister's university-level C++ book and started coding. As I
					reached the concept of <em>classes</em>, I thought to myself:
				</p>
				<blockquote>
					<i>
						Oh no, I have no idea what's going on here, I'm not smart enough for
						this programming thing.
					</i>
				</blockquote>
				<p>
					10 years later, in 2015, when I had gotten bored in the army, and
					started my Computer Science degree, I realised that I actually{' '}
					<em>was</em> smart enough, C++ just wasn't the best language to learn
					as a 11 year old newbie. 🤷‍♂️
				</p>
				<p>
					I also realised that there was something called{' '}
					<em>Interaction Design/UX/Product Design</em>, and that I'd always had
					a passion for it, I just didn't knew it was a thing. I always thought
					the voice in my head was generally annoyed by the world, when in fact
					all it did was keep pointing out all the mistakes designers had made
					in the environment around me.
				</p>
				<p>
					During my third year at university, I co-founded{' '}
					<a href="https://bambuu.dk" target="_blank">
						bambuu
					</a>{' '}
					with my two buddies{' '}
					<a href="https://twitter.com/GeeWengel" target="_blank">
						Gustav
					</a>{' '}
					and{' '}
					<a
						href="https://www.linkedin.com/in/silas-roswall-0a2a587a"
						target="_blank"
					>
						Silas
					</a>
					, a digital agency doing web development and design for larger
					corporations that were stuck in their old ways. I was the project
					manager and <em>main frontend developer</em>, but had my fair share of
					ventures into <em>Node.js and Java backends</em>. We had <em>fun</em>{' '}
					and we learned <em>a lot</em>, but in the end the consulting business
					wasn't that exciting.
				</p>
				<p>
					Instead, we moved on an founded{' '}
					<a href="https://reccoon.dk" target="_blank">
						Reccoon
					</a>
					, a SaaS with the missions of making waste management more
					environmental friendly. It was a great adventure building our own
					product from scratch. I was in charge of building a kick ass
					administration dashboard in <em>React</em>, along with a
					cross-platform companion app with <em>React Native</em>. We also did
					some consulting on the side, where I built backends in{' '}
					<em>Node.js</em>, while my colleague built the frontend. Unfortunately
					Reccoon didn't work out in the end, mainly do to businessy stuff, and
					us being a little to eager to build cool stuff, instead of actually
					looking at the market's needs.
				</p>
				<p>
					I've also co-founded{' '}
					<a href="https://unihelpr.dk" target="_blank">
						UniHelpr
					</a>
					, a SaaS that matches university students into groups, in an effort to
					give them a better start on their journey. I'm building all the
					integrations (with services such as Google Sheets and TypeForm), and
					infrastructure (it's a Node.js CLI) that is surrounding the matching
					algorithm. It's quite successful actually, and both the universities
					and the students love it.
				</p>
				<p>
					I want to build products and services that have a <em>positive</em>{' '}
					impact on the environmental and societal issues we are facing during
					the coming decades.
				</p>
				<p>
					I've become very aware of my actions and the consequences they have on
					my surroundings. I love the beauty of nature, and I want to spend as
					much of my energy as possible on making sure we preserve that beauty
					for future generations.
				</p>
				<p>
					It isn't about the earth, it <em>will</em> endure no matter what we do
					to it. It's about my future children, grandchildren, and
					great-grandchildren. It's about making sure that <em>they</em> get to
					experience the same beautiful nature that I do.
				</p>
			</div>
		);
	};

	render() {
		const isLong = this.state.longVersion;

		return (
			<section className={section}>
				<SectionHeader>
					🙋🏻‍♂️ Who I am,{' '}
					<a className={bioLengthLink} onClick={this.handleBioLength}>
						the {isLong ? 'long' : 'short'} version
					</a>
				</SectionHeader>
				{isLong ? this.renderLongBio() : this.renderShortBio()}
				<hr className={divider} />
				<SectionHeader>🗣 Who I am, in your words</SectionHeader>
				<div className={twoColumn}>
					<p>
						I could write pages and pages about myself, but that would be
						useless. True value comes in interaction with other people,
						likeminded or not. So, who do <em>you</em> think that I am? What
						defines me, from your perspective?
					</p>
					<p>
						Let’s do an exercise. On the paper below, write the first thing that
						comes to mind when you think of me. I’ve written a little something
						to get you started, just don’t get caried away with flattery. ❤️
					</p>
				</div>
				<WriteMyBio />
			</section>
		);
	}
}

const bioLengthLink = css({
	cursor: 'pointer',
	color: colors.accent,
	userSelect: 'none',
});

const divider = css({
	height: '2px',
	background: `linear-gradient(to right, ${colors.accent}00, ${colors.accent}, ${colors.accent}00)`, //00 means zero alpha
	border: 'none',
	margin: '2em',
});

const twoColumn = css({
	columnCount: 2,
	columnWidth: '23em',
	'& > p': {
		marginTop: 0,
	},
});
