(this["webpackJsonpspring-calendar"]=this["webpackJsonpspring-calendar"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),s=a(3),o=(a(12),a(2)),i=c.a.createContext({}),m=i.Provider,u=(i.Consumer,i),d=function(e){var t=e.month,a=Object(n.useContext)(u).selectDay,r=Object(n.useState)(-1),l=Object(s.a)(r,2),o=l[0],i=l[1];return c.a.createElement(c.a.Fragment,null,t.weekday>0&&c.a.createElement("div",{className:"sc-day sc-day-in-month",style:{gridColumnStart:"span ".concat(t.weekday)}}),t.days.map((function(e,n){return c.a.createElement("div",{key:e.index,onClick:function(c){window.target=c.target,t.extended?i(n===o?-1:n):a(e)},className:"".concat(e.isToday?"sc-today  spring-centered-content":""," sc-day sc-day-in-month")},c.a.createElement("div",null,e.index),e.events.length>0&&c.a.createElement("sup",null,c.a.createElement("div",{className:"sc-day-events-count"},e.events.length)),t.extended&&e.events.length>0&&c.a.createElement("div",{className:"sc-day-events "},e.events.map((function(e,t){return t<3&&c.a.createElement("span",{className:"sc-event",key:t},e.title)})),e.events.length>3&&c.a.createElement("span",{className:"sc-event-more-indicator"},"+",e.events.length-3),o===n&&e.events.length>0&&c.a.createElement("div",{className:"sc-more-events-wrp"},c.a.createElement("div",{className:"sc-more-events"},c.a.createElement("div",{className:"sc-events-detail"},c.a.createElement("div",{className:"sc-events-detail-day"},e.localeFormat),e.events.map((function(e,t){return c.a.createElement("div",{className:"sc-event-detail",key:t},c.a.createElement("div",{className:"sc-event-detail-time",key:t},c.a.createElement("div",null,e.startTime),c.a.createElement("div",null,e.endTime)),c.a.createElement("div",{className:"sc-event-detail-title"},e.title))})))))))})))},v=function(e){var t=e.extended,a=e.month,r=Object(n.useContext)(u).selectMonth;return c.a.createElement("div",{className:"".concat(t?"sc-month-wrapper-extended":""," sc-month-wrapper")},c.a.createElement("div",{className:"sc-month spring-centered-content",onClick:function(){return r(a)}},a&&a.label),a.weekdaysShort.map((function(e,t){return c.a.createElement("div",{className:"sc-weekday spring-centered-content",key:"wd".concat(t)},e)})),a&&c.a.createElement(d,{month:Object(o.a)({},a,{extended:t})}))},y=a(4),p=a(1),E=a.n(p);var h=function(e,t,a){window.moment=E.a;var c=Object(n.useState)({type:"year",value:(new Date).getFullYear(),default:!0}),r=Object(s.a)(c,2),l=r[0],i=r[1];Object(n.useEffect)((function(){E.a.locale(t),console.log(t),f("day")}),[]);var m=function(e){return E.a.months().map((function(t,a){return d(e,a+1,t)}))},u=function(e){var t=e.month()+1,a=E.a.months()[e.month()],n=e.year();return d(n,t,a)},d=function(e,t,a){var n="".concat(e,"-").concat(t),c=E()(n),r={label:a,fullLabel:n,index:t,weekday:c.weekday(),weekdaysShort:E.a.weekdaysShort()};return r.days=Object(y.a)(Array(c.daysInMonth())).map((function(a,n){return v({index:n+1,label:"".concat(e,"-").concat(t,"-").concat(n+1)})})),r},v=function(e){return e.localeFormat=E()(e.label).format("LL"),e.hours=h(),e.events=p(e),e.isToday=E()().isSame(e.label,"day"),e},p=function(e){return a.filter((function(t){return E()(t.startDate).isSame(e.label,"day")})).map((function(e){return e.startTime=E()(e.startDate).format("hh:mm A"),e.endTime=E()(e.endDate).format("hh:mm A"),e}))},h=function(){return Object(y.a)(Array(24)).map((function(e,t){return{index:t,label:"".concat(t<10?"0"+t:t,":00")}}))},f=function(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=a?E()():E()(t);switch(c=!n||a||E()().isSame(E()(t),e)?c:E()(),e){case"day":i(Object(o.a)({},l,{type:"day",value:c.format("LL"),hours:h(),events:p({label:c})}));break;case"week":i(Object(o.a)({},l,{type:"week",value:c.format("MMMM YYYY")}));break;case"month":i(Object(o.a)({},l,{type:"month",value:c.format("MMMM YYYY"),month:u(c)}));break;case"year":i(Object(o.a)({},l,{type:"year",value:c.year().toString(),months:m(c.year())}))}};return{gotoNext:function(){var e=E()(l.value).add(1,l.type+"s");f(l.type,e,!1)},gotoPrev:function(){var e=E()(l.value).subtract(1,l.type+"s");f(l.type,e,!1)},selectedDate:l,changeView:f}},f=function(e){var t=e.months;return c.a.createElement(c.a.Fragment,null,t.map((function(e,t){return c.a.createElement(v,{month:e,key:"m".concat(t)})})))},g=function(e){var t=e.day;return console.log(t),c.a.createElement("div",{className:"sc-full-day"},t.hours&&t.hours.map((function(e,t){return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement("div",{className:"sc-full-day-hour"},e.label),c.a.createElement("div",{className:"sc-full-day-time-line-item"},c.a.createElement("div",{className:"sc-full-day-time-line-circle"})))})),c.a.createElement("div",{className:"sc-full-day-events"},t.events&&t.events.map((function(e,t){return c.a.createElement("div",{key:t,style:{gridRow:new Date(e.startDate).getHours()+1+"/span "+(new Date(e.endDate).getHours()-new Date(e.startDate).getHours()+1)},className:"sc-full-day-event"},c.a.createElement("div",{className:"sc-full-day-event-time"},c.a.createElement("div",null,e.startTime),c.a.createElement("div",null,e.endTime)),c.a.createElement("div",{className:"sc-full-day-event-title"},e.title))}))))},b=function(e){var t=e.onClick;return c.a.createElement("button",{className:"spring-btn spring-btn-rounded",onClick:t},c.a.createElement("svg",{fill:"white",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 306 306"},c.a.createElement("g",{id:"chevron-right"},c.a.createElement("polygon",{points:"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153"}))))},w=function(e){var t=e.onClick;return c.a.createElement("button",{className:"spring-btn spring-btn-rounded",onClick:t},c.a.createElement("svg",{x:"0px",fill:"white",y:"0px",width:"20px",height:"20px",viewBox:"0 0 306 306",style:{transform:"rotate(180deg)"}},c.a.createElement("g",{id:"chevron-right"},c.a.createElement("polygon",{points:"94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153"}))))},N=function(e){var t=e.locale,a=e.events,r=e.color,l=h("2020",t,a),o=l.selectedDate,i=l.changeView,u=l.gotoNext,d=l.gotoPrev,y=Object(n.useState)("day"),p=Object(s.a)(y,2),E=p[0],N=p[1];Object(n.useEffect)((function(){r?document.documentElement.style.setProperty("--primary",r):document.documentElement.style.setProperty("--primary","#5118ac")}),[r]),Object(n.useEffect)((function(){N(o.type)}),[o]);var D={year:c.a.createElement(f,{months:o.months?o.months:[]}),month:c.a.createElement(v,{extended:!0,month:o.month?o.month:null}),day:c.a.createElement(g,{day:o})};return c.a.createElement(m,{value:{selectMonth:function(e){i("month",e.fullLabel,!1)},selectDay:function(e){i("day",e.label,!1)}}},c.a.createElement("div",{className:"sc-wrapper"},c.a.createElement("div",{className:"sc-year-wrapper"},c.a.createElement("div",{className:"sc-year ".concat("year"!==o.type?"sc-month-year":"")},c.a.createElement(w,{onClick:function(){return d()}}),c.a.createElement("h2",null,o.value),c.a.createElement(b,{onClick:function(){return u()}})),c.a.createElement("div",{className:"sc-toggle"},c.a.createElement("div",{onClick:function(){return i("day",o.value,!1,!0)},className:"spring-button ".concat("day"===o.type?"spring-button-active":"")},"Day"),c.a.createElement("div",{onClick:function(){return i("month",o.value,!1,!0)},className:"spring-button ".concat("month"===o.type?"spring-button-active":"")},"Month"),c.a.createElement("div",{onClick:function(){return i("year",o.value,!1,!0)},className:"spring-button ".concat("year"===o.type?"spring-button-active":"")},"Year"))),c.a.createElement("div",{className:"spring-main-content"},D[E])))},D=[{title:"Event 1",startDate:"2020-04-09 08:00",endDate:"2020-04-09 12:00"},{title:"Event 2",startDate:"2020-04-09 09:00",endDate:"2020-04-09 12:00"},{title:"Event 3",startDate:"2020-04-09 12:00",endDate:"2020-04-09 16:00"},{title:"Event 4",startDate:"2020-04-09 09:00",endDate:"2020-04-09 10:00"},{title:"Event 5",startDate:"2020-04-09 09:00",endDate:"2020-04-09 14:00"},{title:"Event 6",startDate:"2020-04-09 08:00",endDate:"2020-04-09 10:00"},{title:"Event 7",startDate:"2020-04-09 06:00",endDate:"2020-04-09 10:00"},{title:"Event 8",startDate:"2020-04-09 18:00",endDate:"2020-04-09 22:00"},{title:"Event 9",startDate:"2020-04-09 18:00",endDate:"2020-04-09 22:00"},{title:"Event 10",startDate:"2020-04-09 19:00",endDate:"2020-04-09 20:00"}],k=((1e6*Math.random()).toFixed(),function(){return c.a.createElement(N,{locale:"en",events:D,color:"#3a0751"})});l.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.03710fb4.chunk.js.map