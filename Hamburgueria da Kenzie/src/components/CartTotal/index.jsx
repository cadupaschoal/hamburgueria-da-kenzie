import { StyledCartTotal } from '../../styles/cartTotal';

export const CartTotal = ({ currentSale, removeCart }) => {
  const prices = currentSale.map((product) => product.price);
  const total = prices.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  return total === 0 ? null : (
    <StyledCartTotal>
      <div className="stripe"></div>
      <h3 className="body__semi-bold">
        Total:{' '}
        <span>
          {total.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </span>
      </h3>
      <button className="default__grey" onClick={() => removeCart(null)}>
        Remover todos
      </button>
    </StyledCartTotal>
  );
};
