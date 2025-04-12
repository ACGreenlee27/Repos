let customer = {
  name: "Alex",
  age: 21,
  orders: [
    {
      price: 20,
      item: "Bread",
      stock: 0,
    },
    {
      price: 10,
      item: "Eggs",
      stock: 10,
    },
  ],
  readyToPay: false,
};

// console.log(myObject);

// myObject.name = "Tabby";

// console.log(myObject.name);

// myObject.cashOrCredit = "Credit";

// console.log(myObject.order.price);

// console.log(myObject.order.item);

function getAllAvailOrders(customer) {
  let availList = [];
  for (let i = 0; i < customer.orders.length; i++) {
    if (customer.orders[i].stock > 0) {
      availList.push(customer.orders[i]);
    }
  }
  return availList;
}

const availItems = getAllAvailOrders(customer);
console.log(availItems);

function customerItems(customer, itemName) {
  for (let i = 0; i < customer.orders.length; i++) {
    if (customer.orders[i].item === itemName) {
      return console.log(
        "The customer " +
          customer.name +
          " has " +
          itemName +
          " in their inventory."
      );
    }
  }
  console.log(
    "The customer " +
      customer.name +
      " does not have " +
      itemName +
      " in their inventory."
  );
}

customerItems(customer, "Toast");
