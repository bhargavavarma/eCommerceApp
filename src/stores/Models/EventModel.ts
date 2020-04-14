import React from 'react';
import { observable, action } from 'mobx';
import {observer} from 'mobx-react';

@observer
class EventModel extends React.Component {
    id : number;
    
    @observable name:string;
    @observable location : string;

    constructor(eventObject) {
        super(eventObject);
        this.id = eventObject.id;
        this.name = eventObject.name;
        this.location = eventObject.location;
    }
 
    @action.bound
    onUpdateEventDetails(updatedDetails : string) {
        this.name = updatedDetails;
    }
}

export default EventModel;