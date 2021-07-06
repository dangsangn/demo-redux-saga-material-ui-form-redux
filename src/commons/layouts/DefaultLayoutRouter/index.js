import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import { Route } from "react-router-dom";
function DefaultLayoutRouter(props) {
  const { path, component, exact } = props;

  return (
    <Route path={path} exact={exact}>
      {component}
    </Route>
  );
}

export default withStyles(styles)(DefaultLayoutRouter);
