import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px 14px;

  form {
    border: solid 1px red;
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 15px;

    input {
      border: none;
    }

    button {
      height: 45px;
      border: solid 2px black;
      border-radius: 8px;
      margin-left: 5px;
      cursor: pointer;
      padding: 0 15px;
    }

    button:hover {
      background-color: darkgreen;
      transition: 0.4s;
    }
  }
`;
