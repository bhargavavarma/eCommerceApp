import React from 'react';

import {
    PlayAgainButton,
    GameCompleted,
    TopLevel,
    Greetings
}
from './styledComponent';

class GameResult extends React.Component {

    render() {
        let { onPlayAgainClick } = this.props;
        return (
                <GameCompleted>
                    <TopLevel>7</TopLevel>
                    <Greetings>Congratulations! You completed all the levels.</Greetings>
                    <PlayAgainButton onClick={onPlayAgainClick}>Play Again</PlayAgainButton>
                </GameCompleted>
        );
    }
}

export default GameResult;
