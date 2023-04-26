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
      axios.defaults.withCredentials = true;
      axios.defaults.headers.common['Cache-Control'] = 'no-cache';
      axios.defaults.headers.common['Pragma'] = 'no-cache';
      axios
        //${import.meta.env.VITE_SERVER_URL}
        .post(`http://68.183.111.241:3000/api/v1/login`, {
          email: values.email,
          password: values.password,
        },
        {withCredentials: true,})
        .then((response) => {
          // localStorage.setItem(SESSION_KEY, response.data.payload.sessionToken);
          // setUser(response.data.payload.sessionToken);
          // navigate("/home");
          console.log(response.headers["set-cookie"]);
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
        });
    }
  };

  return <Login handleLogin={handleLogin} message={message} />;
};

export default LoginContainer;
