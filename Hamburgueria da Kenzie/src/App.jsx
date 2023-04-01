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
import { Flip, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const cartItems = localStorage.getItem('@CARTITEMS');

  const [listProducts, setListProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrenSale] = useState(
    cartItems ? JSON.parse(cartItems) : []
  );

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
    if (newList.length === 0) {
      toast.info('Nenhum item correspondente a pesquisa', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      toast.clearWaitingQueue();
    } else {
      setFilteredProducts(newList);
    }
  };

  const addCart = (productId) => {
    if (currentSale.some((product) => product.id === productId)) {
      toast.error('Este item já está no carrinho', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      const selectProduct = listProducts.find(
        (product) => product.id === productId
      );
      setCurrenSale([...currentSale, selectProduct]);
      toast.success('Item adicionado ao carrinho', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const removeCart = (producId) => {
    if (producId !== null) {
      const newList = currentSale.filter((product) => product.id !== producId);
      setCurrenSale(newList);
      toast.success('Item removido do carrinho com sucesso', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      setCurrenSale([]);
      toast.success('Todos os itens do carrinho foram removidos', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await api.get('products');
        setListProducts(response.data);
      } catch (error) {
        toast.error(error);
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
      <ToastContainer transition={Flip} autoClose={1500} limit={1} />
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
