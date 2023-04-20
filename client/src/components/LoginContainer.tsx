import { useState } from "react";
import Login from "./Login/Login";
import { Credentials } from "../../lib/types";
import axios from "axios";

const LoginContainer = () => {
  const [message, setMessage] = useState<string>("");

  const handleLogin = (values: Credentials) => {
    if (!values.password && !values.email) {
      setMessage("Email and password are required");
    } else if (!values.password) {
      setMessage("Password is required");
    } else if (!values.email) {
      setMessage("Email is required");
    } else {
      axios
        .post(`${import.meta.env.VITE_SERVER_URL}api/v1/login`, {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          // localStorage.setItem(SESSION_KEY, response.data.payload.sessionToken);
          // setUser(response.data.payload.sessionToken);
          // navigate("/home");
          console.log(response.headers["Set-Cookie"]);
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
          setMessage(error.response.data.message);
        });
    }
  };

  return <Login handleLogin={handleLogin} message={message} />;
};

export default LoginContainer;
