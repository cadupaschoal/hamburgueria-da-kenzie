import { createGlobalStyle } from 'styled-components';

export const GlobalTypography = createGlobalStyle`

    .heading_1{
    font-family: var(--font-family);
    font-size: var(--font-size-1);
    font-weight: var(--weight-bold);
    color: var(--grey-100);
  }

  .heading_2{
    font-family: var(--font-family);
    font-size: var(--font-size-2);
    font-weight: var(--weight-bold);
    color: var(--grey-100);
  }

  .heading_3{
    font-family: var(--font-family);
    font-size: var(--font-size-3);
    font-weight: var(--weight-bold);
    color: var(--grey-100);
  }

  .heading_4{
    font-family: var(--font-family);
    font-size: var(--font-size-5);
    font-weight: var(--weight-bold);
    color: var(--grey-100);
  }

  .headline{
    font-family: var(--font-family);
    font-size: var(--font-size-3);
    font-weight: var(--weight-regular);
  }

  .body__regular{
    font-family: var(--font-family);
    font-size: var(--font-size-5);
    font-weight: var(--weight-regular);
  }

  .body__semi-bold{
    font-family: var(--font-family);
    font-size: var(--font-size-5);
    font-weight: var(--weight-semi-bold);
  }

  .caption{
    font-family: var(--font-family);
    font-size: var(--font-size-6);
    font-weight: var(--weight-regular);
  }
`;
