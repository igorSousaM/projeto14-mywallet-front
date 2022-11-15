import { StyledMain } from "./style"

export default function SignInPage() {
    return (
        <StyledMain>
            <h1>MyWallet</h1>
            <form>
                <input placeholder="E-mail" />
                <input placeholder="Senha" />
                <button>Entrar</button>
            </form>
            <p>Primeira vez? Cadastre-se</p>
        </StyledMain>
    )
}

