import { observable, action, computed } from 'mobx';

import EventModel from '../Models/EventModel';

class EventStore {

    @observable events : Array<EventModel> = [];
    
    @action.bound
    onAddEvent(eventName:String,eventLocation:String) {
        let addingEachEvent = {
            id: Math.floor(Math.random() * 10000),
            name: eventName,
            location: eventLocation
        };
        const eventObject =new EventModel(addingEachEvent)
        this.events.push(eventObject);
    }
 
    @action.bound   
    onDeleteEvent(id : Number) {
        alert(id);
    }

    @computed get noOfEvents() {
        return this.events.length;
    }
}

const eventStores  = new EventStore();
export{eventStores,EventStore};