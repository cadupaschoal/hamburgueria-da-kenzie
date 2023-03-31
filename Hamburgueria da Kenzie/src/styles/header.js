import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 16px 14px;
  background-color: var(--grey-0);

  img {
    width: 160px;
    height: 37px;
  }

  form {
    border: solid 2px var(--grey-20);
    border-radius: var(--radius-1);
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 15px;
    width: 100%;
    height: 60px;

    input {
      border: none;
      font-family: var(--font-family);
      font-size: var(--font-size-5);
      color: var(--grey-50);
      ::placeholder {
        font-family: var(--font-family);
        font-size: var(--font-size-5);
        color: var(--grey-20);
      }

      :focus {
        outline: none;
      }
    }

    button {
      font-weight: var(--weight-regular-2);
      font-size: var(--font-size-5);
      width: 105px;
    }
  }
`;
