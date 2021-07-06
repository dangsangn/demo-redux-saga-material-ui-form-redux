import * as modelActionsType from "./../constant/model";

let initialState = {
  showModel: false,
  title: "",
  component: null,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case modelActionsType.HIDEN_MODEL:
      return { ...state, showModel: false };

    case modelActionsType.SHOW_MODEL:
      return { ...state, showModel: true };

    case modelActionsType.GET_TITLE_MODEL:
      return { ...state, title: action.payload.data };

    case modelActionsType.GET_COMPONENT_MODEL:
      return { ...state, component: action.payload.data };

    default:
      return state;
  }
};

export default myReducer;
