import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Transaction({ transactionInfo, userData }) {
  let navigate = useNavigate();

  const config = {
    headers: { Authorization: `Bearear ${userData.token.token}` },
  };

  function deleteTransaction(id) {
    axios
      .delete(`http://localhost:5000/transaction/${id}`, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }

  function updateTransaction(type) {
    if (type === "outcome") {
      navigate("/updateOutcome");
    } else {
      navigate("/updateIncome");
    }
  }

  return (
    <StyledTransaction isIncome={transactionInfo.type === "income"}>
      <p className="time">{transactionInfo.date}</p>
      <p
        className="description"
        onClick={() => updateTransaction(transactionInfo.type)}
      >
        {transactionInfo.description}
      </p>
      <p className="value">{transactionInfo.value}</p>
      <div onClick={() => deleteTransaction(transactionInfo._id)}>x</div>
    </StyledTransaction>
  );
}

const StyledTransaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 30px;

  margin-left: 13px;

  position: relative;

  .time {
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #c6c6c6;

    position: absolute;
  }

  .description {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
    position: absolute;
    left: 60px;
  }

  .value {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;

    color: ${(props) => (props.isIncome ? "#03ac00" : "#C70000")};
    position: absolute;
    right: 31px;
  }

  div {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #c6c6c6;

    position: absolute;
    right: 10px;
  }
`;
