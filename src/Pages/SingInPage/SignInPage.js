import { Link } from "react-router-dom"
import { StyledMain } from "./SignInStyle"

export default function SignInPage() {
    return (
        <StyledMain>
            <h1>MyWallet</h1>
            <form>
                <input placeholder="E-mail" />
                <input placeholder="Senha" />
                <button>Entrar</button>
            </form>
            <Link to={"/SignUp"}>
            <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </StyledMain>
    )
}

