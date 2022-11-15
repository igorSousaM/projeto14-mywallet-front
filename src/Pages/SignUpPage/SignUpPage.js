import { Link } from "react-router-dom";
import { StyledMain } from "./SignUptyle";

export default function SignUpPage() {
    return (
        <StyledMain>
            <h1>MyWallet</h1>
            <form>
                <input placeholder="Nome" />
                <input placeholder="E-mail" />
                <input placeholder="Senha" />
                <input placeholder="Confirme a senha" />
                <button>Cadastrar</button>
            </form>
            <Link to={"/SignIn"}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>

        </StyledMain>
    )
}