import './App.css';
import { Switch, Route, NavLink } from 'react-router-dom';
import ClientsContainer from './modules/Clients/containers/Clients.container';
import OrdersContainer from './modules/Orders/containers/Orders.container';

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/clients">Clients</NavLink>
        <NavLink to="/orders">Orders</NavLink>
      </div>
      <div>
        <Switch>
          <Route path="/clients" component={ClientsContainer} />
          <Route path="/orders" component={OrdersContainer} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
