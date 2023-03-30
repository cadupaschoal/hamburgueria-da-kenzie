import { useState, useEffect } from 'react';

export const ProductList = ({ listProducts, addCart }) => {
  //   console.log(listProducts);
  return (
    <ul>
      <h2>Produtos</h2>
      {listProducts.map((product) => (
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
