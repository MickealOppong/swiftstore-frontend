import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import { About, Cart, Checkout, Error, ErrorPage, HomeLayout, Login, Orders, Products, Register, SingleProduct } from './pages/index';
const queryClient = new QueryClient();

import { loader as landingLoader } from './pages/Landing';
import { loader as productLoader } from './pages/Products';
import { loader as singleProductLoader } from './pages/SingleProduct';
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
        element: <Checkout />
      }

    ]
  },
  {
    path: 'login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: 'register',
    element: <Register />,
    errorElement: <Error />
  }
]);

const App = () => {

  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
}
export default App
