import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        id: 0,
        title: "Board meeting",
        start: new Date(2018, 0, 29, 9, 0, 0),
        end: new Date(2018, 0, 29, 13, 0, 0),
        resourceId: 1
    },
    {
        id: 1,
        title: "MS training",
        allDay: true,
        start: new Date(2018, 0, 29, 14, 0, 0),
        end: new Date(2018, 0, 29, 16, 30, 0),
        resourceId: 2
    },
    {
        id: 2,
        title: "Team lead meeting",
        start: new Date(2018, 0, 29, 8, 30, 0),
        end: new Date(2018, 0, 29, 12, 30, 0),
        resourceId: 3
    },
    {
        id: 3,
        title: "Birthday Party",
        start: new Date(2018, 0, 30, 7, 0, 0),
        end: new Date(2018, 0, 30, 10, 30, 0),
        resourceId: 4
    }
];

const calenderEvents = () => {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" })
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <div>
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: '20%', marginRight: '10px' }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />

                <DatePicker placeholderText="Start Date" style={{ marginRight: '10px' }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />

                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />

                <button style={{ marginTop: '10px' }} onClick={handleAddEvent}>Add Event</button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
    );
};

export default calenderEvents;