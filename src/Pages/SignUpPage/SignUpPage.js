import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledMain } from "./SignUptyle";
import axios from "axios";

export default function SignUpPage() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const [loadingState, setLoadingState] = useState(false)

    const navigate = useNavigate()

    function createAccount(e){

        e.preventDefault()
        e.stopPropagation()

        setLoadingState(true)

        const body = {
            name,
            email,
            password
        }

        axios.post("http://localhost:5000/sign-up",body)
        .then(()=>{
            setLoadingState(false)
            navigate("/")
        }).catch((err)=>{
            console.log(err)
            alert("preencha os campos de acordo")
            setLoadingState(false)
        })

    }


    return (
        <StyledMain>
            <h1>MyWallet</h1>
            <form onSubmit={createAccount}>
                <input  disabled={loadingState} required type="text" value={name} placeholder="Nome" onChange={e=>setName(e.target.value)}/>
                <input  disabled={loadingState} required type="email" value={email} placeholder="E-mail" onChange={e=>setEmail(e.target.value)}/>
                <input  disabled={loadingState} required type="password" value={password} placeholder="Senha" onChange={e=>setPassword(e.target.value)}/>
                <input  disabled={loadingState} required type="password" value={passwordConfirm} placeholder="Confirme a senha" onChange={e=>setPasswordConfirm(e.target.value)}/>
                <button disabled={loadingState}  type="submit">{!loadingState ? "Cadastrar" : "Aguarde ..."}</button>
            </form>
            <Link to={"/"}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>

        </StyledMain>
    )
}