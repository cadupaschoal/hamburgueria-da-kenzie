import { StyledHeader } from '../../styles/header';
import { useState } from 'react';
import Logo from '../../assets/images/logo.svg';

export const Header = ({ showProducts }) => {
  const [inputValue, setInputValue] = useState('');
  const handleShowProducts = (value) => {
    showProducts(value);
    setInputValue('');
  };
  return (
    <StyledHeader>
      <img src={Logo} alt="Burger Kenzie" />
      <form
        onSubmit={(e) => (
          e.preventDefault(),
          inputValue === '' ? null : handleShowProducts(inputValue)
        )}
      >
        <input
          value={inputValue}
          placeholder="Digitar pesquisa"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="medium__green" type="submit">
          Pesquisar
        </button>
      </form>
    </StyledHeader>
  );
};
/* */
