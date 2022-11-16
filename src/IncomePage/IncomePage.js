import { StyledMain } from "./IncomeStyle"

export default function IncomePage(params) {
    return (
        <StyledMain>
            <header>
                <h1>Nova entrada</h1>
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

