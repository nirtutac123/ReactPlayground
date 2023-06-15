import React from "react";
import users from "./users.json";
// const jsonData = require("./users.json");

const users = Object.values(jsonData["data"]);
debugger;
// console.log(users);
console.log("users.length ->", users.length);

// 1. Filter out all the users that are not based in UK
// const notBasedInUk = users.filter((user) => user.country !== "UK");
// console.log(notBasedInUk.length);

const nonUKPhoneNumbers = users.filter((user) => {
  if (!user.phone || !user.phone.includes("+44")) {
    return true;
  }
});
console.log(nonUKPhoneNumbers);

//2. Filter out users who haven’t added their address
// const usersWithAddress = users.filter((user) => user.address !== null);
// console.log(usersWithAddress);

const usersWithOutAddress = users.filter((user) => user.address === null);
// const usersWithOutAddress = users.filter((user) => !user.address);
console.log(usersWithOutAddress.length);

//3. Filter out users who haven’t verified their email address
const usersWithValidEmail = users.filter((user) => user.email);
console.log(usersWithValidEmail.length);
