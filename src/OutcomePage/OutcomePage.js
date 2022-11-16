import { StyledMain } from "./OutcomeStyle"

export default function OutcomePage(params) {
    return (
        <StyledMain>
            <header>
                <h1>Nova saída</h1>
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
