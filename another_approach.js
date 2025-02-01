const calculateElapsedTime = (startTime) => {
  return ((Date.now() - startTime) / 1000).toFixed(2);
};

const updateOrderField = (orderDetails, key, keyValue) => {
  const updatedOrder = { ...orderDetails };
  updatedOrder[key] = keyValue;
  return updatedOrder;
};

const displayOrderStatus = (startTime, message, orderDetails = "") => {
  console.log(`[${calculateElapsedTime(startTime)}]`, message, orderDetails);
};

const deliverOrder = (startTime, orderDetails) => {
  displayOrderStatus(startTime, "Delivering order...");
  setTimeout(() => {
    const updatedOrder = updateOrderField(
      orderDetails,
      "deliveryDetails",
      "delivered by john at 7:30 PM"
    );
    displayOrderStatus(startTime, "order delivered: ", updatedOrder);
  }, 5000);
};

const packOrder = (startTime, orderDetails) => {
  displayOrderStatus(startTime, "Packing order...");
  setTimeout(() => {
    const updatedOrder = updateOrderField(
      orderDetails,
      "packageDetails",
      "packed in eco-friendly box"
    );
    displayOrderStatus(startTime, "Order packed:", updatedOrder);
    deliveryStatus(startTime, updatedOrder);
  }, 2000);
};

const prepareFood = (startTime, orderDetails) => {
  //prepareFood
  // Preparing food ...
  displayOrderStatus(startTime, "Preparing food...");
  setTimeout(() => {
    const updatedOrder = updateOrderField(
      orderDetails,
      "foodDetails",
      "Burger & fries"
    );
    displayOrderStatus(startTime, "Food is ready:", updatedOrder);
    packStatus(startTime, updatedOrder);
  }, 3000);
};

const placeOrder = () => {
  return { startTime: Date.now(), orderId: 123 };
};

const trackOrder = () => {
  const { startTime, orderId } = placeOrder();
  displayOrderStatus(startTime, "order received: ", { orderId });
  foodStatus(startTime, { orderId });
};

trackOrder();
