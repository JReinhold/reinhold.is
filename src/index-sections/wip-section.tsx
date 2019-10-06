import React from 'react';
import { section, SectionSubHeader } from '../styles';

export const WIPSection: React.SFC = () => {
	return (
		<section className={section}>
			<SectionSubHeader>
				This site is a work in progress. It shouldn't end here, but currently it
				does. That's just how it is. 🤷‍♂️
			</SectionSubHeader>
		</section>
	);
};
