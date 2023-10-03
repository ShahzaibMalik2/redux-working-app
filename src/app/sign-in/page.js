import React from "react";
import { Input, Button } from "antd";

const SignUpForm = ({ userData, handleInputChange, handleSubmit, loading }) => {
  return (
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

export default SignUpForm;