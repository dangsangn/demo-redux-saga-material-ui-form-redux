import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, getEdittingTask } from "../../actions";
import { getTitleModel, showModel } from "../../actions/model";

function TaskItem(props) {
  const disPatch = useDispatch();
  let { item, status } = props;

  const handleEdittingTask = () => {
    disPatch(showModel());
    disPatch(getTitleModel("Editting task"));
    disPatch(
      getEdittingTask({
        id: item.id,
        title: item.title,
        description: item.description,
        status: status.value,
      })
    );
  };

  const handleDeleteTask = () => {
    disPatch(deleteTask(item.id));
  };

  return (
    <div>
      <Box mt={2}>
        <Card>
          <CardContent>
            <Typography component="h2">{item.title}</Typography>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>{item.description}</Grid>
              <Grid item>{status.name}</Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Box ml={1} onClick={handleEdittingTask}>
                <Fab size="small" color="primary">
                  <EditIcon fontSize="small" />
                </Fab>
              </Box>
              <Box ml={1}>
                <Fab size="small" color="secondary" onClick={handleDeleteTask}>
                  <DeleteIcon fontSize="small" />
                </Fab>
              </Box>
            </Grid>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default TaskItem;
