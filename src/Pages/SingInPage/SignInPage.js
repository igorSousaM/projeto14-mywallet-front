import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { StyledMain } from "./SignInStyle"
export default function SignInPage() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate()

    function login(e){

        e.preventDefault()
        e.stopPropagation()

        const body = {
            email,
            password
        }

        console.log(body)
        navigate("/finances")
    }


    return (
        <StyledMain>
            <h1>MyWallet</h1>
            <form onSubmit={login}>
                <input required type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                <input required type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Entrar</button>                
            </form>
            <Link to={"/SignUp"}>
            <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </StyledMain>
    )
}

