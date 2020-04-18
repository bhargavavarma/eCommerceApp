import React, { Component } from 'react';

import levels from '../../../stores/levels.json'
import gridGameStore from '../../../stores/GridGameStore/index'
import {Hidden,Visible} from './styleComponent'
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class Cell extends Component {
    
    @observable shouldShowHiddenCells =  true

    componentDidMount() {
        this.timeOutId = setTimeout(() => this.shouldShowHiddenCells = false, (1000*gridGameStore.level + 3000));
    }

    onCellClick = (event) => {
        event.target.disabled = 'true'
        {this.props.eachCell.isHidden === true ? event.target.style.backgroundColor = '#90cdf4' : event.target.style.backgroundColor = 'red'}
        this.props.onCellClick(this.props.eachCell.isHidden)
    }
    render() { 
        const {eachCell,level} = this.props
            if(this.shouldShowHiddenCells) {
                if(eachCell.isHidden) {
                    return <Hidden style={{width:`${levels[level].cellWidth}px`,height:`${levels[level].cellWidth}px`}} 
                    id={eachCell.id} eachCell={eachCell}>
                    </Hidden>
                } else {
                    return <Visible style={{width:`${levels[level].cellWidth}px`,height:`${levels[level].cellWidth}px`}} 
                                    id={eachCell.id} eachCell={eachCell}>
                            </Visible>
                }
            }
            else {
                return <Visible style={{width:`${levels[level].cellWidth}px`,height:`${levels[level].cellWidth}px`}} 
                                id={eachCell.id} onClick={this.onCellClick} eachCell={eachCell}
                                shouldShowHiddenCells={this.shouldShowHiddenCells}>
                        </Visible>
            }
        }
}
 
export default Cell;