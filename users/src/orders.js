// #1

const orders = require("./orders.json");
var dataOrders = Object.keys(orders.data).map((key) => orders.data[key]);

// console.log(dataOrders);

const filteredOrders = dataOrders.filter(
  (order) => order?.user?.email === "hello@sessami.co"
);

console.log("The orders for user hello@sessami.co are: ", filteredOrders);
console.log(
  "The number of orders for user hello@sessami.co are: ",
  filteredOrders.length
);

const totalTicketsPurchased = filteredOrders.reduce(
  (total, order) => total + order?.ticketList.length,
  0
);

// const totalTicketsPurchased = filteredOrders.reduce((total, order) => {
//  const totalForOrder = order.cart.reduce((totalFor, cartItem) => totalFor+cartItem.count,0);
//  console.log("ticket purchased",  totalForOrder,order.cart);
//  return total+totalForOrder
// } , 0);

console.log("ticket purchased", totalTicketsPurchased);
