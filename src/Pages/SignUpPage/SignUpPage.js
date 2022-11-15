import { StyledMain } from "./SignUptyle";

export default function SignUpPage(){
    return(
        <StyledMain>
            <h1>MyWallet</h1>
            <form>
            <input placeholder="Nome" />
                <input placeholder="E-mail" />
                <input placeholder="Senha" />
                <input placeholder="Confirme a senha" />
                <button>Cadastrar</button>
            </form>
            <p>Já tem uma conta? Entre agora!</p>
        </StyledMain>
    )
}