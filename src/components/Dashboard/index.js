import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/styles";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
function Dashboard(props) {
  const { children, name, classes } = props;
  const showSidebar = useSelector((state) => state.ui.showSidebar);
  return (
    <div>
      <Header name={name} />
      <div className={classes.wrapper}>
        <Sidebar />
        <div className={showSidebar ? classes.hasMargin : classes.noMargin}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Dashboard);
