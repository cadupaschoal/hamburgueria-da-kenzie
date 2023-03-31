import { FilteredProductList } from '../FilteredProductsList/index';
import { StyledFilterdContainer } from '../../styles/fillteredContainer';

export const FilteredContainer = ({
  filteredProducts,
  setFilteredProducts,
  addCart,
}) => {
  return (
    <StyledFilterdContainer>
      <div className="clear">
        <h2 className="result heading_1">
          Resultados para:
          <span>
            {filteredProducts.length === 1
              ? filteredProducts[0].name
              : filteredProducts[0].category}{' '}
          </span>
        </h2>
        <button
          className="button__clear"
          onClick={() => setFilteredProducts([])}
        >
          Limpar Busca
        </button>
      </div>

      <FilteredProductList
        filteredProducts={filteredProducts}
        addCart={addCart}
      />
    </StyledFilterdContainer>
  );
};
