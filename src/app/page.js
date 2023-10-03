"use client";
import Image from "next/image";
import React from "react";
import { Provider } from "react-redux";
import { Button } from "antd";
//import UserForm from "./components/userForms";
import { BrowserRouter as Router } from "react-router-dom";
import UserForm from "../app/components/userForms";

import store from "../app/store";

export default function Home() {
  return (
    <Provider store={store}>
      <div style={{ padding: "20px" }}>
        <UserForm />
      </div>
    </Provider>
  );
}
