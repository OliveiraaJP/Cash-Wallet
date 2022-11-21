import React, { useState } from "react";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import { Container } from "./styles";
import background from "../../assets/wallpaper.jpg";


const Auth: React.FC = () => {
  const [login, setLogin] = useState<boolean>(false);


  return (
    <Container>
      <img src={background} alt="background" />
      {login === false && (
        <main>
          <header>
            <button className="pressed">Login</button>
            <button onClick={() => setLogin(true)}>Cadastro</button>
          </header>
          <Login />
        </main>
      )}

      {login === true && (
        <main>
          <header>
            <button onClick={() => setLogin(false)}>Login</button>
            <button className="pressed">Cadastro</button>
          </header>
          <Signup />
        </main>
      )}
    </Container>
  );
};

export default Auth;
