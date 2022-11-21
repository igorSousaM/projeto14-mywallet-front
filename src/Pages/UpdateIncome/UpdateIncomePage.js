import { StyledMain } from "./UpdateIncomeStyle"
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



export default function UpdateIncomePage({userData}) {

    const [value, setValue] = useState(0)
    const [description, setDescription] = useState("")

    function completeForm(e){
        e.preventDefault()

        const config = {
            headers: { Authorization: `Bearear ${userData.token.token}` },
          };

        const body = {
            value,
            description,
            type: "income"
        }

        axios.put(`http://localhost:5000/transaction/${"preciso doId da transação"}`, body, config)
        .then(res => {
            console.log(res.data)
            setValue(0)
            setValue("")
        })
        .catch(err=>console.log(err.response.data))

    }

    return (
        <StyledMain>
            <header>
                <h1>Alterar entrada</h1>
                <Link to="/finances">
                    <RiArrowGoBackFill size={"22px"} color="white" />
                </Link>
            </header>
            <main>
                <form onSubmit={completeForm}>
                    <input type="number" required value={value} placeholder="Valor" onChange={e => setValue(e.target.value)}/>
                    <input type="text" required value={description} placeholder="Descrição" onChange={e => setDescription(e.target.value)}/>
                        <button type="submit">Alterar entrada</button>
                </form>
            </main>
        </StyledMain>
    )
};

