import * as modelActionsType from "./../constant/model";

export const showModel = () => {
  return {
    type: modelActionsType.SHOW_MODEL,
  };
};

export const hidenModel = () => {
  return {
    type: modelActionsType.HIDEN_MODEL,
  };
};

export const getTitleModel = (value) => {
  return {
    type: modelActionsType.GET_TITLE_MODEL,
    payload: { data: value },
  };
};

export const getComponentModel = (component) => {
  return {
    type: modelActionsType.GET_COMPONENT_MODEL,
    payload: { data: component },
  };
};
