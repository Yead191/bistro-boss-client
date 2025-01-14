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
import AllUsers from "../Layout/Dashboard/Admin/AllUsers";
import AddItem from "../Layout/Dashboard/Admin/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Layout/Dashboard/Admin/ManageItems";


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
      // aadmin routes
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'add-items',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: 'manage-items',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
    ]
  }
]);

export default router