import React from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import Baffle from 'baffle-react';

// apply global styles
import '../global.css';

const BAFFLE_CONCEALED_DURATION = 3 * 1000;
const BAFFLE_REVEAL_DURATION = 2 * 1000;
const BAFFLE_SHOWN_DURATION = 5 * 1000;
const LATE_MESSAGES_SHOW = 60 * 1000;
const baffleFullInterval =
	BAFFLE_CONCEALED_DURATION + BAFFLE_REVEAL_DURATION + BAFFLE_SHOWN_DURATION;

let messages = [
	'reinhold.is/on-twitter-⬇',
	'reinhold.is/a-work-in-progress',
	'reinhold.is/experimenting-with-things',
	'reinhold.is/making-progress',
	'reinhold.is/not-done-yet',
	'reinhold.is/getting-there',
	'reinhold.is/making-stuff-happen',
];
const lateMessages = [
	'So, why are you still here?',
	'You can leave now, nothing more to see here',
	"There really isn't anything here yet",
	"Don't you have anything else to do?",
	"You've spent too much time here",
];

export default class IndexPage extends React.Component {
	constructor() {
		super();
		this.state = {
			conceal: true,
			message: this.nextMessage(messages[0]),
			shownProgress: 100,
		};
	}

	componentDidMount() {
		//initial revealing of message
		setTimeout(() => {
			this.setState({
				conceal: false,
			});
		}, 1000);

		//start baffle loop
		setInterval(this.baffleLoop, baffleFullInterval);
		
		//switch to late messages after time
		setTimeout(function () {
			messages = lateMessages;
		}, LATE_MESSAGES_SHOW)
	}

	//loop that does: concealing -> revealing -> showing
	baffleLoop = () => {
		//concealing
		this.setState({
			conceal: true,
			message: this.nextMessage(this.state.message),
		});

		//revealing
		setTimeout(() => {
			this.setState({
				conceal: false,
			});
		}, BAFFLE_CONCEALED_DURATION);
	};

	nextMessage = currentMessage => {
		//don't repick message already being displayed
		const withoutCurrent = [...messages];
		withoutCurrent.splice(withoutCurrent.indexOf(currentMessage), 1);
		//Randomly choose next message
		const message =
			withoutCurrent[Math.floor(Math.random() * withoutCurrent.length)];
		return message;
	};

	render() {
		return (
			<Centered>
				<span css={monospace}>
					<Baffle
						obfuscate={this.state.conceal}
						revealDuration={BAFFLE_REVEAL_DURATION}
					>
						{this.state.message}
					</Baffle>
				</span>
				<TwitterLink href="https://twitter.com/drreinhold">
					@DrReinhold
				</TwitterLink>
			</Centered>
		);
	}
}

const Centered = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const monospace = css`
	font-family: 'Lucida Console', Monaco, monospace;
`;

const TwitterLink = styled.a`
	${monospace};
	margin: 8px;
`;
