import { StyledMain } from "./OutcomeStyle"
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function OutcomePage(params) {
    return (
        <StyledMain>
            <header>
                <h1>Nova saída</h1>
                <Link to="/finances">
                    <RiArrowGoBackFill size={"22px"} color="white" />
                </Link>
            </header>
            <main>
                <form>
                    <input placeholder="Valor" />
                    <input placeholder="Descrição" />
                    <button>Salvar saída</button>
                </form>
            </main>
        </StyledMain>
    )
};
