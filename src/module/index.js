import React from 'react';
import SpringCalendar from '../lib';

let events=[
    {
        title:'Event 1',
        startDate:'2020-03-15 08:00',
        endDate:'2020-03-18 10:00',
    },
    {
        title:'Event 2',
        startDate:'2020-03-15 09:00',
        endDate:'2020-03-15 12:00',
    },
    {
        title:'Event 3',
        startDate:'2020-03-15 12:00',
        endDate:'2020-03-17 16:00',
    },
    {
        title:'Event 4',
        startDate:'2020-03-17 09:00',
        endDate:'2020-04-10 10:00',
    },
    {
        title:'Event 5',
        startDate:'2020-03-15 09:00',
        endDate:'2020-03-15 10:00',
    },
    {
        title:'Event 6',
        startDate:'2020-03-15 08:00',
        endDate:'2020-03-15 10:00',
    },
    {
        title:'Event 7',
        startDate:'2020-03-15 09:00',
        endDate:'2020-03-15 10:00',
    }
]

let color= (Math.random()*1000000).toFixed()
const App =()=> <SpringCalendar locale="en" events={events} color={`#${color}`} />;
// const App =()=> <SpringCalendar locale="en" events={events} color="#5118dc" />;
export default App