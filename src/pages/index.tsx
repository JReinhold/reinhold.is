import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from 'emotion';
import { WelcomeSection } from '../components/welcome-section';
import { section, injectGlobalStyles, sectionHeader, indexContainer } from '../styles';
import { BioSection } from '../components/bio-section';

injectGlobalStyles();

export default () => {
	return (
		<div className={indexContainer}>
			<WelcomeSection />
			<BioSection/>
			<BioSection/>
			<BioSection/>
			<BioSection/>
		</div>
	);
};
