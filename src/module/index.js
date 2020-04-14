import React from 'react';
import SpringCalendar from '../lib';

let events=[
    {
        title:'Event 1',
        startDate:'2020-04-09 08:00',
        endDate:'2020-04-09 12:00',
    },
    {
        title:'Event 2',
        startDate:'2020-04-09 09:00',
        endDate:'2020-04-09 12:00',
    },
    {
        title:'Event 3',
        startDate:'2020-04-09 12:00',
        endDate:'2020-04-09 16:00',
    },
    {
        title:'Event 4',
        startDate:'2020-04-09 09:00',
        endDate:'2020-04-09 10:00',
    },
    {
        title:'Event 5',
        startDate:'2020-04-09 09:00',
        endDate:'2020-04-09 14:00',
    },
    {
        title:'Event 6',
        startDate:'2020-04-09 08:00',
        endDate:'2020-04-09 10:00',
    },
    {
        title:'Event 7',
        startDate:'2020-04-09 06:00',
        endDate:'2020-04-09 10:00',
    },
    {
        title:'Event 8',
        startDate:'2020-04-09 18:00',
        endDate:'2020-04-09 22:00',
    },
    {
        title:'Event 9',
        startDate:'2020-04-09 18:00',
        endDate:'2020-04-09 22:00',
    },
    {
        title:'Event 10',
        startDate:'2020-04-09 09:00',
        endDate:'2020-04-09 20:00',
    }
]

let color= (Math.random()*1000000).toFixed()
// const App =()=> <SpringCalendar locale="ar-ma" events={events} color={`#${color}`} />;
const App =()=> <SpringCalendar locale="en" events={events} color="#5118ac" />;
export default App