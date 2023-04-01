import styled from 'styled-components';

export const StyledList = styled.ul`
  width: 100%;
  padding: 15px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 20px;
  max-width: 410px;
  margin: 0 auto;

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    background-color: var(--grey-0);

    img {
      max-height: 200px;
      object-fit: ;
    }
  }

  .card__title {
    padding-bottom: 10px;
    margin: 15px 0 0 21px;
    font-size: var(--font-size-3);
  }

  .card__category {
    color: var(--grey-50);
    margin: 0 0 14px 21px;
  }

  .card__price {
    color: var(--color-primary);
    margin: 0 0 14px 21px;
  }

  button {
    margin: 0 0 14px 21px;
  }

  li {
    min-width: 300px;
    height: 345px;
    border: solid 2px var(--grey-20);
    border-radius: var(--raidus-1);
  }

  @media (min-width: 900px) {
    margin: 0;
    max-width: unset;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    li {
      min-width: 250px;
      height: 345px;
      border: solid 2px var(--grey-20);
      border-radius: var(--raidus-1);
    }

    li:hover {
      border: solid 2px var(--grey-100);
      transition: 0.4s;
    }
  }
`;
