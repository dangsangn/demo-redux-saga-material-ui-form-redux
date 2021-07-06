import serviceAxios from "./../commons/serviceAxios/serviceAxios";
import * as configURL from "./../constant/configURL/index";
import queryString from "query-string";

const url = "tasks";
export const fetchTaskAPI = (param = {}) => {
  let paramsString = "";
  if (Object.keys(param).length > 0) {
    paramsString = "?" + queryString.stringify(param);
  }
  return serviceAxios.get(`${configURL.URL}/${url}${paramsString}`);
};

export const addTaskAPI = (data) => {
  return serviceAxios.post(`${configURL.URL}/${url}`, data);
};

export const editTaskAPI = (data, id) => {
  return serviceAxios.put(`${configURL.URL}/${url}/${id}`, data);
};

export const deleteTaskAPI = (id) => {
  return serviceAxios.put(`${configURL.URL}/${url}/${id}`);
};
