import React, { Component } from 'react'
import { observer } from "mobx-react"

import gridGameStore from '../../../stores/GridGameStore/index'
import levels from '../../../stores/levels.json'
import Header from '../Header/index'
import GameField from '../GameField/index'
import GameResult from '../GameResult/index'

import { Wrapper } from './styleComponent'

@observer
class GridMemoryGame extends Component {

  componentDidMount() {
    gridGameStore.setGridCells()
  }

  render() { 
    let { selectedTheme, onChangeTheme } = this.props
    let gridWidth = levels[gridGameStore.level].gridWidth
    return ( 
      <Wrapper theme={selectedTheme}>
        <Header width = { gridWidth } onChangeTheme = { onChangeTheme } 
          level = { gridGameStore.level } selectedTheme = { selectedTheme } 
          topLevel = { gridGameStore.topLevel }/>
        {gridGameStore.isGameCompleted === false ?
          <GameField width = { gridWidth } level = {gridGameStore.level}
            gridCellsArray = {gridGameStore.currentLevelGridCells}
            onCellClick = {gridGameStore.onCellClick} /> :
          <GameResult onPlayAgainClick={gridGameStore.playAgain}/>}
      </Wrapper>
    );
  }
}
 
export default GridMemoryGame;