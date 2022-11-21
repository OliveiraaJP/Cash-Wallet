import React, { useContext, useState } from "react";
import { Form } from "./styles";
import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { sucessMessage, throwError } from "../../utils/authResponseHandler";
import { UserContext } from "../../context/userContext";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);

  function submit(event: any) {
    event.preventDefault();
    setLoading(true);
    const data = { username, password };
    const response = authService.signin(data);
    response
      .then((res) => {
        sucessMessage(res.status, res.data.message);
        setToken(res.data.token);
        localStorage.setItem("userToken", JSON.stringify(res.data.token))
        navigate("/home");
      })
      .catch((err) => {
        setLoading(false);
        throwError(err.response.status, err.response.data.message);
      });
  }

  return (
    <>
      <Form onSubmit={submit}>
        <input
          type="text"
          disabled={loading}
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        ></input>
        <input
          type="password"
          disabled={loading}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        ></input>
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </button>
      </Form>
    </>
  );
};

export default Login;
