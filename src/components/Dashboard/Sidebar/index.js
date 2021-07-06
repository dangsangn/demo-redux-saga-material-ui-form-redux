import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/styles";
import React from "react";
import styles from "./styles";
import { NavLink } from "react-router-dom";
import { routersAdmin } from "./../../../routers";
import { useSelector } from "react-redux";

function Dashboard(props) {
  const { classes } = props;
  const showSidebar = useSelector((state) => state.ui.showSidebar);

  const showList = (routers) => {
    let result = null;
    if (routers.length > 0) {
      result = routers.map((router) => {
        return (
          <NavLink
            to={router.path}
            exact={router.exact}
            className={classes.link}
            activeClassName={classes.active}
          >
            <ListItem button>{router.name}</ListItem>
          </NavLink>
        );
      });
    }
    return result;
  };

  return (
    <Drawer open={showSidebar} variant="persistent">
      <List
        className={classes.list}
        component="nav"
        aria-label="main mailbox folders"
      >
        {showList(routersAdmin)}
      </List>
    </Drawer>
  );
}

export default withStyles(styles)(Dashboard);
