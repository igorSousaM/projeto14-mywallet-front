import { StyledMain } from "./IncomeStyle"
import {RiArrowGoBackFill} from  "react-icons/ri";
import {Link} from "react-router-dom";


export default function IncomePage(params) {
    return (
        <StyledMain>
            <header>
                <h1>Nova entrada</h1>
                <Link to="/finances">
                        <RiArrowGoBackFill size={"22px"} color="white" />
                    </Link>
            </header>
            <main>
                <form>
                    <input placeholder="Valor" />
                    <input placeholder="Descrição" />
                    <button>Salvar entrada</button>
                </form>
            </main>
        </StyledMain>
    )
};

