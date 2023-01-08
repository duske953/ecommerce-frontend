import { redirect } from "react-router-dom";
import { verifyUser, sendRequestToBackend } from "./utilities/utility";

export async function homeRouteLoader({ request }) {
  try {
    const response = await sendRequestToBackend("get", "products", null, null);
    return response;
  } catch (err) {
    return err;
  }
}

export function logoutLoader() {
  return redirect("/");
}

export function productInfoRouteLoader({ params }) {
  return params;
}

export function productSearchLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const pageNumber = url.searchParams.get("page");
  return { q, pageNumber };
}

export async function productsRouteLoader({ request }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const page = url.searchParams.get("page");
  const category = url.searchParams.get("category");
  return { id, page, category };
}

export async function activateAccountLoader({ params }) {
  try {
    const response = await sendRequestToBackend(
      "patch",
      "users",
      null,
      `activate/${params.id}`
    );
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (err) {
    return {
      status: err.response.status,
      message: err.response.data.message,
    };
  }
}

export async function stripePaymentLoader({ params }) {
  try {
    const response = await sendRequestToBackend(
      "post",
      "users",
      {
        id: params.id,
      },
      "process-checkout"
    );
    return {
      status: response.status,
      paymentIntent: response.data.paymentIntent,
    };
  } catch (err) {
    return {
      status: err.response?.status,
      msg: err.response?.data?.message,
      err,
    };
  }
}

export async function paymentSuccessLoader({ request }) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    const response = await sendRequestToBackend(
      "patch",
      "products",
      { id },
      "deleteProductFromCart"
    );
    await sendRequestToBackend("post", "users", { id }, "sendMail");
    return {
      status: response.status,
    };
  } catch (err) {
    return {
      status: err.response.status,
      err,
    };
  }
}

export async function checkValidPasswordResetTokenLoader({ request, params }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  try {
    const response = await sendRequestToBackend(
      "post",
      "users",
      { Token: params.token, id },
      "resetPassword"
    );
    return {
      status: response.status,
    };
  } catch (err) {
    return {
      status: err.response.status,
      err,
    };
  }
}
