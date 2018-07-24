import React from 'react';
import { css } from '../../node_modules/emotion';
import { globalFontFamily, breakpoints } from '../styles';

interface WriteMyBioState {
	text: string;
	lastTextLength: number;
}

const predefinedText = `Dear Jeppe,

I actually think you are a pretty nice guy. I'm regularly amazed by your amount of creativity and the stuff you can come up with.
You have a knack for trying weird stuff out, and see how it goes. It doesn't always end in a good way, but you manage to keep trying anyway, and that's what I admire the most about you!

Things I like about you: 👍
- You always make people around you smile 😊
- You are firm in your beliefs, but also open to hear the ideas of others 

Things I don't like about you: 👎
- You are better than me at most things 😒
- Sometimes you THINK you know what I'm thinking, when you actually get it all wrong 😤

But it doesn't matter, cuz I still think you're awesome! 💪
Sincerely yours, `


export class WriteMyBio extends React.PureComponent<void, WriteMyBioState> {
	readonly state = {
		text: predefinedText.substr(0,38), //... think you are 
		lastTextLength: 38
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
		const previousLength = textArea.textLength;
		const nextLength = textArea.value.length;
		const inputLength = this.fixEmojis(nextLength, previousLength);
		this.setState({ text: predefinedText.substr(0, inputLength) });
		this.fitTextArea(textArea);
	};

	fixEmojis = (nextLength: number, previousLength: number) => {
		let change = 0;
		const unicode = predefinedText.charCodeAt(nextLength - 1);

		//if an emoji, add an extra skip
		change = unicode > 1000 ? 1 : 0;

		//if we are deleting a character, reverse change "direction"
		change *= nextLength < previousLength ? -1 : 1;
		return nextLength + change;
	}

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
	zIndex: 1,
});

const paper = css({
	label: 'paper',
	position: 'relative',
	width: '100%',
	maxWidth: '34em',
	[breakpoints.tabletLandscapeUp]: {
		width: '85%',
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
	},
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
	padding: `${HEADER_HEIGHT +
		8}px ${TEXT_SIDE_PADDING}% 0 ${TEXT_SIDE_PADDING}%`,
	width: `calc(100% - ${LEFT_PAD_WIDTH}% - ${TEXT_SIDE_PADDING}% - ${TEXT_SIDE_PADDING}%)`,
	minHeight: '500px',
	'&:focus': {
		outline: 'none',
	},
});
