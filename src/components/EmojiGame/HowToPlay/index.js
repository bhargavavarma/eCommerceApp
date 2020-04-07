import React from 'react';

import { Footer, Title, P } from './styledComponents';

class HowToPlay extends React.Component {

    render() {
        return (
            <Footer>
                <Title>How to Play?</Title>
                <P>Get points by clicking on an image but don't click on any image more than once!</P>
            </Footer>
        );
    }
}

export default HowToPlay;
