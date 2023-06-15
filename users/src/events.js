const dataEvents = require("./events.json"); //to load data from json file
const dataUsers = require("./users.json");
const dataOrders = require("./orders.json");

const events = Object.values(dataEvents["data"]); //Object of Objects, {key1 : {}, key2: {}} converted into [{}, {}](array of objects)
const users = Object.values(dataUsers["data"]);
const orders = Object.values(dataOrders["data"]);
//console.log(events);

const today = new Date(); // date object
const todayISO = today.toISOString(); // convert into ISO string so that we can compare

const pastEvents = events.filter((i) => {
  //__time__ is in ISO string format
  if (i.date.__time__) return todayISO > i.date.__time__;
  else {
    const isoFormat = new Date(i.date.seconds * 1000).toISOString(); //to convert a unix timestamp into ISO string format, ignored nano-seconds, the function as arguement takes milliseconds

    return todayISO > isoFormat;
  }
});

// console.log(events.length, pastEvents.length);

// Task 1
// let salesPercentageFilter = 1;
// const filteredPastEvents = pastEvents.filter((i) => {
//   const tickets = i?.tickets; //tickets is an array

//   const totalEventCapacity = tickets.reduce(
//     (total, ticket) => total + ticket?.capacity,
//     0
//   );
//   const totalTicketsSold = tickets.reduce(
//     (total, ticket) => total + ticket?.sold,
//     0
//   );

//   return totalTicketsSold >= totalEventCapacity * (salesPercentageFilter / 100);
// });
// console.log(filteredPastEvents.length);

// const updatedPastEvents = pastEvents.map((i) => ({ ...i, isExpired: true }));
//console.log(updatedPastEvents);

const helloSessami = users.find((i) => i.email === "hello@sessami.co"); //each event has a hostId so to find the events hosted by the user we need the Id of the user
const helloSessamiId = helloSessami.id;
//console.log(helloSessamiId);

const helloSessamiEvents = events.filter((i) => i.hostId === helloSessamiId);
//console.log(helloSessamiEvents);
// let lifeTimeRevenue = 0;
// for (let i of helloSessamiEvents) {
//   const eventRevenue = i["tickets"].reduce(
//     (accumulator, ticket) => accumulator + ticket.sold * ticket.price,
//     0
//   );
//   lifeTimeRevenue += eventRevenue;
//   //tickets is an array
// }

//  USE THIS
// const lifeTimeRevenue = helloSessamiEvents.reduce((total, i) => {
//   //   #1 - Calculate event-wise revenue
//   const eventRevenue = i?.tickets.reduce(
//     (accumulator, j) => accumulator + j.sold * j.price,
//     0
//   );

//   //  #2 - Add event-wise revenue to total revenue
//   return total + eventRevenue;
// }, 0);
// console.log(lifeTimeRevenue);

// const eventsWithNoDescriptions = events.filter((i) => !i?.description);
// console.log(eventsWithNoDescriptions.length);
