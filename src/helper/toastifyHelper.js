import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const toastError = (message) => {
  if(message !== '' && message !== null && message !== undefined) {
    return toast.error(message);
  }
}

export const toastSucces = (message) => {
  if (message !== "" && message !== null && message !== undefined) {
    return toast.success(message);
  }
};
