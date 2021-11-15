import { toast } from "react-toastify";

export const ToastSuccess = (toastText: string) => {
  return toast.success(`${toastText}`, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const ToastError = (toastText: string) => {
  return toast.error(`${toastText}`, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const ToastWarning = (toastText: string) => {
  return toast.warning(`${toastText}`, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const ToastInfo = (toastText: string) => {
  return toast.info(`${toastText}`, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};
