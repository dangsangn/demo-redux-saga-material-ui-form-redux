import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";
import styles from "./style";

SearchBox.propTypes = {};

function SearchBox(props) {
  const { classes, onChangeSearch } = props;
  return (
    <TextField
      id="standard-basic"
      label="Tìm kiếm"
      name="search-task"
      className={classes.search}
      onChange={onChangeSearch}
    />
  );
}

export default withStyles(styles)(SearchBox);
