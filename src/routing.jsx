import { createBrowserRouter } from 'react-router-dom';
import HomeRoute from './routes/HomeRoute';
import LoginRoute from './routes/LoginRoute';
import SignupRoute from './routes/SignupRoute';
import ProductInfoRoute from './routes/ProductInfoRoute';
import ProductsRoute from './routes/productsRoute';
import ProductSearchRoute from './routes/ProductSearchRoute';
import UserAccountRoute from './routes/dashboard/userAccountRoute';
import ActivateAccountRoute from './routes/ActivateAccountRoute';
import UserInfo from './routes/dashboard/UserInfo';
import UpdatePassword from './routes/dashboard/UpdatePassword';
import PaymentRoute from './routes/PaymentRoute';
import ConfirmEmail from './routes/dashboard/ConfirmEmail';
import DeleteAccount from './routes/dashboard/DeleteAccount';
import CartRoute from './routes/CartRoute';
import ErrorPage from './routes/ErrorPage';
import PaymentSuccess from './routes/PaymentSuccess';
import ForgotPassword from './routes/ForgotPassword';
import ResetPassword from './routes/ResetPassword';
import Index from './routes/dashboard';
import {
  productInfoRouteLoader,
  productSearchLoader,
  productsRouteLoader,
  activateAccountLoader,
  stripePaymentLoader,
  paymentSuccessLoader,
  checkValidPasswordResetTokenLoader,
} from './loaders';
import {
  signUpAction,
  loginAction,
  sendConfirmationEmail,
  updatePasswordAction,
  updateUserDetailsAction,
  forgotPassword,
  resetPasswordAction,
} from './actions';

export const Routing = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoute />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginRoute />,
    action: loginAction,
  },
  {
    path: '/signup',
    element: <SignupRoute />,
    action: signUpAction,
  },
  {
    path: '/product/:asin/:id',
    element: <ProductInfoRoute />,
    loader: productInfoRouteLoader,
  },
  {
    path: '/products/search',
    element: <ProductSearchRoute />,
    loader: productSearchLoader,
  },
  {
    path: '/cart',
    element: <CartRoute />,
  },
  {
    path: '/products',
    element: <ProductsRoute />,
    loader: productsRouteLoader,
  },
  {
    path: '/:id/process-checkout',
    element: <PaymentRoute />,
    loader: stripePaymentLoader,
  },
  {
    path: '/user/:userId',
    element: <UserAccountRoute />,
    children: [
      { index: true, element: <Index /> },
      {
        path: '/user/:userId/userInfo',
        element: <UserInfo />,
        action: updateUserDetailsAction,
      },
      {
        path: '/user/:userId/updatePassword',
        element: <UpdatePassword />,
        action: updatePasswordAction,
      },
      {
        path: '/user/:userId/confirmEmail',
        element: <ConfirmEmail />,
        action: sendConfirmationEmail,
      },
      {
        path: '/user/:userId/deleteAccount',
        element: <DeleteAccount />,
      },
    ],
  },
  {
    path: '/users/activate/:id',
    element: <ActivateAccountRoute />,
    loader: activateAccountLoader,
  },
  {
    path: '/payment_success',
    element: <PaymentSuccess />,
    loader: paymentSuccessLoader,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    action: forgotPassword,
  },
  {
    path: '/users/reset-password/:token',
    element: <ResetPassword />,
    loader: checkValidPasswordResetTokenLoader,
    action: resetPasswordAction,
  },
]);
