import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsTask from "./../../actions/index";
import * as actionsModel from "./../../actions/model";
import styles from "./styles";
import * as toastify from "./../../helper/toastifyHelper";
function FormControlTask(props) {
  let { classes, model, actionsModel, actionsTask } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(0);
  const edittingTask = useSelector((state) => state.tasks.edittingTask);
  const handleClose = () => {
    actionsModel.hidenModel();
  };

  useEffect(() => {
    if (edittingTask?.id) {
      setTitle(edittingTask.title);
      setDescription(edittingTask.description);
      setStatus(+edittingTask.status);
    }
  }, [edittingTask]);

  const handleClickOpen = () => {
    actionsModel.showModel();
    actionsModel.getTitleModel("Add Task");
    actionsTask.getEdittingTask(null);
    setTitle("");
    setDescription("");
    setStatus(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const newData = { ...data, status: +data.status };
    if (!newData.title || !newData.description) {
      toastify.toastError("vui long nhap du");
    } else {
      if (edittingTask) {
        actionsTask.edittingTask(newData, edittingTask.id);
      } else {
        actionsTask.addTask(newData);
        setTitle("");
        setDescription("");
        setStatus(0);
      }
      // actionsModel.hidenModel();
    }
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        <AddIcon />
        Thêm công việc
      </Button>

      <Dialog
        open={model.showModel}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{model.title}</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="title"
              label="Name Task"
              type="nameTask"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Description"
              name="description"
              type="descriptionTask"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
            />
            <FormControl className={classes.fromSelect}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => setStatus(e.target.value)}
                name="status"
                value={status}
              >
                <MenuItem value={0}>Start</MenuItem>
                <MenuItem value={1}>In process</MenuItem>
                <MenuItem value={2}>Completed</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button variant="contained" type="submit" color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

FormControl.propTypes = {
  className: PropTypes.object,
  model: PropTypes.bool,
  actionsModel: PropTypes.shape({
    hidenModle: PropTypes.func,
    showModel: PropTypes.func,
    getTitleModel: PropTypes.func,
  }),
};

const mapStateToProps = (state) => {
  return {
    model: state.model,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionsModel: bindActionCreators(actionsModel, dispatch),
    actionsTask: bindActionCreators(actionsTask, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(FormControlTask)
);
