import styled from "styled-components"

export const StyledMain = styled.main`

    display:flex;
    flex-direction: column;
    align-items: center;

    background-color: purple;
    width:100%;
    height: 667px;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;

        color: #FFFFFF;

        margin-top: 159px;
        margin-bottom: 24px;
    }

    form{
        display:flex;
        flex-direction: column;

        input{
            width: 326px;
            height: 58px;
                    
            margin-bottom: 13px;

            background: #FFFFFF;
            border-radius: 5px;

            ::placeholder {
                font-family: 'Raleway', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 23px;

                color: #000000;
            }
        }

        button{
            width: 326px;
            height: 46px;
            background: #A328D6;
            border-radius: 5px;

            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;

            color: #FFFFFF;
        }
    }


    p{
        margin-top: 36px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        
        color: #FFFFFF;
    }


`