import { useState, useEffect } from 'react';
import { Header } from './components/Header/index';
import { api } from './services/api';
import { Container } from './components/Container';
import { ProductList } from './components/ProductsList/index';
import { GlobalStyle } from './styles/global';
import { GlobalTypography } from './styles/typography';
import { FilteredContainer } from './components/FilterContainer';
import { CartContainer } from './components/CartContainer';
import { GlobalButtons } from './styles/buttons';

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
      const formatName = product.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

      const formatCategory = product.category
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
      const condiction =
        formatName.includes(
          text
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        ) ||
        formatCategory.toLowerCase().includes(
          text
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        );

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
      <GlobalButtons />
      <Header showProducts={showProducts} />
      <Container>
        {filteredProducts.length === 0 ? (
          <ProductList listProducts={listProducts} addCart={addCart} />
        ) : (
          <FilteredContainer
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            addCart={addCart}
          />
        )}
        <CartContainer currentSale={currentSale} removeCart={removeCart} />
      </Container>
    </div>
  );
}

export default App;
