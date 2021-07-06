import * as uiActionsType from "./../constant/uiActionsType";

let initialState = {
  showLoading: false,
  showSidebar: true,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActionsType.SHOW_LOADING:
      state.showLoading = true;
      return { ...state };

    case uiActionsType.HIDDEN_LOADING:
      state.showLoading = false;
      return { ...state };
    case uiActionsType.SHOW_SIDEBAR:
      state.showSidebar = true;
      return { ...state };

    case uiActionsType.HIDDEN_SIDEBAR:
      state.showSidebar = false;
      return { ...state };

    default:
      return { ...state };
  }
};

export default myReducer;
