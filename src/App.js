import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Explores from './pages/AllProducts/Explores/Explores';
import Login from './pages/Authentication/Login/Login';
import Register from './pages/Authentication/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import AddProducts from './pages/ManageProducts/AddProducts/AddProducts';
// import MyOrder from './pages/MyOrders/MyOrders';
import PlaceOrder from './pages/OrderProducts/PlaceOrder/PlaceOrder';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/add_products">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/explore">
              <Header></Header>
              <Explores></Explores>
            </Route>
            <PrivateRoute path="/place_order/:orderId">
              <Header></Header>
            <PlaceOrder></PlaceOrder>  
            </PrivateRoute>
            {/* <Route path="/my-orders">
              <Header></Header>
            <MyOrder></MyOrder>
            </Route> */}
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
            </Route>
            <Route path="/register">
              <Header></Header>
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
