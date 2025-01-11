import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret";
import Dashboard from "../Layout/Dashboard/user/Dashboard";
import Cart from "../Layout/Dashboard/user/cart";
import Payment from "../Layout/Dashboard/user/Payment";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <OrderFood></OrderFood>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/secret',
        element: <PrivateRoute> <Secret></Secret> </PrivateRoute>
      },

    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
    ]
  }
]);

export default router