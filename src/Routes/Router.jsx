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
import UpdateItem from "../Layout/Dashboard/Admin/UpdateItem";
import PaymentHistory from "../Layout/Dashboard/user/PaymentHistory";
import UserHome from "../Layout/Dashboard/user/UserHome";
import AdminHome from "../Layout/Dashboard/Admin/AdminHome";
import ScrollToTop from "../components/ScrollToTop";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<>
      <ScrollToTop></ScrollToTop>
      <Main></Main>
    </>),
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
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      // admin routes
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
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
      {
        path: 'update-item/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`https://bistro-boss-server-nu-nine.vercel.app/menu/${params.id}`)
      },
    ]
  }
]);

export default router