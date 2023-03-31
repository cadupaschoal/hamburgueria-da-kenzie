import { StyledFilteredList } from '../../styles/filteredList';

export const FilteredProductList = ({ filteredProducts, addCart }) => {
  console.log(filteredProducts);
  return (
    <StyledFilteredList>
      {filteredProducts.map((product) => (
        <li key={product.id}>
          <figure>
            <img src={product.img} alt={product.name} />
          </figure>
          <h2 className="heading_1 card__title">{product.name}</h2>
          <p className="card__category caption">{product.category}</p>
          <p className="body__semi-bold card__price">
            {product.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
          <button
            className="default__green"
            onClick={() => addCart(product.id)}
          >
            Adicionar
          </button>
        </li>
      ))}
    </StyledFilteredList>
  );
};
