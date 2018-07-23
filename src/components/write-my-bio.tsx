import React from 'react';
import { css } from '../../node_modules/emotion';
import { globalFontFamily, breakpoints } from '../styles';
import styled from 'react-emotion';

interface WriteMyBioState {
	text: string;
	textAreaHeight: string;
}

export class WriteMyBio extends React.PureComponent<void, WriteMyBioState> {
	readonly state = {
		text: `Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer. Sætningen blev gjordt kendt i 1960'erne med lanceringen af Letraset-ark, som indeholdt afsnit med Lorem Ipsum, og senere med layoutprogrammer som Aldus PageMaker, som også indeholdt en udgave af Lorem Ipsum.`,
		textAreaHeight: '5px',
	};

	textAreaRef = React.createRef<HTMLTextAreaElement>(); //to get the height of the textarea at mount time

	componentDidMount() {
		const textArea = this.textAreaRef.current;
		if (!textArea) {
			return; //should not happen in componentDidMount
		}
		this.fitTextArea(textArea);
	}

	fitTextArea = (textAreaElement: HTMLTextAreaElement) => {
		// make area small to get valid scrollHeight
		textAreaElement.style.height = '5px';
		// set height to the height of content, even the hiddden content
		textAreaElement.style.height = textAreaElement.scrollHeight + 'px';
	};

	handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
		e.preventDefault();
		const textArea = e.currentTarget;
		this.setState({ text: textArea.value });
		this.fitTextArea(textArea);
	};

	render() {
		return (
			<div className={container}>
				<div className={paper}>
					<textarea
						className={textArea}
						value={this.state.text}
						onChange={this.handleInputChange}
						ref={this.textAreaRef}
					/>
				</div>
			</div>
		);
	}
}

const HEADER_HEIGHT = 65; //px
const LINE_HEIGHT = 30; //px
const LEFT_PAD_WIDTH = 10; //%
const TEXT_SIDE_PADDING = 1; //%

const container = css({
	label: 'paperContainer',
	display: 'flex',
	justifyContent: 'center',
	position: 'relative',
	zIndex: 1
});

const paper = css({
	label: 'paper',
	position: 'relative',
	width: '100%',
	maxWidth: '34em',
	[breakpoints.tabletLandscapeUp]: {
		width: '85%'
	},
	boxShadow: '0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)', //shadow around paper
	border: '1px solid #b5b5b577', //slight border around paper, to "make it pop"
	background: `
	linear-gradient(white, white) 0 0 / 100% ${HEADER_HEIGHT}px no-repeat,
	linear-gradient(#dfe8ec 0%, white 8%) 0 ${HEADER_HEIGHT}px / 100% ${LINE_HEIGHT}px
	`, //top whitespace, followed by repeating blue lines
	'&:before, :after': {
		//create shadows at the bottom of paper
		position: 'absolute',
		zIndex: -1,
		content: '""',
		width: '40%',
		height: '10px',
		left: '12px',
		bottom: 0,
		transform: 'skew(-5deg) rotate(-5deg)',
		transformOrigin: 'bottom left',
		background: 'transparent',
		boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
	},
	'&:after': {
		left: 'auto',
		right: '12px',
		transformOrigin: 'bottom right',
		transform: 'skew(5deg) rotate(5deg)',
	}
});

const textArea = css({
	label: 'textarea',
	fontFamily: globalFontFamily,
	fontSize: '1em',
	lineHeight: LINE_HEIGHT + 'px',
	border: 'none',
	borderLeft: 'solid 1px #f8d3d3',
	background: 'none',
	resize: 'none',
	overflow: 'hidden',
	margin: `0 0 -4px ${LEFT_PAD_WIDTH}%`,
	padding: `${HEADER_HEIGHT + 8}px ${TEXT_SIDE_PADDING}% 0 ${TEXT_SIDE_PADDING}%`,
	width: `calc(100% - ${LEFT_PAD_WIDTH}% - ${TEXT_SIDE_PADDING}% - ${TEXT_SIDE_PADDING}%)`,
	minHeight: '500px',
	'&:focus': {
		outline: 'none',
	},
});
