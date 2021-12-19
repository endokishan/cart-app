import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Navigation from './components/Navigation';
import ProductsPage from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';
import {CartContext} from './CartContext';
import {useState, useEffect} from 'react';
import {getCart, storeCart} from './helper';

const App = () => {
    const [cart, setCart] = useState({});
    useEffect(() => {
        getCart().then(cart => {
            setCart(JSON.parse(cart));
        });
    }, []);

    useEffect(() => {
        storeCart(JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            <Router>
                <CartContext.Provider value={{cart, setCart}}>
                    <Navigation/>
                    <Switch>
                        <Route path="/" component={Home} exact></Route>
                        <Route path="/products" exact component={ProductsPage}></Route>
                        <Route path="/product/:_id" component={Product}></Route>
                        <Route path="/cart" component={Cart}></Route>
                    </Switch>
                </CartContext.Provider>
            </Router>
        </>
    )
}

export default App;