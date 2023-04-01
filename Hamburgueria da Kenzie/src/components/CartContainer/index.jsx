import { Cart } from '../Cart/index';
import { CartTotal } from '../CartTotal/index';
import { StyledCartContainer } from '../../styles/cartContainer';

export const CartContainer = ({ currentSale, removeCart }) => {
  return (
    <StyledCartContainer>
      <Cart currentSale={currentSale} removeCart={removeCart} />
      <CartTotal currentSale={currentSale} removeCart={removeCart} />
    </StyledCartContainer>
  );
};
