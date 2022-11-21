import React, { useState } from "react";
import { Form } from "./styles";
import * as authService from "../../services/authService";
import { throwError, sucessMessage } from "../../utils/authResponseHandler";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(event: any) {
    event.preventDefault();
    setLoading(true);
    const data = { username, password };
    const response = authService.signup(data);
    response
      .then((res) => {
        sucessMessage(res.status, res.data.message);
        setLoading(false);
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
          {loading ? "Loading..." : "Cadastrar"}
        </button>
      </Form>
    </>
  );
};

export default Signup;
