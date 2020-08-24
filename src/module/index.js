import React from 'react';
import SpringCalendar from '../lib';

let events= [
    {
      title: "Event 1",
      startDate: "2020-08-22 08:00",
      endDate: "2020-08-22 12:00"
    },
    {
      title: "Event 2",
      startDate: "2020-08-22 09:00",
      endDate: "2020-08-22 12:00"
    },
    {
      title: "Event 3",
      startDate: "2020-08-22 12:00",
      endDate: "2020-08-22 16:00"
    },
    {
      title: "Event 4",
      startDate: "2020-08-22 09:00",
      endDate: "2020-08-22 10:00"
    },
    {
      title: "Event 5",
      startDate: "2020-08-22 09:00",
      endDate: "2020-08-22 14:00"
    },
    {
      title: "Event 6",
      startDate: "2020-08-22 08:00",
      endDate: "2020-08-22 10:00"
    },
    {
      title: "Event 7",
      startDate: "2020-08-22 06:00",
      endDate: "2020-08-22 10:00"
    },
    {
      title: "Event 8",
      startDate: "2020-08-22 18:00",
      endDate: "2020-08-22 22:00"
    },
    {
      title: "Event 9",
      startDate: "2020-08-22 18:00",
      endDate: "2020-08-22 20:00"
    },
    {
      title: "Event 10",
      startDate: "2020-08-18 09:00",
      endDate: "2020-08-18 20:50"
    }
    ,
    {
      title: "Event 11",
      startDate: "2020-08-19 09:00",
      endDate: "2020-08-19 20:30"
    }
     ,
    {
      title: "Event 12",
      startDate: "2020-08-22 09:00",
      endDate: "2020-08-22 12:30"
    }
  ]

let color= (Math.random()*1000000).toFixed()
// const App =()=> <SpringCalendar locale="ar-ma" events={events} color={`#${color}`} />;
const App =()=> <SpringCalendar locale="en" events={events} color="#5118ac" defaultType="year"/>;
export default App