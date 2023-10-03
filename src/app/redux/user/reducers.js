const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "CREATE_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "CREATE_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "LOGIN_USER_START":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "LOGIN_USER_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "LOGOUT_USER_SUCCESS":
      return {
        ...state,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
