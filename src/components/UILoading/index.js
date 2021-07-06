import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { connect } from "react-redux";
import styles from "./style";

class UILoading extends Component {
  render() {
    let { classes } = this.props;
    let { uiLoading } = this.props;
    if (uiLoading) {
      return (
        <div className={classes.container}>
          <img src="/images/loading.gif" alt="" className={classes.img} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    uiLoading: state.ui.showLoading,
  };
};
const connects = connect(mapStateToProps, null);

export default compose(withStyles(styles), connects)(UILoading);
