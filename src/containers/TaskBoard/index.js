import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchBox from "../../components/SearchBox";
import * as actions from "./../../actions/index";
import FormControl from "./../../components/FormControl/index";
import ListTask from "./../../components/ListTask/index";
import { STATUS_TASK } from "./../../constant/status_task/index";
import styles from "./style";

function TaskBoard(props) {
  let { tasks, classes, taskActions } = props;
  let listTask = tasks.listTask;

  useEffect(() => {
    let { fetchTasks } = taskActions;
    fetchTasks();
    // eslint-disable-next-line
  }, []);

  const renderStatus = (statusTask) => {
    let result = null;
    if (statusTask.length > 0) {
      result = statusTask.map((status, index) => {
        let filterTask = listTask.filter(
          (task) => task.status === status.value
        );

        return (
          <Grid item sm={4} key={index}>
            <Box mb={2}>
              <Typography component="h1">{status.name}</Typography>
            </Box>
            <ListTask filterTask={filterTask} status={status} />
          </Grid>
        );
      });
    }
    return result;
  };

  // const handleOnchangeSearch = (e) => {
  //   let { filterTask } = taskActions;
  //   filterTask(e.target.value);
  // };

  return (
    <div className={(classes.container, classes.wide)}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <FormControl />
        {/* <SearchBox onChangeSearch={handleOnchangeSearch} mb={10} /> */}
      </Grid>
      <Grid container spacing={3} className={classes.status}>
        {renderStatus(STATUS_TASK)}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskActions: bindActionCreators(actions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
