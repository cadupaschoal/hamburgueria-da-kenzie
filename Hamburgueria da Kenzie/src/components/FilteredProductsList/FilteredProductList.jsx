export const FilteredProductList = ({ filteredProducts }) => {
  console.log(filteredProducts);
  return (
    <ul>
      {filteredProducts.map((product) => (
        <li key={product.id}>
          <h2 className="heading_1">{product.name}</h2>
          <p>{product.category}</p>
          <p>
            {product.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <button onClick={() => addCart(product.id)}>Adicionar</button>
        </li>
      ))}
    </ul>
  );
};
