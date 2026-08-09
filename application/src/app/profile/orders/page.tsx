import React from "react";
import Orders from "./Orders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Orders",
  description:
    "MayoueBeauty509 is your destination for beauty, style, and carefully selected products. Shop with confidence and discover products chosen for you.",
};

const OrderPage = () => {
  return <Orders />;
};

export default OrderPage;
