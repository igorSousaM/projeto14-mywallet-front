import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledMain } from "./SignInStyle";
import axios from "axios";

export default function SignInPage({setUserData}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loadingState, setLoadingState] = useState(false)

  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    e.stopPropagation();

    setLoadingState(true)

    const body = {
      email,
      password,
    };

    axios.post("http://localhost:5000/sign-in", body)
      .then(res => {
        setUserData(res.data)
        setLoadingState(false)
        navigate("/finances")

      }).catch((err) => {
        console.log(err)
        alert("email ou senha incorreto")
        setLoadingState(false)
      });

  }

  return (
    <StyledMain>
      <h1>MyWallet</h1>
      <form onSubmit={login}>
        <input disabled={loadingState}
          required
          value={email}
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input disabled={loadingState}
          required
          value={password}
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loadingState} type="submit">{!loadingState ? "Entrar" : "Aguarde ..."}</button>
      </form>
      <Link to={"/SignUp"}>
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </StyledMain>
  );
}
