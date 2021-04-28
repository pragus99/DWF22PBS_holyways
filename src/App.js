import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContextProvider } from "./components/service/userContext";
import PrivateRoute from "./components/service/PrivateRoute";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Detail from "./components/pages/Detail";
import View from "./components/pages/View";
import Profile from "./components/pages/Profile";
import Fund from "./components/pages/Fund";
import Form from "./components/pages/Form";
import Logout from "./components/service/Logout";

import NotFound from "./components/NotFound";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/fund" component={Fund} />
          <PrivateRoute exact path="/form" component={Form} />
          <PrivateRoute exact path="/detail/:id" component={Detail} />
          <PrivateRoute exact path="/view/:id" component={View} />
          <PrivateRoute exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/logout" component={Logout} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContextProvider>
  );
}

export default App;
