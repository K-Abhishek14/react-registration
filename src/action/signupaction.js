import { API_INSTANCE_SIGNUP, SIGNUP_API, SIGNUP_API_PAYLOAD } from "../utils/BackendAPI";
import { SIGNUP_COMPLETE, SIGNUP_FAILURE } from "../utils/AppConstant";

export const doSignup = (name, email, username,userpassword) => {
  console.log("Login payload username & Password : ", name, email, username,userpassword );
  SIGNUP_API_PAYLOAD.name = name;
  SIGNUP_API_PAYLOAD.email = email;
  SIGNUP_API_PAYLOAD.username = username;
  SIGNUP_API_PAYLOAD.userpassword = userpassword;

  return dispatch => {
    return API_INSTANCE_SIGNUP.post(SIGNUP_API, JSON.stringify(SIGNUP_API_PAYLOAD))
      .then(function (response) {
        console.log("Login Action : ", response.data)
        dispatch({ type: SIGNUP_COMPLETE, payload: response });
      })
      .catch(function (error) {
        dispatch({ type: SIGNUP_FAILURE, payload: error });
      });
  }
}


