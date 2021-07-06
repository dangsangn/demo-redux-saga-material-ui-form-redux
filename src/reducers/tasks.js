import * as actionsType from "./../constant/actionsType/index";
import * as toastify from "./../helper/toastifyHelper";

let initialState = {
  listTask: [],
  edittingTask: null,
};

const findIndex = (arr, id) => {
  let result = -1;
  if (arr.length > 0) {
    result = arr.findIndex((item) => item.id === id);
  }
  return result;
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.FETCH_TASK:
      return { ...state, listTask: [] };

    case actionsType.FETCH_TASK_SUCCESS:
      //toastify.toastSucces("Xin chào trở lại!");

      return { ...state, listTask: action.payload.data };

    case actionsType.FETCH_TASK_ERROR:
      state = [];
      toastify.toastError(action.payload.err.message);
      return state;

    case actionsType.ADD_TASK:
      return { ...state };

    case actionsType.ADD_TASK_SUCCESS:
      state.listTask.unshift(action.payload.data);
      return { ...state };

    case actionsType.ADD_TASK_ERROR:
      toastify.toastError(action.payload.err);
      return state;

    case actionsType.FILTER_TASK_SUCCESS:
      return { ...state, listTask: action.payload.data };

    case actionsType.GET_EDITTING_TASK:
      return { ...state, edittingTask: action.payload.data };

    case actionsType.EDITTING_TASK_SUCCESS:
      const indexEdit = findIndex(state.listTask, action.payload.data.id);
      console.log(action.payload.data);
      return {
        ...state,
        listTask: [
          ...state.listTask.slice(0, indexEdit),
          action.payload.data,
          ...state.listTask.slice(indexEdit + 1),
        ],
      };
    case actionsType.EDITTING_TASK_ERROR:
      toastify.toastError(action.payload.err);
      return { ...state };

    case actionsType.DELETE_TASK_SUCCESS:
      const indexDel = findIndex(state.listTask, action.payload.id.id);
      state.listTask.splice(indexDel, 1);
      return {
        ...state,
      };

    case actionsType.DELETE_TASK_ERROR:
      toastify.toastError(action.payload.err);
      return { ...state };

    default:
      return state;
  }
};

export default myReducer;
