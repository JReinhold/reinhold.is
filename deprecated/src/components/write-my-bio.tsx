import React, { MouseEventHandler } from 'react';
import { css } from 'emotion';
import { globalFontFamily, breakpoints, colors } from '../styles';

interface WriteMyBioState {
	text: string;
	lastTextLength: number;
	sendButtonText: 'Send' | 'Sending...' | 'Sent, Thanks!';
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
Sincerely yours, `;

export class WriteMyBio extends React.PureComponent<{}, WriteMyBioState> {
	readonly state = {
		text: predefinedText.substr(0, 38), //... think you are
		lastTextLength: 38,
		sendButtonText: 'Send' as 'Send',
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

	handlePaperClick: MouseEventHandler<HTMLDivElement> = (e) => {
		this.textAreaRef.current && this.textAreaRef.current.focus();
	};

	handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		e.preventDefault();
		const textArea = e.currentTarget;
		const prevLength =
			(textArea.textContent && textArea.textContent.length) || 0;
		const nextLength = textArea.value.length;

		const isWritingNameAtEnd = nextLength > predefinedText.length;
		const isNotEditingPredefinedText =
			textArea.value.substr(0, predefinedText.length) === predefinedText;

		if (isWritingNameAtEnd && isNotEditingPredefinedText) {
			this.setState({ text: textArea.value });
			return;
		}

		const inputLength = this.fixEmojis(nextLength, prevLength);
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
	};

	finishMessage = () => {
		this.setState({ sendButtonText: 'Sending...' });
		console.log('sending', this.state.text);
		setTimeout(() => this.setState({ sendButtonText: 'Sent, Thanks!' }), 2000);
	};

	render() {
		const { sendButtonText, text } = this.state;
		const disableArea = sendButtonText !== 'Send';
		const disableSend = disableArea || text.length < predefinedText.length + 1;

		return (
			<div className={container}>
				<div className={paper} onClick={this.handlePaperClick}>
					<textarea
						className={textArea}
						value={this.state.text}
						onChange={this.handleInputChange}
						ref={this.textAreaRef}
						disabled={disableArea}
					/>
					<button
						onClick={this.finishMessage}
						className={sendButton}
						disabled={disableSend}
					>
						{sendButtonText}
					</button>
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
	cursor: 'text',
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
	padding: `${
		HEADER_HEIGHT + 8
	}px ${TEXT_SIDE_PADDING}% 0 ${TEXT_SIDE_PADDING}%`,
	width: `calc(100% - ${LEFT_PAD_WIDTH}% - ${TEXT_SIDE_PADDING}% - ${TEXT_SIDE_PADDING}%)`,
	minHeight: '500px',
	'&:focus': {
		outline: 'none',
	},
});

const sendButton = css({
	position: 'absolute',
	right: 0,
	bottom: 0,
	margin: '1em',
	background: colors.accent,
	color: 'white',
	border: 'none',
	fontFamily: globalFontFamily,
	fontSize: '1.5em',
	'&:disabled': {
		background: 'lightgrey',
	},
});
