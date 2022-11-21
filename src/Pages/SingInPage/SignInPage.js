import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledMain } from "./SignInStyle";
import axios from "axios";

export default function SignInPage({setUserData}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    e.stopPropagation();

    const body = {
      email,
      password,
    };

    axios.post("http://localhost:5000/sign-in", body)
      .then(res => {
        setUserData(res.data)
        navigate("/finances")

      }).catch((err) => {
        console.log(err)
        alert("email ou senha incorreto")
    });

  }

  return (
    <StyledMain>
      <h1>MyWallet</h1>
      <form onSubmit={login}>
        <input
          required
          value={email}
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          value={password}
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to={"/SignUp"}>
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </StyledMain>
  );
}
