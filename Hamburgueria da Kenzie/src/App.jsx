import { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { api } from './services/api';
import { ProductList } from './components/ProductsList/ProducList';
import { Cart } from './components/Cart/Cart';
import { CartTotal } from './components/CartTotal/CartTotal';
import { GlobalStyle } from './styles/global';
import { GlobalTypography } from './styles/typography';
import { FilteredProductList } from './components/FilteredProductsList/FilteredProductList';

function App() {
  const cartItems = localStorage.getItem('@CARTITEMS');

  const [listProducts, setListProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrenSale] = useState(
    cartItems ? JSON.parse(cartItems) : []
  );

  console.log(filteredProducts);

  const showProducts = (text) => {
    const newList = listProducts.filter((product) => {
      const condiction =
        product.name.toLowerCase().includes(text) ||
        product.category.toLowerCase().includes(text);

      if (condiction) {
        return product;
      }
    });
    setFilteredProducts(newList);
  };

  const addCart = (productId) => {
    if (currentSale.some((product) => product.id === productId)) {
      alert('Este item já está no carrinho');
    } else {
      const selectProduct = listProducts.find(
        (product) => product.id === productId
      );
      setCurrenSale([...currentSale, selectProduct]);
    }
  };

  const removeCart = (producId) => {
    if (producId !== null) {
      const newList = currentSale.filter((product) => product.id !== producId);
      setCurrenSale(newList);
    } else {
      setCurrenSale([]);
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await api.get('products');
        setListProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('@CARTITEMS', JSON.stringify(currentSale));
  }, [currentSale]);

  return (
    <div className="App">
      <GlobalStyle />
      <GlobalTypography />
      <Header showProducts={showProducts} />
      <div className="container">
        {filteredProducts.length === 0 ? (
          <ProductList listProducts={listProducts} addCart={addCart} />
        ) : (
          <div className="filter__container">
            <div className="clear">
              <h2>
                Resultados para:
                {filteredProducts.length === 1
                  ? filteredProducts[0].name
                  : filteredProducts[0].category}{' '}
              </h2>
              <button onClick={() => setFilteredProducts([])}>
                Limpar Busca
              </button>
            </div>

            <FilteredProductList filteredProducts={filteredProducts} />
          </div>
        )}
        <div className="cart__container">
          <Cart currentSale={currentSale} removeCart={removeCart} />
          <CartTotal currentSale={currentSale} removeCart={removeCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
