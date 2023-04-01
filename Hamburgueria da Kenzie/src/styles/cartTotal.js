import styled from 'styled-components';

export const StyledCartTotal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 20px 10px;

  .stripe {
    width: 90%;
    height: 2px;
    background-color: var(--grey-20);
    margin: 0 auto;
  }

  h3 {
    display: inline-flex;
    justify-content: space-between;
    padding: 14px 0 22px 0;
  }
  span {
    display: inline-block;
    color: var(--grey-50);
  }

  button {
    width: 100%;
    background-color: var(--grey-20);
    border: 2px solid var(--grey-20);
  }

  button:hover {
    background-color: var(--grey-50);
    border: 2px solid var(--grey-50);
    color: var(--grey-20);
  }
`;
