const parseElapsedTime = (startTime) => {
  return ((Date.now() - startTime) / 1000).toFixed(2);
};

const updateOrder = (orderDetails, key, keyValue) => {
  const updatedOrder = { ...orderDetails };
  updatedOrder[key] = keyValue;
  return updatedOrder;
};

const display = (startTime, message, orderDetails = "") => {
  console.log(`[${parseElapsedTime(startTime)}]`, message, orderDetails);
};

const prepareDelivery = (startTime, orderDetails) => {
  const updatedOrder = updateOrder(
    orderDetails,
    "delivery details",
    "delivered by john at 7:30 PM"
  );
  display(startTime, "order delivered: ", updatedOrder);
};

const preparingDelivery = (startTime, orderDetails) => {
  display(startTime, "Delivering order....");
  setTimeout(prepareDelivery, 5000, startTime, { ...orderDetails });
};

const preparePack = (startTime, orderDetails) => {
  const updatedOrder = updateOrder(orderDetails, "package", "packed bruh");
  display(startTime, "Order packed:", updatedOrder);
  preparingDelivery(startTime, updatedOrder);
};

const preparingPack = (startTime, orderDetails) => {
  display(startTime, "Packing order....");
  setTimeout(preparePack, 2000, startTime, { ...orderDetails });
};

const prepareFood = (startTime, orderDetails) => {
  const updatedOrder = updateOrder(orderDetails, "food", "fries");
  display(startTime, "Food is ready:", updatedOrder);
  preparingPack(startTime, updatedOrder);
};

const preparingFood = (startTime, orderDetails) => {
  display(startTime, "Preparing food....");
  setTimeout(prepareFood, 3000, startTime, { ...orderDetails });
};

const placeOrder = () => {
  return { startTime: Date.now(), orderId: 123 };
};

const trackOrder = () => {
  const { startTime, orderId } = placeOrder();
  display(startTime, "order received: ", { orderId });
  preparingFood(startTime, { orderId });
};

trackOrder();
