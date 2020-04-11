import { observer } from "mobx-react";
import React from 'react';

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

@observer class Event extends React.Component {

    render() {
        return(
            <EachEvent>
                    <EventDetails>
                        <EventName type='text' placeholder='Event name' 
                            onChange={this.onChangeEventName} value={this.props.eachEvent.name}>
                        </EventName>
                        <EventLocation type='text' placeholder='Event Location'
                            onChange={this.onChangeEventLocation} value={this.props.eachEvent.location}>
                        </EventLocation>
                    </EventDetails>
                    <AddEventButtons>
                        <EditButton type='reset' onClick={this.onEditEvent}>Edit</EditButton>
                        <DeleteButton type='reset' onClick={this.onDeleteEvent}>Delete</DeleteButton>
                        <UpdateButton type='reset' onClick={this.onUpdateEvent}>Update</UpdateButton>
                    </AddEventButtons>
            </EachEvent>
        )
    }
}

export default Event;