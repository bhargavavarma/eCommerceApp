import React from 'react';

import {
    EachEmojiCard,
    Emoji,
    EmojiName
}
from './Css';

class EmojiCard extends React.Component {

    onEmojiClick = (event) => {
        this.props.onEmojiClick(this.props.emoji.id)
    }

    render() {
        return (
            <EachEmojiCard onClick={this.onEmojiClick}
                        theme={this.props.selectedTheme}>
                <Emoji src={this.props.emoji.image} alt=""></Emoji>
                <EmojiName>{this.props.emoji.name}</EmojiName>
            </EachEmojiCard>
        );
    }
}

export { EmojiCard };
