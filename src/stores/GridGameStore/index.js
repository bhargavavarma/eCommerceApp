import { observable, action } from 'mobx';
import { observer } from "mobx-react";
import Cell from '../Models/Cell';

@observer
class GridGameStore {

    @observable level = 0
    @observable topLevel = 0
    @observable currentLevelGridCells = []
    @observable selectedCellsCount = 0
    @observable isGameCompleted = false

    @action.bound
    onCellClick(id) {
        if(id === currentLevelGridCells.id && currentLevelGridCells.isHidden === true) {
            this.selectedCellsCount + 1
            if(this.selectedCellsCount === this.level + 3) {
                goToNextLevelAndUpdateCells()
            }
        }
        else {
            resetGame()
        }
    }

    @action.bound
    setGridCells() {
        let rows_count = this.level + 3
        let column_count = this.level + 3
        let addingEachGridItem
        for (let i = rows_count * column_count; i >0 ; --i) {
            addingEachGridItem = {
                id: Math.floor(Math.random() * 10000),
                isHidden : false
            }
            const eachGridObject =new Cell(addingEachGridItem)
            this.currentLevelGridCells.push(eachGridObject)
        }
        console.log(currentLevelGridCells)
    }

    @action.bound
    goToNextLevelAndUpdateCells() {
        this.level += 1
        currentLevelGridCells = []
        setGridCells()
    }

    @action.bound
    goToInitialLevelAndUpdateCells() {
        this.level = 0
        resetSelectedCellsCount()
        currentLevelGridCells = []
        setGridCells()
    }

    @action.bound
    resetSelectedCellsCount() {
        this.selectedCellsCount = 0
    }

    @action.bound
    incrementSelectedCellsCount() {
        this.selectedCellsCount += 1
    }

    @action.bound
    onPlayAgainClick() {
        if(level > this.topLevel)
            setTopLevel()
        goToInitialLevelAndUpdateCells()
    }

    @action.bound
    resetGame() {
        goToInitialLevelAndUpdateCells()
    }

    @action.bound
    setTopLevel() {
        this.topLevel = level
    }
}

const gridGameStore = new GridGameStore();
export default gridGameStore;
