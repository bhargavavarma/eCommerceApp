import React from 'react';
import { observable, action, computed } from 'mobx';
import {observer} from 'mobx-react';

import EventModel from '../Models/EventModel';

@observer
class EventStore extends React.Component {

    @observable events;

    constructor() {
        super();
        this.events = [];
    }

    @action.bound
    onAddEvent(eventName,eventLocation) {
        let addingEachEvent = {
            id: Math.floor(Math.random() * 10000),
            name: eventName,
            location: eventLocation
        };
        const eventObject =new EventModel(addingEachEvent)
        this.events.push(eventObject);
    }
 
    @action.bound
    onDeleteEvent(id) {
        alert(1);
    }

    @computed get noOfEvents() {
        return this.events.length;
    }
}

const EventStores  = new EventStore ();
export default EventStores;