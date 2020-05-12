import React from 'react'

import {
  HeaderPart,
  HeaderItem,
  TopLevel,
  Level,
  Theme
} from './styleComponent'

class Header extends React.PureComponent {

  render() {
    let { level, topLevel, onChangeTheme, selectedTheme, width } = this.props;
    return (
      <HeaderPart width = { width }>
        <TopLevel>Top Level: {topLevel}</TopLevel>
        <HeaderItem>                               
          <Level>Level: {level}</Level>
          <Theme onClick={onChangeTheme} theme={selectedTheme}>
            {selectedTheme.displayText}
          </Theme>
        </HeaderItem>
      </HeaderPart>
    );
  }
}

export default Header;
