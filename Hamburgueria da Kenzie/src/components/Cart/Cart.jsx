export const Cart = ({ currentSale, removeCart }) => {
  return (
    <ul>
      <h2>Carrinho</h2>
      {currentSale.length === 0 ? (
        <li>
          <h2>Sua sacola está vazia</h2>
        </li>
      ) : (
        currentSale.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <button onClick={() => removeCart(product.id)}>Remover</button>
          </li>
        ))
      )}
    </ul>
  );
};
