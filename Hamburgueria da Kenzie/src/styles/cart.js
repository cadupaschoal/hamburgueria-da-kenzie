import styled from 'styled-components';

export const StyledCartList = styled.ul`
  .empty {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding: 60px 21px;
    background-color: var(--grey-0);

    p {
      color: var(--grey-50);
    }
  }

  .cart__list {
    position: relative;
    display: flex;
    padding: 20px 18px;

    img {
      width: 80px;
      height: 80px;
      margin-right: 15px;
      background-color: var(--grey-20);
      border-radius: var(--radius-1);
    }

    .text__container {
      display: flex;
      padding-top: 10px;
      flex-direction: column;
      gap: 10px;

      p {
        color: var(--grey-50);
      }
    }

    button {
      position: absolute;
      top: 30px;
      right: 20px;
      background: transparent;
      border: none;
      font-family: var(--font-family);
      font-weight: var(--font-weight-regular-2);
      font-size: var(--font-size-6);
      color: #bdbdbd;
    }

    button:hover {
      text-decoration: underline;
      color: var(--grey-100);
    }
  }

  .cart__title {
    background-color: var(--color-primary);
    padding: 22px 0 13px 21px;
    border-top-left-radius: var(--radius-1);
    border-top-right-radius: var(--radius-1);

    h2 {
      color: var(--white);
    }
  }

  @media (max-width: 380px) {
    .cart__list > button {
      top: 10px;
    }
  }
`;
