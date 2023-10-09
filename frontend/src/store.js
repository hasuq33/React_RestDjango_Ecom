import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ProductReducer,ProductDetailReducer } from './reducer/productReducer';
import { cartReducer } from './reducer/cartReducer';

const reducer = combineReducers({
    productList: ProductReducer,
    productDetails: ProductDetailReducer,
    cart:cartReducer,
});

const cartItemsStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: {cartItems: cartItemsStorage}
};

const middleware = [thunk];

const store = createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;
