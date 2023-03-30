import { StyledHeader } from '../../styles/header';

export const Header = ({ showProducts }) => {
  return (
    <StyledHeader>
      <img src="" alt="Burger Kenzie" />
      <form>
        <input
          placeholder="Digitar pesquisa"
          onChange={(e) => showProducts(e.target.value)}
        />
        <button type="button">Pesquisar</button>
      </form>
    </StyledHeader>
  );
};
