import { StyledCartList } from '../../styles/cart';

export const Cart = ({ currentSale, removeCart }) => {
  return (
    <StyledCartList>
      <div className="cart__title">
        <h2 className="heading_3">Carrinho de compras</h2>
      </div>
      {currentSale.length === 0 ? (
        <li className="empty">
          <h2 className="heading_3">Sua sacola está vazia</h2>
          <p className="body__regular">Adicione itens</p>
        </li>
      ) : (
        currentSale.map((product) => (
          <li key={product.id} className="cart__list">
            <img src={product.img} alt={product.name} />
            <div className="text__container">
              <h2 className="heading_3">
                {product.name.length < 14
                  ? product.name
                  : `${product.name.substring(0, 15)}...`}
              </h2>
              <p className="body__regular">{product.category}</p>
            </div>
            <button onClick={() => removeCart(product.id)}>Remover</button>
          </li>
        ))
      )}
    </StyledCartList>
  );
};
