import {
  placeOrder,
  preparingFood,
  display,
} from "./src/prepare_and_delivery.js";

const main = () => {
  const { startTime, orderId } = placeOrder();
  display(startTime, "order received: ", { orderId });
  preparingFood(startTime, { orderId });
  //place order and have the order id and details
  //food prep detail
  //packing details
  //dlivery details
  //display the summary of the order
};
main();
//lets have a structure that tells me the order id when order placed (can be a number)
//food preparaion should tell me the food itself (it can be an array)
//pack the food and tell me the packaging details(can be a string)
//delivery details should be added at last (can be object {name, address, time})
//want to handle them separate and then combine together to get the data log
//get the start time first, then for every process calculate the time elapsed
//for the whole process just add the times elapsed for the processes.
