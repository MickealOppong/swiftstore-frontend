import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import { About, Cart, Checkout, Error, ErrorPage, HomeLayout, Login, Orders, Products, Register, SingleProduct } from './pages/index';
const queryClient = new QueryClient();

import { loader as checkoutLoader } from './pages/Checkout';
import { loader as landingLoader } from './pages/Landing';
import { loader as productLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';

import { action as checkoutAction } from './components/CheckoutForm';
import { action as loginAction } from './pages/Login';
import { action as registerAction } from './pages/Register';

import { store } from './store';
const router = createBrowserRouter([
  {
    path: '',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorPage />,
        loader: landingLoader
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorPage />,
        loader: productLoader,
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store)
      }

    ]
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction
  }
]);

const App = () => {

  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
}
export default App
