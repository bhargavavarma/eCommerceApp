import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import {eventStores} from '../../../stores/EventStore/index';
import EventModel from '../../../stores/Models/EventModel';
import Event from '../Event/index';

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

@observer class EventApp extends React.Component {

    @observable eventName : String;
    @observable eventLocation : String;

    constructor(props) {
        super(props);
        this.eventName = '';
        this.eventLocation = '';
    }

    @action.bound
    onAddEvent(event) {    
        eventStores.onAddEvent(this.eventName,this.eventLocation);
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
                   {eventStores.noOfEvents !== 0 ?
                    <EventsList>
                    <NumberOfEvents>Number of Events: {eventStores.noOfEvents}</NumberOfEvents>
                    {eventStores.events.map((item:EventModel)=>
                    <Event eachEvent={item} key={item.id}/>
                    )}</EventsList>:<NoEvents>No Events...</NoEvents>}
               </RenderingEventsList>
            </Wrapper>
        );
    }
}

export default EventApp;
