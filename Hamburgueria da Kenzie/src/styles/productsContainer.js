import styled from 'styled-components';
export const StyledProductsContainer = styled.div`
  height: fit-content;
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  max-width: 410px;

  .clear {
    padding: 0 17px;
  }

  .result {
    margin: 30px 0px;
    color: var(--grey-100);
  }

  span {
    margin-left: 10px;
    color: var(--grey-50);
  }

  .button__clear {
    display: none;
  }

  @media (max-width: 410px) {
    .result {
      font-size: var(--font-size-3);
    }
  }

  @media (min-width: 900px) {
    max-width: unset;
    width: 60%;
    margin: 0;

    .clear {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .button__clear {
      display: inline-flex;
      width: 150px;
      height: 40px;
    }
  }
`;
