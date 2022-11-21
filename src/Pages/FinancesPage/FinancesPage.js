import { StyledScreen } from "./FinacesStyle";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function MainPage({ userData }) {

    console.log(userData)

    const config = {
        headers: { Authorization: `Bearear ${userData.token.token}` },
      };

  useEffect(() => {

    axios
      .get("http://localhost:5000/transaction", config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const navigate = useNavigate()

  function logOut(e) {
    e.preventDefault()
    e.stopPropagation()

    const id = userData.user._id

    axios.delete(`https://localhost:5000/session/${id}`,config)
    .then(res=>{
        console.log(res.data)
    }).catch(err=> {
        console.log(err)
    })

    navigate("/")
  }

  function addTransaction(str){
    navigate(`/${str}`)
  }

  return (
    <StyledScreen>
      <header>
        <h1>Olá, {userData.user.name}</h1>
        <div onClick={logOut}>
          <RiLogoutBoxRLine size={"24px"} color="white" />
        </div>
      </header>

      <main>
        <p>olá</p>
      </main>

      <footer>
        <button onClick={()=>addTransaction("income")}>
          <IoIosAddCircleOutline size={"22px"} color="white" />
            <p>Nova entrada</p>
          
        </button>
        <button onClick={()=>addTransaction("outcome")}>
          <IoIosAddCircleOutline size={"22px"} color="white" />
            <p>Nova saída</p>
          
        </button>
      </footer>
    </StyledScreen>
  );
}
