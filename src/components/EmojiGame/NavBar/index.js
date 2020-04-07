import React from 'react';

import {
    PageContainer,
    ScoreList,
    Score,
    Button,
    GameName
}
from './styledComponents';

class NavBar extends React.PureComponent {

    render() {
        let { score, topScore, onChangeTheme, selectedTheme } = this.props;

        return (
            <PageContainer>
                <GameName>Emoji Game</GameName>
                <ScoreList>
                    <Score>Score:{score}</Score>
                    <Score>Top Score:{topScore}</Score>
                    <Button onClick={onChangeTheme} theme={selectedTheme}>
                        {selectedTheme.displayText}
                    </Button>
                </ScoreList>
            </PageContainer>
        );
    }
}

export default NavBar;
