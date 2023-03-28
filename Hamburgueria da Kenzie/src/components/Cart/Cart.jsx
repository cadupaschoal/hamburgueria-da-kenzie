import { CartProduct } from '../CartProduct/CartProduct';

export const Cart = ({children}) => {
    return(
        <ul>
            <CartProduct/>
        </ul>
    );
};