import styled from "styled-components"

export const StyledScreen = styled.div`

display: flex;
flex-direction: column;
align-items: center;
background-color:purple;

width:100%;
height: 667px;

header{

    width: 100%;
    
    margin: 25px;

    display: flex;
    flex-direction: row;
    justify-content:space-between;

    h1{
        margin-left: 25px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;

        color: #FFFFFF;
    }

    div{
        margin-right: 25px;
        width: 24px;
    }
}

main{
    width: 90%;
    height: 446px;

    margin-bottom: 13px;

    background-color: #FFFFFF;
    border-radius: 5px;
}

footer{
    width: 90%;


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

            font-family: 'Raleway';
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