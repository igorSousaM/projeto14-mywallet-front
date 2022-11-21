import styled from "styled-components";

export const StyledMain = styled.div`
  box-sizing: border-box;

  background-color: purple;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 326px;
    margin-top: 25px;
    margin-bottom: 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-family: "Raleway", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;

      color: #ffffff;
    }
  }

  main {
    form {
      display: flex;
      flex-direction: column;

      input {
        width: 326px;
        height: 58px;

        margin-bottom: 13px;

        box-sizing: border-box;
        background: #ffffff;
        border-radius: 5px;

        ::placeholder {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 23px;

          color: #000000;
        }
      }

      button {
        width: 326px;
        height: 46px;

        background: #a328d6;
        border-radius: 5px;

        font-family: "Raleway", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;

        color: #ffffff;
      }
    }
  }
`;
