import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRout from './components/PrivateRout/PrivateRout';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRout path="/inventory">
              <Inventory></Inventory>
            </PrivateRout>
            <PrivateRout path="/shipping">
              <Shipping></Shipping>
            </PrivateRout>
            <PrivateRout path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRout>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
