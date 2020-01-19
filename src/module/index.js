import React from 'react';
import SpringCalendar from '../lib';

let events=[
    {
        title:'Event 1',
        startDate:'2020-01-15 08:00',
        endDate:'2020-01-15 10:00',
    },
    {
        title:'Event 3',
        startDate:'2020-01-15 09:00',
        endDate:'2020-01-15 12:00',
    },
    {
        title:'Event 2',
        startDate:'2020-01-15 12:00',
        endDate:'2020-01-15 16:00',
    },
    {
        title:'Event 4',
        startDate:'2020-01-15 09:00',
        endDate:'2020-01-15 10:00',
    },
    {
        title:'Event 5',
        startDate:'2020-01-15 09:00',
        endDate:'2020-01-15 10:00',
    },
    {
        title:'Event 6',
        startDate:'2020-01-15 08:00',
        endDate:'2020-01-15 10:00',
    },
    {
        title:'Event 7',
        startDate:'2020-01-15 09:00',
        endDate:'2020-01-15 10:00',
    }
]
const App =()=> <SpringCalendar locale="en" events={events} color="#002651" />;
export default App