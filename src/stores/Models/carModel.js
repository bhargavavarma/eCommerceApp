import React from 'react';
import { observable } from 'mobx';
import {observer} from 'mobx-react';

@observer
class CarModel extends React.Component {
    
    @observable title;
    @observable isCompleted;

    constructor(carObject) {
        super();
        this.carNumber = carObject.carNumber;
    }
}

export default CarModel;