import { toast } from "react-toastify";

export function renderToastify(msg) {
  const id = toast(msg, { isLoading: true, toastId: "formValidating" });
  return id;
}

export function updateToastify(id, msg, type) {
  toast.update(id, {
    render: msg,
    type,
    isLoading: false,
    autoClose: true,
  });
}
