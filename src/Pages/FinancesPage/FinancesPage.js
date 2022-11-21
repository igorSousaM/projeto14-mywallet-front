import { StyledScreen } from "./FinacesStyle";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Transaction from "./Transaction";

export default function MainPage({ userData }) {
  const [transactionList, setTransactionList] = useState([]);

  const config = {
    headers: { Authorization: `Bearer ${userData.token.token}` },
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/transaction", config)
      .then((res) => {
        setTransactionList(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const navigate = useNavigate();

  function logOut(e) {
    e.preventDefault();
    e.stopPropagation();

    const id = userData.user._id;

    axios
      .delete(`https://localhost:5000/session/${id}`, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/");
  }

  function addTransaction(str) {
    navigate(`/${str}`);
  }

  let entradas = 0
  let saidas = 0
  let saldo = entradas - saidas

  transactionList !== undefined && transactionList.map((i,idx)=> i.type === "outcome"? entradas += Number(i.value) : saidas += Number(i.value))

  return (
    <StyledScreen isPositive={saldo > 0}>
      <header>
        <h1>Olá, {userData.user.name}</h1>
        <div onClick={logOut}>
          <RiLogoutBoxRLine size={"24px"} color="white" />
        </div>
      </header>

      <main>
        {transactionList !== undefined &&
          transactionList.map((i, idx) => (
            <Transaction key={idx} transactionInfo={i} userData={userData}/>
          ))}

        <div className="overview">
          <h1>Saldo</h1>
          <p>{entradas - saidas}</p>
        </div>
      </main>

      <footer>
        <button onClick={() => addTransaction("income")}>
          <IoIosAddCircleOutline size={"22px"} color="white" />
          <p>Nova entrada</p>
        </button>
        <button onClick={() => addTransaction("outcome")}>
          <IoIosAddCircleOutline size={"22px"} color="white" />
          <p>Nova saída</p>
        </button>
      </footer>
    </StyledScreen>
  );
}
