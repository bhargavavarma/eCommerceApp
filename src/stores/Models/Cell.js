import { observable } from 'mobx';
import {observer} from 'mobx-react';

@observer
class Cell {
    id
    @observable isHidden;

    constructor(gridObject) {
        super(gridObject)
        this.id = gridObject.id
        this.isHidden = gridObject.isHidden
    }
}

export default Cell;