import styled from 'styled-components';

export const StyledFilterdContainer = styled.div`
  /* border: solid 2px red; */
  height: 465px;
  display: flex;
  flex-direction: column;

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
`;
