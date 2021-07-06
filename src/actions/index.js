//import * as taskActionAPI from './../apis/task';
import * as actionsType from "./../constant/actionsType/index";

export const fetchTasks = (data) => {
  return {
    type: actionsType.FETCH_TASK,
    payload: { data },
  };
};

export const fetchTasksSuccess = (data) => {
  return {
    type: actionsType.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchTasksError = (err) => {
  return {
    type: actionsType.FETCH_TASK_ERROR,
    payload: {
      err,
    },
  };
};

export const filterTask = (keyWord) => {
  return {
    type: actionsType.FILTER_TASK,
    payload: {
      data: keyWord,
    },
  };
};

export const filterTaskSuccess = (data) => {
  return {
    type: actionsType.FILTER_TASK_SUCCESS,
    payload: { data },
  };
};

export const addTask = (task) => {
  return {
    type: actionsType.ADD_TASK,
    payload: { data: task },
  };
};

export const addTaskSuccess = (data) => {
  return {
    type: actionsType.ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const addTaskError = (err) => {
  return {
    type: actionsType.ADD_TASK_ERROR,
    payload: {
      err,
    },
  };
};

export const getEdittingTask = (data) => {
  return {
    type: actionsType.GET_EDITTING_TASK,
    payload: {
      data,
    },
  };
};

export const edittingTask = (data, id) => {
  return {
    type: actionsType.EDITTING_TASK,
    payload: {
      data,
      id,
    },
  };
};

export const edittingTaskSuccess = (data) => {
  return {
    type: actionsType.EDITTING_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const edittingTaskError = (error) => {
  return {
    type: actionsType.EDITTING_TASK,
    payload: {
      error,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: actionsType.DELETE_TASK,
    payload: {
      id,
    },
  };
};

export const deleteTaskSuccess = (id) => {
  return {
    type: actionsType.DELETE_TASK_SUCCESS,
    payload: {
      id,
    },
  };
};

export const deleteTaskError = (error) => {
  return {
    type: actionsType.DELETE_TASK,
    payload: {
      error,
    },
  };
};

//luồng đi:
//b1: gọi fetchTaskRequest
//b2: reset state = []
//b3: gọi fetchTaskSuccess nếu thành công hoặc fetchTaskError nếu thất bại

// export const fetchTasksRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchTasks());
//     taskActionAPI
//       .fetchTaskAPI()
//       .then((res) => {
//         dispatch(fetchTasksSuccess(res.data));
//       })
//       .catch((err) => {
//         dispatch(fetchTasksError(err));
//       });
//   };
// }
