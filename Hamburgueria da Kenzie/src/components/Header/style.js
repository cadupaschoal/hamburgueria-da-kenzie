import styled from 'styled-components';


export const StyledHeader = styled.header`
    border: 2px solid black;
    margin: 20px;
    background-color: gold .2;
    box-shadow: 0 0 20px 0 rgba (0,0,0,.2);
    display: flex;
    flex-direction: column;
    gap: 10px;

    button{
        background-color: green;
        color: white;
        height: 45px;
        border: solid 2px yellowgreen;
        border-radius: 8px;
        margin-left: 5px;
        cursor:pointer;
    }

    button:hover{
        background-color: darkgreen;
        transition: .4s;
    }
    
`