import React from 'react'
import styles from '../styles/Calendar.module.css'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
    'en-US': require('date-fns/locale/en-US')
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: 'Big Meeting',
        allDay: true,
        start: new Date(2022, 6, 0),
        end: new Date(2022, 6, 0)
    },
    {
        title: 'Vaccation',
        allDay: true,
        start: new Date(2022, 6, 0),
        end: new Date(2022, 6, 0)
    },
    {
        title: 'Conference',
        allDay: true,
        start: new Date(2022, 6, 0),
        end: new Date(2022, 6, 0)
    },
]



export default function CalendarEvent() {
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor='start'
                endAccessor='end'
                style={{ height: 500, margin: '50px' }}
            />
        </div>
    )
}
