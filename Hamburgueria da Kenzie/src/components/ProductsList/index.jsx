import { useState, useEffect } from 'react';
import { StyledList } from '../../styles/list';
import { StyledProductsContainer } from '../../styles/productsContainer';

export const ProductList = ({ listProducts, addCart }) => {
  return (
    <StyledProductsContainer>
      <StyledList>
        {listProducts.map((product) => (
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
      </StyledList>
    </StyledProductsContainer>
  );
};
