import styled from "styled-components"

export const StyledScreen = styled.div`

display: flex;
flex-direction: column;
align-items: center;
background-color:purple;

width:100%;
height: 100vh;

header{

    width: 326px;
    
    margin: 25px;

    display: flex;
    flex-direction: row;
    justify-content:space-between;

    h1{
        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;

        color: #FFFFFF;
    }

}

main{
    width: 326px;
    height: 446px;

    margin-bottom: 13px;

    background-color: #FFFFFF;
    border-radius: 5px;

    position: relative;
    .overview{
        width: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: absolute;
        left:15px;
        bottom:10px;

        h1{
            font-family: 'Raleway',sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 20px;

            color: #000000;
        }

        p{
            color: ${props=> props.isPositive ? "#03ac00":"#C70000"} ; 
        }
    }
}

footer{

    width: 326px;
    display: flex;
    justify-content: space-between;

    
    button{
        width: 155px;
        height: 114px;

        padding:10px;

        background: #A328D6;
        border-radius: 5px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: start;

        p{
            width: 64px;
            height: 40px;

            font-family: 'Raleway',sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            text-align:left;

            color: #FFFFFF;
        }
    }

}
`