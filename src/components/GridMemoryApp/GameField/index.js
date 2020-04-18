import React, { Component } from 'react'
import { observer } from "mobx-react"

import Cell from '../Cell/index'
import { GridCells } from './styleComponent'

@observer
class GameField extends Component {

  render() {
  const {gridCellsArray, onCellClick, level, width} = this.props
    return ( 
      <GridCells width = { width }>
        {gridCellsArray.map(eachCell => 
          <Cell key={eachCell.id} eachCell={eachCell}
            onCellClick={onCellClick} level={level} />
        )}
      </GridCells>
    );
  }
}
 
export default GameField;