import React from 'react';

import {
    Win,
    PlayAgainButton,
    DisplayScore,
    DisplayGameState
}
from './styledComponents';

class WinOrLose extends React.Component {

    render() {
        let { score, gameState, onPlayAgainClick, selectedTheme } = this.props;
        return (
            <Win>
                <DisplayScore>{score}</DisplayScore>
                {alert(gameState)}
                <DisplayGameState gameState={gameState} theme={selectedTheme}>{gameState}</DisplayGameState>
                <PlayAgainButton onClick={onPlayAgainClick}>Play Again</PlayAgainButton>
            </Win>
        );
    }
}

export default WinOrLose;
