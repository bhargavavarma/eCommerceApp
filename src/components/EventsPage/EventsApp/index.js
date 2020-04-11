import React from 'react';

import EventStores from '../../../stores/EventStore/index.js';

import {
    Wrapper,
    EventTitle,
    AddEvent,
    EventDetails,
    EventName,
    EventLocation,
    AddEventButton,
    RenderingEventsList,
    NumberOfEvents,
    EventsList,
    NoEvents
} from './styledComponents';

import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import Event from '../Event/index';

@observer class EventApp extends React.Component {

    @observable eventName;

    @observable EventLocation;

    constructor() {
        super();
        this.eventName = '';
        this.eventLocation = '';
    }

    @action.bound
    onAddEvent(event) {    
        EventStores.onAddEvent(this.eventName,this.eventLocation);
    }

    @action.bound
    onChangeEventName(event) {
        this.eventName = event.target.value;
    }

    @action.bound
    onChangeEventLocation(event) {
        this.eventLocation = event.target.value;
    }

    render() {
        return (
            <Wrapper>
               <EventTitle>Events List</EventTitle>
               <form className="w-10/12">
                    <AddEvent>
                        <EventDetails>
                            <EventName type='text' placeholder='Event name' 
                                onChange={this.onChangeEventName}>
                            </EventName>
                            <EventLocation type='text' placeholder='Event Location'
                                onChange={this.onChangeEventLocation}>
                            </EventLocation>
                        </EventDetails>
                        <AddEventButton type='reset' onClick={this.onAddEvent}>Add Event</AddEventButton>
                    </AddEvent>
               </form>
               <RenderingEventsList>
                   {EventStores.noOfEvents != 0 ?
                    <EventsList>
                    <NumberOfEvents>Number of Events: {EventStores.noOfEvents}</NumberOfEvents>
                    {EventStores.events.map(item=><Event key={item.id} eachEvent={item} 
                            onDeleteEvent={EventStores.onDeleteEvent}/>
                    )}</EventsList>:<NoEvents>No Events...</NoEvents>}
               </RenderingEventsList>
            </Wrapper>
        );
    }
}

export default EventApp;
