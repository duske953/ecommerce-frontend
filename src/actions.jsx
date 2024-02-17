import { sendRequestToBackend } from './utilities/utility';
import { updateToastify, renderToastify } from './utilities/toastify';
import { redirect } from 'react-router-dom';

export async function signUpAction({ request }) {
  const id = renderToastify('Validating credentials');
  try {
    const formData = await request.formData();
    const data = {
      Name: formData.get('Name'),
      Email: formData.get('Email'),
      Password: formData.get('Password'),
      PasswordConfirm: formData.get('ConfirmPassword'),
    };
    await sendRequestToBackend('post', 'users', data, 'signup', 2000);
    updateToastify(id, 'Account created successfully', 'success');
    return 'authenticated';
  } catch (err) {
    updateToastify(
      id,
      `${err.response?.data?.message || 'Something went wrong'}`,
      'error',
      false
    );
  }
}

export async function loginAction({ request }) {
  const id = renderToastify('Logging in...');
  try {
    const formData = await request.formData();
    let data = {
      Email: formData.get('Email'),
      Password: formData.get('Password'),
    };
    await sendRequestToBackend('post', 'users', data, 'login');
    updateToastify(id, 'Logged in successfully', 'success', 2000);
    return 'authenticated';
  } catch (err) {
    updateToastify(
      id,
      `${err.response?.data?.message || 'Something went wrong'}`,
      'error',
      false
    );
  }
}

export async function productRouteAction({ params }) {
  return params;
}

export async function sendConfirmationEmail({ params }) {
  const id = renderToastify('Sending email');
  try {
    const response = await sendRequestToBackend(
      'post',
      'users',
      null,
      'confirm'
    );
    updateToastify(
      id,
      'Email sent. Please check your email box',
      'success',
      false
    );
    return redirect(`/user/${params.userId}`);
  } catch (err) {
    updateToastify(
      id,
      err.response?.data?.message || 'Something went wrong',
      'error',
      false
    );
  }
}

export async function updatePasswordAction({ request, params }) {
  const id = renderToastify('Updating password');
  try {
    const formData = await request.formData();
    const data = {
      oldPassword: formData.get('oldPassword'),
      newPassword: formData.get('newPassword'),
      passwordConfirm: formData.get('passwordConfirm'),
    };
    const response = await sendRequestToBackend(
      'patch',
      'users',
      data,
      'updatePassword',
      2000
    );
    updateToastify(id, response.data.message, 'success');
    return redirect(`/user/${params.userId}`);
  } catch (err) {
    updateToastify(
      id,
      err.response?.data?.message || 'Something went wrong',
      'error',
      false
    );
  }
}

export async function updateUserDetailsAction({ request, params }) {
  const id = renderToastify('Updating Details...');
  try {
    const formData = await request.formData();
    const data = {
      Name: formData.get('Name'),
      Email: formData.get('Email'),
    };
    const response = await sendRequestToBackend(
      'patch',
      'users',
      data,
      'updateMe',
      3000
    );
    updateToastify(id, 'Details changed', 'success');
    return {
      msg: 'ok',
      path: `/user/${params.userId}`,
    };
  } catch (err) {
    updateToastify(
      id,
      err.response?.data?.message || 'Something went wrong',
      'error',
      false
    );
  }
}

export async function forgotPassword({ request, params }) {
  const id = renderToastify('Processing...');
  try {
    const formData = await request.formData();
    const data = {
      Email: formData.get('Email'),
    };
    const response = await sendRequestToBackend(
      'post',
      'users',
      data,
      'forgotPassword'
    );
    updateToastify(id, response.data.message, 'success', false);
    return {
      status: response.status,
    };
  } catch (err) {
    updateToastify(
      id,
      err?.response?.data?.message || 'Something went wrong',
      'error',
      false
    );
  }
}

export async function resetPasswordAction({ request, params }) {
  const idToast = renderToastify('Processing...');
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    const formData = await request.formData();
    const data = {
      password: formData.get('Password'),
      confirmPassword: formData.get('ConfirmPassword'),
      id,
      Token: params.token,
    };
    const response = await sendRequestToBackend(
      'patch',
      'users',
      data,
      'resetPassword'
    );
    updateToastify(idToast, response.data.message, 'success');
    return redirect('/');
  } catch (err) {
    updateToastify(
      idToast,
      err?.response?.data?.message || 'Something went wrong',
      'error'
    );
  }
}
