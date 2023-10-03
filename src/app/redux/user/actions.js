import axios from "axios";
import Cookies from "js-cookie";

export const createUserStart = () => ({
  type: "CREATE_USER_START",
});

export const createUserSuccess = (user) => ({
  type: "CREATE_USER_SUCCESS",
  payload: user,
});

export const createUserFailure = (error) => ({
  type: "CREATE_USER_FAILURE",
  payload: error,
});

export const loginUserStart = () => ({
  type: "LOGIN_USER_START",
});

export const loginUserSuccess = (user) => ({
  type: "LOGIN_USER_SUCCESS",
  payload: user,
});

export const loginUserFailure = (error) => ({
  type: "LOGIN_USER_FAILURE",
  payload: error,
});

export const logoutUserSuccess = () => ({
  type: "LOGOUT_USER_SUCCESS",
});

export const createUser = (userData) => {
  return async (dispatch) => {
    dispatch(createUserStart());

    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        userData
      );
      const token = response.data.token;
      Cookies.set("token", token, { expires: 7 });
      dispatch(createUserSuccess(response.data));
      console.log("User created successfully:", response.data);
      const storedToken = Cookies.get("token");
      if (storedToken) {
        console.log("Token stored in cookie:", storedToken);
      } else {
        console.log("Token not found in cookie.");
      }
    } catch (error) {
      dispatch(createUserFailure(error.message));
      console.error("Error creating user:", error.message);
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch(loginUserStart());

    try {
      const response = await axios.post(
        "https://reqres.in/api/register",
        userData
      );
      const token = response.data.token;
      Cookies.set("token", token, { expires: 7 });
      dispatch(loginUserSuccess(response.data));
      console.log("Login successful:", response.data);
      const storedToken = Cookies.get("token");
      if (storedToken) {
        console.log("Login Token stored in cookie:", storedToken);
      } else {
        console.log("Login Token not found in cookie.");
      }
    } catch (error) {
      dispatch(loginUserFailure(error.message));
      console.error("Error logging in user:", error.message);
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(logoutUserSuccess());
    Cookies.remove("token");
  };
};
