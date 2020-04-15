import React, { Component } from 'react';
import Header from '../Header/index'

class GridMemoryGame extends Component {
    
    render() { 
        return ( 
            <div>
                <Header onChangeTheme = { onChangeTheme } level = { level }
                        selectedTheme = { selectedTheme } topLevel = {topLevel} />
            </div>
         );
    }
}
 
export default GridMemoryGame;