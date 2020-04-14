import React from 'react';
import { observer } from "mobx-react";

import EventModel from '../../../stores/Models/EventModel';
import {
    EachEvent,
    EventDetails,
    EventName,
    EventLocation,
    AddEventButtons,
    EditButton,
    DeleteButton,
    UpdateButton
} from './styledComponents';

type eachEventProps = {
    eachEvent:EventModel
}
@observer class Event extends React.Component<eachEventProps> {

    render() {
        return(
            <EachEvent>
                    <EventDetails>
                        <EventName type='text' placeholder='Event name' 
                            value={this.props.eachEvent.name}>
                        </EventName>
                        <EventLocation type='text' placeholder='Event Location'
                            value={this.props.eachEvent.location}>
                        </EventLocation>
                    </EventDetails>
                    <AddEventButtons>
                        <EditButton type='reset'>Edit</EditButton>
                        <DeleteButton type='reset'>Delete</DeleteButton>
                        <UpdateButton type='reset'>Update</UpdateButton>
                    </AddEventButtons>
            </EachEvent>
        )
    }
}

export default Event;