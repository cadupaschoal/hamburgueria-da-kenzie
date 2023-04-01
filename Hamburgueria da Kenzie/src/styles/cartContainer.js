import styled from 'styled-components';

export const StyledCartContainer = styled.div`
  width: 95%;
  max-width: 410px;
  height: fit-content;
  margin: 30px auto 0px auto;

  @media (min-width: 900px) {
    margin: 0;
    width: 35%;
  }
`;
