import { Cart } from '../Cart/index';
import { CartTotal } from '../CartTotal/index';

export const CartContainer = ({ currentSale, removeCart }) => {
  return (
    <div className="total__container">
      <Cart currentSale={currentSale} removeCart={removeCart} />
      <CartTotal currentSale={currentSale} removeCart={removeCart} />
    </div>
  );
};
