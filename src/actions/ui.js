import * as uiActionsType from "./../constant/uiActionsType";

export const showLoading = () => {
  return {
    type: uiActionsType.SHOW_LOADING,
  };
};

export const hiddenLoading = () => {
  return {
    type: uiActionsType.HIDDEN_LOADING,
  };
};

export const showSidebar = () => {
  return {
    type: uiActionsType.SHOW_SIDEBAR,
  };
};

export const hiddenSidebar = () => {
  return {
    type: uiActionsType.HIDDEN_SIDEBAR,
  };
};
