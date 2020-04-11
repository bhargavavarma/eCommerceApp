import React from 'react';

import { observer } from 'mobx-react';
import CarStores from '../../../stores/CarStore/index.js';

@observer class CarApp extends React.Component {

    render() {
        return (
            <div>
                <button onClick={CarStores.addCarToCarsList}>Add Car</button>
            </div>
        );
    }
}

export default CarApp;
