export const CartTotal = ({ currentSale, removeCart }) => {
  const prices = currentSale.map((product) => product.price);
  const total = prices.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );

  return total === 0 ? null : (
    <div>
      <h3>
        Total:{' '}
        {total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
      </h3>
      <button onClick={() => removeCart(null)}>Remover todos</button>
    </div>
  );
};
