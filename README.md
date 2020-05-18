## Spring Calendar
 It's a React based component which provides the functionality of a full-calendar that 
 shows daily events. 

## Installation


 `npm install spring-calendar`

> For Vue.js developers please check this [`repository`](https://github.com/boussadjra/vue-spring-calendar)
## Usage

```js 
import React from 'react';
import SpringCalendar from 'spring-calendar';

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
    }
   
]
const App =()=> <SpringCalendar locale="en" events={events} color="#002651" defaultType="year"/>;
export default App
```

## Demo 

[React Spring Calendar demo](https://boussadjra.github.io/spring-calendar/)

[Vue Spring Calendar demo](https://boussadjra.github.io/vue-spring-calendar/)
