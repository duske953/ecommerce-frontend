import { toast } from 'react-toastify';

export function renderToastify(msg, autoClose) {
  const id = toast(msg, {
    isLoading: true,
    toastId: 'formValidating',
    autoClose,
    hideProgressBar: true,
  });
  return id;
}

export function updateToastify(id, msg, type, autoClose) {
  toast.update(id, {
    render: msg,
    type,
    isLoading: false,
    autoClose: 5000,
    hideProgressBar: true,
  });
}
