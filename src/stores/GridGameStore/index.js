import { observable, action } from 'mobx';
import Cell from '../Models/Cell';
import levels from '../levels.json'

let shuffle = require('shuffle-array')

class GridGameStore {

  @observable level = 0
  @observable topLevel = 0
  @observable currentLevelGridCells = []
  selectedCellsCount = 0
  @observable isGameCompleted = false
  
  @action.bound
  onCellClick(isCellHidden) {
    let gridSize = levels[this.level].gridSize
    if(isCellHidden) {
      this.incrementSelectedCellCount()
      if(this.selectedCellsCount === gridSize) {
        this.timer = setTimeout(() => {
        this.resetSelectedCellsCount()
        this.gotoNextLevelAndUpdateCells()
        this.currentLevelGridCells = []
      },300)}
    }
    else {
      clearTimeout(this.timer)
      setTimeout(() => {
      this.gotoInitialLevelAndUpdateCells()
      this.resetSelectedCellsCount()
      this.currentLevelGridCells = []
    }, 300)}
  }

  @action.bound
  incrementSelectedCellCount() {
    this.selectedCellsCount = this.selectedCellsCount + 1;
  }

  @action.bound
  setTimer() {
    clearTimeout(this.timeOutId)
    this.timeOutId = setTimeout(() => gridGameStore.resetGame(), 3000 * (gridGameStore.level + 3));
  }
  
  @action.bound
  resetSelectedCellsCount() {
    this.selectedCellsCount = 0;
  }
  
  @action.bound
  gotoNextLevelAndUpdateCells() {
    this.currentLevelGridCells = []
    setTimeout(() => {
      if(this.level === 6) {
        this.isGameCompleted = true
      } else {
          this.level = this.level + 1;
          this.setGridCells();
          this.resetSelectedCellsCount();
      }
    }, 200);
  }

  @action.bound
  gotoInitialLevelAndUpdateCells() {
    setTimeout(() => {
      this.resetGame();
    }, 200);
  }
  
  @action.bound
  resetGame() {
    this.currentLevelGridCells = []
    if (this.level > this.topLevel) {
      this.topLevel = this.level;
    }
    this.level = 0;
    this.setGridCells();
    this.resetSelectedCellsCount();
  }
  
  @action.bound
  playAgain() {
    this.isGameCompleted = false;
    this.resetGame();
  }

  @action.bound
  setGridCells() {
    this.setTimer()
    let gridSize = levels[this.level].gridSize
    let totalCells = Math.pow(levels[this.level].gridSize,2)
    for (let i = totalCells; i > 0 ; --i) {
      let addingEachGridItem = {
        id: Math.floor(Math.random() * 1000),
        isHidden : i <= gridSize ? true : false
      }
      const eachGridObject = new Cell(addingEachGridItem)
      this.currentLevelGridCells.push(eachGridObject)
    }
    shuffle(this.currentLevelGridCells)
  }
}

const gridGameStore = new GridGameStore();
export default gridGameStore;
