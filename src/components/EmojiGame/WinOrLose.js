import React from 'react';

class WinOrLose extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.score}</p>
                {this.props.score == 12?<p>You Win</p>:<p>You Win</p>}
                <button onClick={this.props.onPlayAgainClick}>Play Again</button>
            </div>
        );
    }
}

export { WinOrLose };
