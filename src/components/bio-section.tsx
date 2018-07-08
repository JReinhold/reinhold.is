import React from 'react';
import { sectionHeader, section, colors } from '../styles';
import { css } from 'emotion';

export const BioSection: React.SFC = () => (
	<section className={section}>
		<div>
			<h1 className={sectionHeader}>Who I am</h1>
			<div className={twoColumn}>
				<p>
					For as long as I can remember, I've loved working with computers. When
					I was 11 years old I wanted to learn programming, so I grabbed my
					sister's university-level C++ book and started coding. As I reached
					the concept of <em>classes</em>, I thought to myself:
					<blockquote>
						Oh no, I have no idea what's going on here, I'm not smart enough for
						this programming shit.
					</blockquote>
				</p>
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
					the voice in my head that was annoyed by the world, when in fact all
					it did was keep pointing out all the mistakes designers had made in
					the environment around me.
				</p>
				<p>
					During my third year at university, I founded{' '}
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
					</a>, a digital agency doing web development and design for larger
					corporations that were stuck in their old ways. We had fun and we learned alot, but now we
					are looking forward to new adventures.
				</p>
				<p>
					I've become very aware of my actions and the consequences they have on
					my surroundings. I love the beauty of nature, and I want to spend all
					my energy and skill on making sure we preserve that beauty for future
					generations.
				</p>
				<p>
					It isn't about the earth, it will endure no matter what we do to it.
					It's about my future children, grandchildren, and great-grandchildren.
					It's about making sure that <em>they</em> get to experience the same
					beautiful nature that I do.
				</p>
			</div>
			<hr className={divider} />
			<h1 className={sectionHeader}>Who I am, according to you</h1>
			<div className={twoColumn}>
				<p>
					I could write pages and pages about myself, but that would be useless.
					True value comes in interaction with other people, likeminded or not.
					So, what do <em>you</em> think that I am? What defines me, from your
					perspective?
				</p>
				<p>
					Let’s do an exercise. On the paper below, write the first thing that
					comes to mind when you think of me. I’ve written a little something to
					get you started, just don’t get caried away with flattery.
				</p>
			</div>
		</div>
	</section>
);

const divider = css({
	height: '2px',
	background: `linear-gradient(to right, ${colors.accent}00, ${colors.accent}, ${colors.accent}00)`, //00 means zero alpha
	border: 'none',
	margin: '2em',
});

const twoColumn = css({
	columnCount: 2,
	columnWidth: '25em',
});
