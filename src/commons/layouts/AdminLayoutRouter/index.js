import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Route } from "react-router-dom";
import Dashboard from "./../../../components/Dashboard";
function AdminLayoutRouter(props) {
  const { path, component, exact, name } = props;

  return (
    <Route path={path} exact={exact}>
      <Dashboard name={name}>{component}</Dashboard>
    </Route>
  );
}

export default withStyles(styles)(AdminLayoutRouter);
