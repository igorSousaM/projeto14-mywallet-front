import { StyledMain } from "./UpdateOutcomeStyle"
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export default function UpdateOutcomePage({userData}) {

    const [value, setValue] = useState(0)
    const [description, setDescription] = useState("")

    const navigate = useNavigate()
    const location = useLocation()
    const transactionId = location.state
    

    console.log(transactionId)

    function completeForm(e){
        e.preventDefault()

        const config = {
            headers: { Authorization: `Bearer ${userData.token.token}` },
          };

        const body = {
            value,
            description,
            type: "outcome"
        }

        axios.put(`http://localhost:5000/transaction/${transactionId}`, body, config)
        .then(res => {
            console.log(res.data)
            setValue(0)
            setDescription("")
            navigate("/finances")
        })
        .catch(err=>console.log(err.response.data))

    }

    return (
        <StyledMain>
            <header>
                <h1>Alterar saída</h1>
                <Link to="/finances">
                    <RiArrowGoBackFill size={"22px"} color="white" />
                </Link>
            </header>
            <main>
                <form onSubmit={completeForm}>
                    <input type="number" required value={value} placeholder="Valor" onChange={e => setValue(e.target.value)}/>
                    <input type="text" required value={description} placeholder="Descrição" onChange={e => setDescription(e.target.value)} />
                        <button type="submit">Alterar saída</button>
                </form>
            </main>
        </StyledMain>
    )
};
