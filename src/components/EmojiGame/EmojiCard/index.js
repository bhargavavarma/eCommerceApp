import React from 'react';

import {
    EachEmojiCard,
    Emoji,
    EmojiName
}
from './styledComponents';

class EmojiCard extends React.PureComponent {

    onEmojiClick = () => {
        let { onEmojiClick, emoji } = this.props;
        onEmojiClick(emoji.id);
    }

    render() {
        let { selectedTheme, emoji } = this.props;
        return (
            <EachEmojiCard onClick={this.onEmojiClick}
                        theme={selectedTheme}>
                <Emoji src={emoji.image} alt=""></Emoji>
                <EmojiName>{emoji.name}</EmojiName>
            </EachEmojiCard>
        );
    }
}

export default EmojiCard;
