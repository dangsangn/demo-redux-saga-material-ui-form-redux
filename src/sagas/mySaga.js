import {
  //fork,
  //take,
  call,
  put,
  delay,
  takeLatest,
  // select,
  takeEvery,
} from "redux-saga/effects";
import { STATUS_CODE } from "./../constant/status_task";
import * as typesAction from "./../constant/actionsType";
import * as actionsTaskAPI from "./../apis/task";
import * as actionsUi from "./../actions/ui";
import * as actionsTask from "./../actions";
import * as actionsModel from "./../actions/model";

// function* watchFetchListTask() {
//   while (true) {
//     const action = yield take(typesAction.FETCH_TASK);
//     yield put(actionsUi.showLoading());
//     const resp = yield call(actionsTaskAPI.fetchTaskAPI, action.payload.data);
//     const { data, status } = resp;
//     if (status === STATUS_CODE.SUCCESS) {
//       yield put(actionsTask.fetchTasksSuccess(data));
//     } else {
//       yield put(actionsTask.fetchTasksError(data));
//     }
//     yield delay(1000);
//     yield put(actionsUi.hiddenLoading());
//   }
// }
function* watchFetchListTask({ payload }) {
  yield put(actionsUi.showLoading());
  const resp = yield call(actionsTaskAPI.fetchTaskAPI, payload.data);
  const { data, status } = resp;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(actionsTask.fetchTasksSuccess(data));
  } else {
    yield put(actionsTask.fetchTasksError(data));
  }
  yield delay(1000);
  yield put(actionsUi.hiddenLoading());
}

function* filterTask(value) {
  yield delay(500);
  const keyWord = value.payload.data;
  yield put(actionsTask.fetchTasks({ q: keyWord }));
}

function* addTaskSaga({ payload }) {
  yield put(actionsUi.showLoading());
  const res = yield call(actionsTaskAPI.addTaskAPI, payload.data);
  const { data, status } = res;
  console.log(status);
  if (status === 201) {
    yield put(actionsTask.addTaskSuccess(data));
    yield put(actionsModel.hidenModel());
  } else {
    yield put(actionsTask.addTaskError(data));
  }

  yield put(actionsUi.hiddenLoading());
}

function* edittingTaskSaga({ payload }) {
  const { data, id } = payload;
  yield put(actionsUi.showLoading());
  const res = yield call(actionsTaskAPI.editTaskAPI, data, id);
  const { data: datares, status } = res;
  if (status === 200) {
    yield put(actionsTask.edittingTaskSuccess(datares));
    yield put(actionsModel.hidenModel());
  } else {
    yield put(actionsTask.edittingTaskError(datares));
  }

  yield put(actionsUi.hiddenLoading());
}

function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  yield put(actionsUi.showLoading());
  const res = yield call(actionsTaskAPI.deleteTaskAPI, id);
  const { data, status } = res;
  if (status === 200) {
    yield put(actionsTask.deleteTaskSuccess(data));
  } else {
    yield put(actionsTask.deleteTaskError(data));
  }
  delay(1000);
  yield put(actionsUi.hiddenLoading());
}

function* rootSaga() {
  //yield fork(watchFetchListTask);
  yield takeEvery(typesAction.FETCH_TASK, watchFetchListTask);
  yield takeLatest(typesAction.FILTER_TASK, filterTask);
  yield takeEvery(typesAction.ADD_TASK, addTaskSaga);
  yield takeLatest(typesAction.EDITTING_TASK, edittingTaskSaga);
  yield takeLatest(typesAction.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
