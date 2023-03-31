import { createGlobalStyle } from 'styled-components';

export const GlobalButtons = createGlobalStyle`
  button{
    outline: none;
    cursor: pointer;
    border-radius: var(--radius-1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  .default__green{
    width: 130px;
    heigth: 40px;
    background-color: var(--color-primary);
    color: var(--white);
    border: 2px solid var(--color-primary);
    padding: 11.5px 20px;
    font-family: var(--font-family);
    font-weight: var(--weight-semi-bold);
    font-size: var(--font-size-4);
  }

  .default__green:hover{
    background-color: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
  }

  .default__grey{
    width: 130px;
    heigth: 40px;
    background-color: var(--grey-100);
    color: var(--grey-50);
    border: 2px solid var(--grey-100);
    padding: 11.5px 20px;
    font-family: var(--font-family);
    font-weight: var(--weight-semi-bold);
    font-size: var(--font-size-4);
  }

  .default__grey:hover{
    background-color: var(--grey-50);
    border: 2px solid var(--grey-50);
    color: var(--grey-20)
  }

  .medium__green{
    width: 130px;
    heigth: 40px;
    background-color: var(--color-primary);
    color: var(--white);
    border: 2px solid var(--color-primary);
    padding: 0 20px;
    font-family: var(--font-family);
    font-weight: var(--weight-semi-bold);
    font-size: var(--font-size-4);
  }

  .medium__green:hover{
    background-color: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
  }

  .medium__grey{
    width: 130px;
    heigth: 40px;
    background-color: var(--grey-100);
    color: var(--grey-50);
    border: 2px solid var(--grey-100);
    padding: 0 20px;
    font-family: var(--font-family);
    font-weight: var(--weight-semi-bold);
    font-size: var(--font-size-4);
  }

  .medium__grey:hover{
    background-color: var(--grey-50);
    border: 2px solid var(--grey-50);
    color: var(--grey-20)
  }
`;
