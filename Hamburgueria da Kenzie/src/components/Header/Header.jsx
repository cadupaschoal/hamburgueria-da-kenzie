import { StyledHeader } from './style';

export const Header = () => {
    return(
        <StyledHeader>
            <img src="" alt="Burger Kenzie" />
            <form>
                <input placeholder="Digitar pesquisa"/>
                <button type="submit">Pesquisar</button>
            </form>
        </StyledHeader>
    );
};