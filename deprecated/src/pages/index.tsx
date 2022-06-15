import React from 'react';
import { HeroSection } from '../index-sections/hero-section';
import { injectGlobalStyles, indexContainer } from '../styles';
import { BioSection } from '../index-sections/bio-section';
import { WritingSection } from '../index-sections/writing-section';
import { WIPSection } from '../index-sections/wip-section';

injectGlobalStyles();

export default () => {
	return (
		<div className={indexContainer}>
			<HeroSection />
			<BioSection />
			<WritingSection />
			<WIPSection />
		</div>
	);
};
