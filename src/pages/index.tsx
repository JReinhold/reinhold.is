import React from 'react';
import { graphql } from 'gatsby';
import { HeroSection } from '../index-sections/hero-section';
import { injectGlobalStyles, indexContainer } from '../styles';
import { BioSection } from '../index-sections/bio-section';
import WritingSection from '../index-sections/writing-section';

injectGlobalStyles();

export default () => {
	return (
		<div className={indexContainer}>
			<HeroSection />
			<BioSection/>
			<WritingSection/>
		</div>
	);
};