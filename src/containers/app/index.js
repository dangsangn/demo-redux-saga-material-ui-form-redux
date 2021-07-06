import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./../../commons/theme/index";
import configureStore from "./../../redux/configureStore";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import UILoading from "./../../components/UILoading/index";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AdminLayoutRouter from "./../../commons/layouts/AdminLayoutRouter";
import DefaultLayoutRouter from "./../../commons/layouts/DefaultLayoutRouter";
import { routersAdmin, routersDefault } from "../../routers";
import CssBaseline from "@material-ui/core/CssBaseline";
const store = configureStore();
function App() {
  //let {classes} = this.props;
  const showRouterAdmin = (routers) => {
    let result = null;
    if (routers.length > 0) {
      result = routers.map((router) => {
        return (
          <AdminLayoutRouter
            key={router.path}
            path={router.path}
            component={router.main}
            exact={router.exact}
            name={router.name}
          />
        );
      });
    }
    return result;
  };

  const showRouterDefault = (routers) => {
    let result = null;
    if (routers.length > 0) {
      result = routers.map((router) => {
        return (
          <DefaultLayoutRouter
            key={router.path}
            path={router.path}
            component={router.main}
            exact={router.exact}
            name={router.name}
          />
        );
      });
    }
    return result;
  };
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            {showRouterAdmin(routersAdmin)}
            {showRouterDefault(routersDefault)}
          </Switch>
          <UILoading />
          <ToastContainer />
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default withStyles(styles)(App);
