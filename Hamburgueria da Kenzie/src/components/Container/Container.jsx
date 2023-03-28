import { ProductList } from '../ProductsList/ProducList';
import { Cart } from '../Cart/Cart'
 export const Container = ({children}) => {
    return(
        <div>
            <ProductList/>
            <Cart/>
        </div>
    );
};