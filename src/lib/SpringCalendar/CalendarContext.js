import React from 'react';

const CalendarContext=React.createContext({});

export const CalendarProvider=CalendarContext.Provider
export const CalendarConsumer=CalendarContext.Consumer
export default CalendarContext;