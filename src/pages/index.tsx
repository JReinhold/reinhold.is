import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from 'emotion';
import { HeroSection } from '../components/hero-section';
import { section, injectGlobalStyles, sectionHeader, indexContainer } from '../styles';
import { BioSection } from '../components/bio-section';

injectGlobalStyles();

export default () => {
	return (
		<div className={indexContainer}>
			<HeroSection />
			<BioSection/>
			<BioSection/>
			<BioSection/>
			<BioSection/>
		</div>
	);
};
