import React from "react";
import ChangePassword from "./ChangePass";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Change Password",
  description:
    "MayoueBeauty509 is your destination for beauty, style, and carefully selected products. Shop with confidence and discover products chosen for you.",
};

const ChangePassPage = () => {
  return <ChangePassword />;
};

export default ChangePassPage;
