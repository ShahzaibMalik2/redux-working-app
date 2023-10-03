"use client";
import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";
import { createUser } from "../redux/user/actions";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";

import Dashboard from "../dashboard/page";
import Cookies from "js-cookie";

const UserForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);
  const userR = useSelector((state) => state.userReducer.user);
  console.log(userR);
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    const token = Cookies.get("token");
    console.log("the token we get is: ", token);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
  };

  return userR?.token ? (
    // router.push("/dashboard")
    <Dashboard />
  ) : (
    // <Dashboard />

    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleInputChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleInputChange}
      />

      <Button type="primary" htmlType="submit" loading={loading}>
        Create Account
      </Button>
    </form>
  );
};

export default UserForm;
