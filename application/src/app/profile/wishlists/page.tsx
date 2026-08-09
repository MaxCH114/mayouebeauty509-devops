import React from "react";
import Wishlists from "./Wishlists";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlists",
  description:
    "MayoueBeauty509 is your destination for beauty, style, and carefully selected products. Shop with confidence and discover products chosen for you.",
};

const WishlistPage = () => {
  return <Wishlists />;
};

export default WishlistPage;
