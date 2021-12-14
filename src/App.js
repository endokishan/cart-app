import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages/Home"
import Navigation from './components/Navigation';
import ProductsPage from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';

const App = () => {
    return (
        <>
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/products" exact component={ProductsPage}></Route>
                    <Route path="/product/:_id" component={Product}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;