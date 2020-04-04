import React from 'react';

import {
    PageContainer,
    ScoreList,
    Score,
    Button
}
from './Css';

class NavBar extends React.PureComponent {

    render() {
        let { score, topScore } = this.props;

        return (
            <PageContainer>
                <p>Emoji Game</p>
                <ScoreList>
                    <Score>Score: {score}</Score>
                    <Score>Top Score: {topScore}</Score>
                    <Button onClick={this.props.onChangeTheme} theme={this.props.selectedTheme}>
                        {this.props.selectedTheme.displayText}
                    </Button>
                </ScoreList>
            </PageContainer>
        );
    }
}

export { NavBar };
