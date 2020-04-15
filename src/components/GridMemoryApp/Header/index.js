import React from 'react';

class Header extends React.PureComponent {

    render() {
        let { level, topLevel, onChangeTheme, selectedTheme } = this.props;

        return (
            <div>
                <div>
                    <div>Top Level:{topLevel}</div>
                    <div>Level:{level}</div>
                    <button onClick={onChangeTheme} theme={selectedTheme}>
                        {selectedTheme.displayText}
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;
