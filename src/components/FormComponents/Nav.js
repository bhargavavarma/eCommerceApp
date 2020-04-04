import React from 'react';
import { withRouter } from 'react-router-dom';

class NavBar extends React.Component {
    navigate = () => {
        const { history } = this.props;
        history.goBack();
    }
    render() {
        return (
            <div>
                <button onClick={this.navigate}>Goback</button>
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default withRouter(NavBar);
