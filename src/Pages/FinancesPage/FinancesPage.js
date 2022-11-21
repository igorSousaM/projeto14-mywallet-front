
import { StyledScreen } from "./FinacesStyle"
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function MainPage({userData}) {

    console.log(userData)

    useEffect(() => {
    
        const config = {headers:{Authorization: `Bearer ${userData.token}`}}

        axios.get("http://localhost:5000/session",config)
        .then( )
        .catch(err=>{
            console.log(err.response.data)
        })

    }, []);

    return (
        <StyledScreen>
            <header>
                <h1>Olá, Fulano</h1>
                <div>
                    <Link to="/">
                        <RiLogoutBoxRLine size={"24px"} color="white" />
                    </Link>
                </div>
            </header>

            <main>
                <p>olá</p>
            </main>

            <footer>
                <button>
                    <IoIosAddCircleOutline size={"22px"} color="white" />
                    <Link to="/income">
                        <p>Nova entrada</p>
                    </Link>
                </button>
                <button>
                    <IoIosAddCircleOutline size={"22px"} color="white" />
                    <Link to="/outcome">
                        <p>Nova saída</p>
                    </Link>
                </button>
            </footer>
        </StyledScreen>
    )
};

