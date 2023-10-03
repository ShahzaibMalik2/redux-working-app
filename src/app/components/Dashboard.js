"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/user/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <button className="bg-gray-300" onClick={logout}>
        LOGOUT
      </button>
    </div>
  );
};

export default Dashboard;
