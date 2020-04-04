import React from 'react';

import { NavBar } from './Navbar.js';
import { EmojiCard } from './EmojiCard.js';
import { WinOrLose } from './WinOrLose.js';

import { Wrapper, EmojiBody } from './Css';

class EmojiGameDashboardApp extends React.Component {

    state = {
        emojis: [{
                id: 0,
                isClicked: false,
                name: 'Exploding Head',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png`
            },
            {
                id: 1,
                isClicked: false,
                name: 'Grinning Face with Sweat',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png`
            },
            {
                id: 2,
                isClicked: false,
                name: 'Smiling Face with Heart-Eyes',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png`
            },
            {
                id: 3,
                isClicked: false,
                name: 'Smirking Face',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png`
            },
            {
                id: 4,
                isClicked: false,
                name: 'Thinking Face',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png`
            },
            {
                id: 5,
                isClicked: false,
                name: 'Winking Face',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png`
            },
            {
                id: 6,
                isClicked: false,
                name: 'Grinning Face',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png`
            },
            {
                id: 7,
                isClicked: false,
                name: 'Crying Face',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png`
            },
            {
                id: 8,
                isClicked: false,
                name: 'Astonished Face',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png`
            },
            {
                id: 9,
                isClicked: false,
                name: 'Face with Tears of Joy',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png`
            },
            {
                id: 10,
                isClicked: false,
                name: 'Star-Struck',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png`
            },
            {
                id: 11,
                isClicked: false,
                name: 'Winking Face with Tongue',
                image: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png`
            }


        ],
        score: 0,
        topScore: 0,
        gameState: 'PLAYING'
    }

    onEmojiClick = (id) => {
        this.shuffleEmojis();
        this.incrementScore(id);
    }

    shuffleEmojis = () => {
        let emojis = this.state.emojis;
        let currentIndex = emojis.length - 1;
        let temporaryValue = null;
        let randomIndex = null;

        for (; currentIndex >= 0; currentIndex--) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            temporaryValue = emojis[currentIndex];
            emojis[currentIndex] = emojis[randomIndex];
            emojis[randomIndex] = temporaryValue;
        }
        this.setState({ emojis: emojis });
    }

    incrementScore = (id) => {
        this.state.emojis.forEach(element => {
            if (id === element.id && element.isClicked === false) {
                element.isClicked = true;
                this.setState({ isClicked: false, score: this.state.score + 1 });
            }
            else if (id === element.id && element.isClicked === true) {
                this.setState({ gameState: 'hi' });
                this.state.emojis.forEach(element => element.isClicked = false);
            }
        });
    }

    onPlayAgainClick = () => {
        this.setTopScore(this.state.score);
        this.setState({ gameState: 'PLAYING', score: 0 });
    }

    resetGame = () => {

    }

    setTopScore = (score) => {
        if (this.state.score > this.state.topScore)
            this.setState({ topScore: score });
    }

    id = 0;

    render() {

        return (
            <Wrapper theme = { this.props.selectedTheme }>
                <NavBar onChangeTheme = { this.props.onChangeTheme }
                        selectedTheme = { this.props.selectedTheme }
                        score = {this.state.score}
                        topScore = {this.state.topScore} />        
                <EmojiBody>
                    {this.state.gameState === 'PLAYING' ?
                            this.state.emojis.map(eachEmoji => {
                                this.id += 1;
                                return <EmojiCard emoji={eachEmoji} key={this.id}
                                    onEmojiClick={this.onEmojiClick}
                                    selectedTheme={this.props.selectedTheme}/>;
                    }):
                    <WinOrLose score={this.state.score} onPlayAgainClick={this.onPlayAgainClick}
                            />}
                </EmojiBody>
            </Wrapper>
        );
    }
}

export { EmojiGameDashboardApp };
